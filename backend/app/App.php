<?php

/*
 * This file is part of FeatherPanel.
 *
 * MIT License
 *
 * Copyright (c) 2025 MythicalSystems
 * Copyright (c) 2025 Cassian Gherman (NaysKutzu)
 * Copyright (c) 2018 - 2021 Dane Everitt <dane@daneeveritt.com> and Contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

namespace App;

use App\Helpers\ApiResponse;
use App\Logger\LoggerFactory;
use Symfony\Component\Routing\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\RequestContext;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\RouteCollection;
use Symfony\Component\Routing\Matcher\UrlMatcher;
use Symfony\Component\Routing\Exception\MethodNotAllowedException;
use Symfony\Component\Routing\Exception\ResourceNotFoundException;

class App
{
    public static App $instance;
    public RouteCollection $routes;
    public array $middleware = [];

    public function __construct(bool $softBoot, bool $isCron = false, bool $isCli = false)
    {

        /**
         * Instance.
         */
        self::$instance = $this;

        /**
         * Soft boot.
         *
         * If the soft boot is true, we do not want to initialize the database connection or the router.
         *
         * This is useful for commands or other things that do not require the database connection.
         *
         * This is also a lite way to boot the application without initializing the database connection or the router!.
         */
        if ($softBoot) {
            return;
        }

        $this->routes = new RouteCollection();
        $this->registerApiRoutes($this->routes);
        $this->dispatchSymfonyRouter();
    }

    /**
     * Register all api endpoints using Symfony Routing.
     *
     * @param RouteCollection $routes The Symfony RouteCollection instance
     */
    public function registerApiRoutes(RouteCollection $routes): void
    {
        // Load core application routes
        $routesDir = __DIR__ . '/routes';
        $iterator = new \RecursiveIteratorIterator(
            new \RecursiveDirectoryIterator($routesDir, \FilesystemIterator::SKIP_DOTS),
            \RecursiveIteratorIterator::SELF_FIRST
        );

        foreach ($iterator as $file) {
            if ($file->isFile() && $file->getExtension() === 'php') {
                $register = require $file->getPathname();
                if (is_callable($register)) {
                    $register($routes);
                }
            }
        }

    
    }

    /**
     * Dispatch the request using Symfony Routing and handle middleware.
     */
    public function dispatchSymfonyRouter(): void
    {
        $request = Request::createFromGlobals();
        $context = new RequestContext();
        $context->fromRequest($request);
        $matcher = new UrlMatcher($this->routes, $context);

        // Log all registered routes at startup
        $routeList = [];
        foreach ($this->routes as $name => $route) {
            $routeList[] = [
                'name' => $name,
                'path' => $route->getPath(),
                'methods' => $route->getMethods(),
            ];
        }
        self::getLogger()->debug('Registered routes: ' . json_encode($routeList));

        // Log the incoming request
        self::getLogger()->debug('Attempting to match route: ' . $request->getMethod() . ' ' . $request->getPathInfo());

        try {
            $parameters = $matcher->match($request->getPathInfo());
            self::getLogger()->debug('Matched route: ' . ($parameters['_route'] ?? 'unknown') . ' with params: ' . json_encode($parameters));

            $controller = $parameters['_controller'];
            unset($parameters['_controller'], $parameters['_route']);

            // Set route parameters as request attributes
            // - Special keys (starting with '_') are stored without the underscore (e.g., '_permission' -> 'permission')
            // - Regular route params (e.g., 'uuidShort') are stored as-is for middleware/controllers to consume
            foreach ($parameters as $key => $value) {
                if (str_starts_with($key, '_')) {
                    $request->attributes->set(ltrim($key, '_'), $value);
                } else {
                    $request->attributes->set($key, $value);
                }
            }

            // Per-route middleware support
            $routeMiddleware = [];
            if (isset($parameters['_middleware']) && is_array($parameters['_middleware'])) {
                foreach ($parameters['_middleware'] as $middlewareClass) {
                    $routeMiddleware[] = new $middlewareClass();
                }
            }

            // Use route middleware if defined, otherwise global
            $middlewareStack = $routeMiddleware ?: $this->middleware;
            $middlewareStack[] = function ($request) use ($controller, $parameters) {
                // Remove special keys
                unset($parameters['_controller'], $parameters['_route'], $parameters['_middleware']);

                // Always pass parameters as a single associative array after the request
                return call_user_func($controller, $request, $parameters);
            };

            $response = array_reduce(
                array_reverse($middlewareStack),
                function ($next, $middleware) {
                    return function ($request) use ($middleware, $next) {
                        if (is_object($middleware) && method_exists($middleware, 'handle')) {
                            return $middleware->handle($request, $next);
                        }

                        return $middleware($request, $next);
                    };
                },
                function ($request) {
                    return new Response('No controller found', 500);
                }
            )($request);

            if (!$response instanceof Response) {
                $response = new Response($response);
            }
        } catch (ResourceNotFoundException $e) {
            // Log all registered routes for debugging
            $allRoutes = [];
            foreach ($this->routes as $name => $route) {
                $allRoutes[] = $route->getPath();
            }
            $response = ApiResponse::error('The api route does not exist! [' . $request->getPathInfo() . ']', 'API_ROUTE_NOT_FOUND', 404, null);
        } catch (MethodNotAllowedException $e) {
            $response = ApiResponse::error('Method not allowed for this route. Allowed: ' . implode(', ', $e->getAllowedMethods()), 'METHOD_NOT_ALLOWED', 405, null);
        } catch (\Exception $e) {
            self::getLogger()->error(
                'Exception in router: [' . get_class($e) . '] ' .
                'Message: ' . $e->getMessage() .
                ' Code: ' . $e->getCode() .
                ' File: ' . $e->getFile() .
                ' Line: ' . $e->getLine() .
                ' Trace: ' . $e->getTraceAsString()
            );
            $response = ApiResponse::exception('An error occurred: ' . $e->getMessage(), $e->getCode(), $e->getTrace());
        }
        $response->send();
    }
    /**
     * Register a public API route.
     *
     * This route does not require authentication or any middleware by default.
     *
     * @param RouteCollection $routes The Symfony RouteCollection instance to add the route to
     * @param string $name The name of the route
     * @param string $path The URL path for the route (e.g. '/api/public/data')
     * @param callable $controller The controller to handle the request
     * @param array $methods The HTTP methods allowed for this route (default: ['GET'])
     */
    public function registerApiRoute(RouteCollection $routes, string $name, string $path, callable $controller, array $methods = ['GET']): void
    {
        $routes->add($name, new Route(
            $path,
            [
                '_controller' => $controller,
                '_middleware' => [],
            ],
            [], // requirements
            [], // options
            '', // host
            [], // schemes
            $methods
        ));
    }

    /**
     * Get the logger factory.
     */
    public function getLogger(): LoggerFactory
    {
        return new LoggerFactory(__DIR__ . '/../storage/logs/App.fplog');
    }

    /**
     * Get the web server logger factory.
     */
    public function getWebServerLogger(): LoggerFactory
    {
        return new LoggerFactory(__DIR__ . '/../storage/logs/featherpanel-web.fplog');
    }

    /**
     * Get the instance of the App class.
     */
    public static function getInstance(bool $softBoot, bool $isCron = false, bool $testMode = false): App
    {
        if (!isset(self::$instance)) {
            self::$instance = new self($softBoot, $isCron, $testMode);
        }

        return self::$instance;
    }
}
