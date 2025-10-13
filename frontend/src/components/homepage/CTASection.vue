<template>
    <section class="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto">
            <div
                class="p-12 rounded-3xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-white/10 backdrop-blur-sm hover:border-white/20 transition-all duration-300 text-center animate-scale-in"
            >
                <h2 class="text-4xl md:text-5xl font-bold mb-6">
                    <span
                        class="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient-x"
                    >
                        Ready to Take Flight?
                    </span>
                </h2>
                <p class="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                    Join the revolution in game server management. Experience the panel that's light as a feather yet
                    powerful as a storm.
                </p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                    <button
                        @click="handleGetStarted"
                        class="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-lg font-semibold overflow-hidden transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/50"
                    >
                        <span class="relative z-10 flex items-center gap-2">
                            Get Started Free
                            <ArrowRight class="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                        </span>
                        <div
                            class="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        ></div>
                    </button>
                    <button
                        @click="handleViewOnGitHub"
                        class="group px-8 py-4 bg-white/5 border border-white/10 rounded-xl text-lg font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm flex items-center gap-2 hover:-translate-y-1"
                    >
                        <Github
                            class="w-5 h-5 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300"
                        />
                        View on GitHub
                    </button>
                </div>
                <div class="inline-flex items-center gap-2 text-sm text-gray-400">
                    <Shield class="w-4 h-4 animate-pulse-glow" />
                    <span>No credit card required • Open source • Free forever</span>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ArrowRight, Github, Shield } from 'lucide-vue-next';

const handleGetStarted = () => {
    window.open('https://docs.mythical.systems/docs/featherpanel/welcome-featherpanel#installing-featherpanel-canary', '_blank');
};

const handleViewOnGitHub = () => {
    window.open('https://github.com/mythicalltd/FeatherPanel', '_blank');
};
</script>
