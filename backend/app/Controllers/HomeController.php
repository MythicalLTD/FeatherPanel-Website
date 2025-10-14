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

namespace App\Controllers;

use App\Helpers\ApiResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class HomeController
{
    public function index(Request $request): Response
    {
        return ApiResponse::success(null, 'Welcome to the Home route!');
    }
    public function onlinePluginsList(Request $request): Response
    {
        try {
            // New official packages API
            $base = 'https://api.featherpanel.com/packages';
            $q = trim((string) ($request->query->get('q') ?? ''));
            $page = (int) ($request->query->get('page') ?? 1);
            $perPage = (int) ($request->query->get('per_page') ?? 20);
            $query = [];
            if ($q !== '') {
                $query['search'] = $q;
            }
            if ($page > 0) {
                $query['page'] = (string) $page;
            }
            if ($perPage > 0) {
                $query['per_page'] = (string) $perPage;
            }
            $url = $base . (!empty($query) ? ('?' . http_build_query($query)) : '');
            $context = stream_context_create([
                'http' => [
                    'timeout' => 10,
                    'ignore_errors' => true,
                ],
            ]);
            $response = @file_get_contents($url, false, $context);
            if ($response === false) {
                return ApiResponse::error('Failed to fetch online addon list', 'ONLINE_LIST_FETCH_FAILED', 500);
            }

            $data = json_decode($response, true);
            if (!is_array($data) || !isset($data['data']['packages']) || !is_array($data['data']['packages'])) {
                return ApiResponse::error('Invalid response from online addon list', 'ONLINE_LIST_INVALID', 500);
            }

            $packages = $data['data']['packages'];
            $addons = array_map(static function (array $pkg): array {
                $latest = $pkg['latest_version'] ?? [];
                $downloadUrl = isset($latest['download_url']) ? ('https://api.featherpanel.com' . $latest['download_url']) : null;

                $iconUrl = $pkg['icon_url'];
                // If iconUrl is set and not empty, ensure it is https
                if (!empty($iconUrl) && is_string($iconUrl)) {
                    if (strpos($iconUrl, 'http://') === 0) {
                        $iconUrl = 'https://' . substr($iconUrl, 7);
                    }
                }

                return [
                    // Basic identity
                    'id' => $pkg['id'] ?? null,
                    'identifier' => $pkg['name'] ?? '',
                    'name' => $pkg['display_name'] ?? ($pkg['name'] ?? ''),
                    'description' => $pkg['description'] ?? null,
                    'icon' => $iconUrl,
                    'website' => $pkg['website'] ?? null,
                    // Authors/maintainers
                    'author' => $pkg['author'] ?? null,
                    'author_email' => $pkg['author_email'] ?? null,
                    'maintainers' => $pkg['maintainers'] ?? [],
                    // Meta
                    'tags' => $pkg['tags'] ?? [],
                    'verified' => isset($pkg['verified']) ? (int) $pkg['verified'] === 1 : false,
                    'downloads' => $pkg['downloads'] ?? 0,
                    'created_at' => $pkg['created_at'] ?? null,
                    'updated_at' => $pkg['updated_at'] ?? null,
                    // Premium
                    'premium' => isset($pkg['premium']) ? (int) $pkg['premium'] === 1 : false,
                    'premium_link' => $pkg['premium_link'] ?? null,
                    'premium_price' => $pkg['premium_price'] ?? null,
                    // Latest version
                    'latest_version' => [
                        'version' => $latest['version'] ?? null,
                        'download_url' => $downloadUrl,
                        'file_size' => $latest['file_size'] ?? null,
                        'created_at' => $latest['created_at'] ?? null,
                    ],
                ];
            }, $packages);

            $pagination = $data['data']['pagination'] ?? null;

            return ApiResponse::success([
                'addons' => $addons,
                'pagination' => $pagination,
            ], 'Online addons fetched', 200);
        } catch (\Exception $e) {
            return ApiResponse::error('Failed to fetch online addons: ' . $e->getMessage(), 500);
        }
    }

    public function onlineSpellsList(Request $request): Response
    {
        try {
            $base = 'https://api.featherpanel.com/spells';
            $q = trim((string) ($request->query->get('q') ?? ''));
            $page = (int) ($request->query->get('page') ?? 1);
            $perPage = (int) ($request->query->get('per_page') ?? 20);
            $query = [];
            if ($q !== '') {
                $query['search'] = $q;
            }
            if ($page > 0) {
                $query['page'] = (string) $page;
            }
            if ($perPage > 0) {
                $query['per_page'] = (string) $perPage;
            }
            $url = $base . (!empty($query) ? ('?' . http_build_query($query)) : '');
            $context = stream_context_create([
                'http' => [
                    'timeout' => 10,
                    'ignore_errors' => true,
                ],
            ]);
            $response = @file_get_contents($url, false, $context);
            if ($response === false) {
                return ApiResponse::error('Failed to fetch online spell list', 'ONLINE_LIST_FETCH_FAILED', 500);
            }

            $data = json_decode($response, true);
            if (!is_array($data) || !isset($data['data']['spells']) || !is_array($data['data']['spells'])) {
                return ApiResponse::error('Invalid response from online spell list', 'ONLINE_LIST_INVALID', 500);
            }

            $spells = $data['data']['spells'];
            $onlineSpells = array_map(static function (array $spell): array {
                $latest = $spell['latest_version'] ?? [];
                $downloadUrl = isset($latest['download_url']) ? ('https://api.featherpanel.com' . $latest['download_url']) : null;
                if (isset($spell['icon_url'])) {
                    $iconUrl = $spell['icon_url'];
                    // If iconUrl is set and not empty, ensure it is https
                    if (!empty($iconUrl) && is_string($iconUrl)) {
                        if (strpos($iconUrl, 'http://') === 0) {
                            $iconUrl = 'https://' . substr($iconUrl, 7);
                        }
                    }
                } else {
                    $iconUrl = null;
                }

                return [
                    // Basic identity
                    'id' => $spell['id'] ?? null,
                    'identifier' => $spell['name'] ?? '',
                    'name' => $spell['display_name'] ?? ($spell['name'] ?? ''),
                    'description' => $spell['description'] ?? null,
                    'icon' => $iconUrl,
                    'website' => $spell['website'] ?? null,
                    // Authors/maintainers
                    'author' => $spell['author'] ?? null,
                    'author_email' => $spell['author_email'] ?? null,
                    'maintainers' => $spell['maintainers'] ?? [],
                    // Meta
                    'tags' => $spell['tags'] ?? [],
                    'verified' => isset($spell['verified']) ? (int) $spell['verified'] === 1 : false,
                    'downloads' => $spell['downloads'] ?? 0,
                    'created_at' => $spell['created_at'] ?? null,
                    'updated_at' => $spell['updated_at'] ?? null,
                    // Latest version
                    'latest_version' => [
                        'version' => $latest['version'] ?? null,
                        'download_url' => $downloadUrl,
                        'file_size' => $latest['file_size'] ?? null,
                        'created_at' => $latest['created_at'] ?? null,
                    ],
                ];
            }, $spells);

            $pagination = $data['data']['pagination'] ?? null;

            return ApiResponse::success([
                'spells' => $onlineSpells,
                'pagination' => $pagination,
            ], 'Online spells fetched', 200);
        } catch (\Exception $e) {
            return ApiResponse::error('Failed to fetch online spells: ' . $e->getMessage(), 500);
        }
    }
    public function onlineVersionsList(Request $request): Response
    {
        return ApiResponse::success($this->fetchVersionInfo(), 'Online versions fetched', 200);
    }
    private function fetchVersionInfo(): array
    {
        $versionInfo = [
            'current' => null,
            'latest' => null,
        ];

        try {
            // Fetch latest version details only (always use latest)
            $latestVersionUrl = 'https://api.featherpanel.com/versions/latest?type=alpha';
            $context = stream_context_create([
                'http' => [
                    'timeout' => 10,
                    'user_agent' => 'FeatherPanel/latest',
                ],
            ]);

            $latestVersionResponse = @file_get_contents($latestVersionUrl, false, $context);

            if ($latestVersionResponse !== false) {
                $latestVersionData = json_decode($latestVersionResponse, true);
                if (isset($latestVersionData['success']) && $latestVersionData['success'] && isset($latestVersionData['data']['version'])) {
                    // Always treat latest as what you should be on
                    $versionInfo['current'] = $latestVersionData['data']['version'];
                    $versionInfo['latest'] = $latestVersionData['data']['version'];
                }
            }
        } catch (\Exception $e) {
            // Fail gracefully
        }

        return $versionInfo;
    }
}
