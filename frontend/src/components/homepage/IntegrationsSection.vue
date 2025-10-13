<template>
    <section class="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div class="max-w-7xl mx-auto">
            <div class="text-center mb-16">
                <h2 class="text-4xl md:text-5xl font-bold mb-4 animate-slide-in-up">
                    <span class="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                        Seamless Integrations
                    </span>
                </h2>
                <p class="text-xl text-gray-400 animate-slide-in-up stagger-1">
                    Connect with your favorite tools and services
                </p>
            </div>

            <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                <div
                    v-for="(integration, index) in integrations"
                    :key="index"
                    class="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 hover:scale-110 hover:-translate-y-2 transition-all duration-300 cursor-pointer flex flex-col items-center gap-3 group animate-scale-in"
                    :class="`stagger-${(index % 6) + 1}`"
                >
                    <div
                        class="w-16 h-16 rounded-lg bg-white/5 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300"
                    >
                        <component
                            :is="integration.icon"
                            :class="`w-8 h-8 ${integration.color} group-hover:animate-bounce-subtle`"
                        />
                    </div>
                    <span class="text-sm text-gray-400 group-hover:text-white transition-colors">
                        {{ integration.name }}
                    </span>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { Database, Cloud, Mail, Globe, Plus } from 'lucide-vue-next';

const integrations = [
    { name: 'MySQL', icon: Database, color: 'text-blue-400' },
    { name: 'PostgreSQL', icon: Database, color: 'text-cyan-400' },
    { name: 'Redis', icon: Cloud, color: 'text-orange-400' },
    { name: 'SMTP', icon: Mail, color: 'text-red-400' },
    { name: 'Cloudflare', icon: Globe, color: 'text-pink-400' },
    { name: 'And More', icon: Plus, color: 'text-gray-400' },
];
</script>
