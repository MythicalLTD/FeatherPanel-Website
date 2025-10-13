<template>
    <section id="features" class="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div class="max-w-7xl mx-auto">
            <div class="text-center mb-16">
                <h2 class="text-4xl md:text-5xl font-bold mb-4 animate-slide-in-up">
                    <span class="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                        Why FeatherPanel?
                    </span>
                </h2>
                <p class="text-xl text-gray-400 animate-slide-in-up stagger-1">
                    Built from the ground up with modern technologies
                </p>
            </div>

            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div
                    v-for="(feature, index) in features"
                    :key="index"
                    class="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 cursor-pointer group animate-slide-in-up"
                    :class="`stagger-${index + 1}`"
                >
                    <div
                        class="w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300"
                        :class="feature.bgGradient"
                    >
                        <component :is="feature.icon" :class="`w-6 h-6 ${feature.iconColor}`" />
                    </div>
                    <h3
                        class="text-xl font-semibold mb-2 transition-colors duration-300"
                        :class="`group-hover:${feature.iconColor}`"
                    >
                        {{ feature.title }}
                    </h3>
                    <p class="text-gray-400 leading-relaxed">
                        {{ feature.description }}
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { Zap, Feather, Shield, Puzzle, RefreshCw, Palette } from 'lucide-vue-next';

const features = [
    {
        title: 'Lightning Fast',
        description: '22x faster than Pterodactyl with response times under 45ms. Your servers deserve speed.',
        icon: Zap,
        iconColor: 'text-blue-400',
        bgGradient: 'bg-gradient-to-br from-blue-500/20 to-cyan-500/20',
    },
    {
        title: 'Feather Light',
        description: '204x lighter than competitors. Minimal resource usage means more power for your game servers.',
        icon: Feather,
        iconColor: 'text-purple-400',
        bgGradient: 'bg-gradient-to-br from-purple-500/20 to-pink-500/20',
    },
    {
        title: 'Enterprise Security',
        description: 'TLS 1.3, AES-256 encryption, 2FA, and comprehensive audit trails keep your servers secure. All with open source code. And a powerful 0 trust policy.',
        icon: Shield,
        iconColor: 'text-green-400',
        bgGradient: 'bg-gradient-to-br from-green-500/20 to-emerald-500/20',
    },
    {
        title: 'Native Plugins',
        description:
            'Built-in plugin system with drag-and-drop builder. Extend functionality without touching core code.',
        icon: Puzzle,
        iconColor: 'text-orange-400',
        bgGradient: 'bg-gradient-to-br from-orange-500/20 to-red-500/20',
    },
    {
        title: '100% Compatible',
        description: 'Have a game? An app? Or anything in mind? Be sure that FeatherPanel can run it :)',
        icon: RefreshCw,
        iconColor: 'text-cyan-400',
        bgGradient: 'bg-gradient-to-br from-cyan-500/20 to-blue-500/20',
    },
    {
        title: 'Fully Customizable',
        description: 'Premium themes, extensive customization options, and branding controls to match your style.',
        icon: Palette,
        iconColor: 'text-pink-400',
        bgGradient: 'bg-gradient-to-br from-pink-500/20 to-purple-500/20',
    },
];
</script>
