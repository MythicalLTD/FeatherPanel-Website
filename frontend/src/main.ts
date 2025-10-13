/*
MIT License

Copyright (c) 2025 MythicalSystems
Copyright (c) 2025 Cassian Gherman (NaysKutzu)
Copyright (c) 2018 - 2021 Dane Everitt <dane@daneeveritt.com> and Contributors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

import './assets/main.css';
import 'vue-toastification/dist/index.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import Toast from 'vue-toastification';

// Performance optimization: Create app with production tip disabled
const app = createApp(App, {
    // Disable production tip
    productionTip: false,
    // Disable devtools
    devtools: false,
});

// Performance optimization: Disable devtools in production
if (import.meta.env.PROD) {
    // @ts-expect-error - devtools is a valid property but not in types
    app.config.devtools = false;

    // Performance optimization: Disable warnings in production
    app.config.warnHandler = () => null;
}

// Performance optimization: Register plugins with proper error handling and lazy loading
const registerPlugins = async () => {
    try {
        app.use(router);
        app.use(Toast, {
            // Toast configuration options
            position: 'top-right',
            timeout: 5000,
            closeOnClick: true,
            pauseOnFocusLoss: true,
            pauseOnHover: true,
            draggable: true,
            draggablePercent: 0.6,
            showCloseButtonOnHover: false,
            hideProgressBar: false,
            closeButton: 'button',
            icon: true,
            rtl: false,
            maxToasts: 20,
            newestOnTop: true,
        });
    } catch (error) {
        console.error('Failed to initialize Vue plugins:', error);
    }
};

// Mount the app with error boundary and performance monitoring
const mountApp = async () => {
    try {
        await registerPlugins();

        // Performance optimization: Use requestAnimationFrame for mounting
        requestAnimationFrame(() => {
            app.mount('#app');
        });
    } catch (error) {
        console.error('Failed to mount Vue app:', error);
        document.getElementById('app')!.innerHTML = `
            <div style="text-align: center; padding: 20px;">
                <h2>Application Error</h2>
                <p>Sorry, something went wrong. Please try refreshing the page.</p>
            </div>
        `;
    }
};

// Initialize app and plugins
const initializeApp = async () => {
    await mountApp();
};

initializeApp();
