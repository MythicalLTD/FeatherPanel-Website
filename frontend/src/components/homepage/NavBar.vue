<template>
    <nav class="relative z-50 border-b border-white/10 backdrop-blur-xl bg-black/50 sticky top-0">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-16">
                <div class="flex items-center gap-2 group cursor-pointer">
                    <div
                        class="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300"
                    >
                        <img src="https://cdn.mythical.systems/featherpanel/logo.png" alt="FeatherPanel Logo" class="w-6 h-6" />
                    </div>
                    <span
                        class="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
                    >
                        FeatherPanel
                    </span>
                </div>
                <div class="hidden md:flex items-center gap-8">
                    <a
                        v-for="link in navLinks"
                        :key="link.href"
                        :href="link.href"
                        class="text-gray-400 hover:text-white transition-colors relative group"
                    >
                        {{ link.label }}
                        <span
                            class="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"
                        ></span>
                    </a>
                </div>
                <div class="flex items-center gap-4">
                    <button
                        @click="handleSignIn"
                        class="px-4 py-2 text-sm text-gray-300 hover:text-white transition-colors"
                    >
                        Sign In
                    </button>
                    <button @click="handleGetStarted"
                        class="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-sm font-medium hover:shadow-lg hover:shadow-purple-500/50 transform hover:scale-105 transition-all duration-300"
                    >
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup>

const navLinks = [
    { label: 'Features', href: '#features' },
    { label: 'Screenshots', href: '#screenshots' },
    { label: 'Benchmarks', href: '#benchmarks' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Docs', href: 'https://docs.mythical.systems/docs/featherpanel/welcome-featherpanel/#installation' },
];

const handleGetStarted = () => {
    window.open('https://docs.mythical.systems/docs/featherpanel/welcome-featherpanel/#installation', '_blank');
};

const handleSignIn = () => {
    window.open('https://cloud.mythical.systems', '_blank');
};
</script>
