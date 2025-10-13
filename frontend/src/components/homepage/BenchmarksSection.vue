<template>
    <section id="benchmarks" class="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div class="max-w-7xl mx-auto">
            <div class="text-center mb-16">
                <h2 class="text-4xl md:text-5xl font-bold mb-4 animate-slide-in-up">
                    <span class="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                        Performance Benchmarks
                    </span>
                </h2>
                <p class="text-xl text-gray-400 animate-slide-in-up stagger-1">
                    Real-world performance comparison on Debian 13 with Ryzen 5 5600G
                </p>
            </div>

            <div class="grid md:grid-cols-2 gap-8">
                <div
                    v-for="(benchmark, index) in benchmarks"
                    :key="index"
                    class="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300 animate-scale-in"
                    :class="`stagger-${index + 1}`"
                >
                    <div class="flex items-center justify-between mb-6">
                        <h3 class="text-xl font-semibold flex items-center gap-2">
                            <component :is="benchmark.icon" :class="`w-5 h-5 ${benchmark.iconColor}`" />
                            {{ benchmark.title }}
                        </h3>
                        <span class="text-sm text-gray-500">{{ benchmark.note }}</span>
                    </div>
                    <div class="space-y-4">
                        <div
                            v-for="(item, idx) in benchmark.data"
                            :key="idx"
                            class="transition-transform duration-300 hover:scale-105"
                        >
                            <div class="flex justify-between mb-2">
                                <span class="text-sm text-gray-400">{{ item.name }}</span>
                                <span
                                    class="text-sm font-semibold"
                                    :class="item.isFeather ? benchmark.highlightColor : 'text-gray-500'"
                                >
                                    {{ item.value }}
                                </span>
                            </div>
                            <div class="h-3 bg-white/5 rounded-full overflow-hidden">
                                <div
                                    class="h-full rounded-full transition-all duration-1000 ease-out"
                                    :class="
                                        item.isFeather
                                            ? benchmark.gradient
                                            : 'bg-gradient-to-r from-gray-600 to-gray-500'
                                    "
                                    :style="{ width: item.width, animationDelay: `${idx * 0.1}s` }"
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { Zap, Package, Cpu, Activity } from 'lucide-vue-next';

const benchmarks = [
    {
        title: 'Response Time [Web Browser]',
        note: 'Relative response time (lower is better)',
        icon: Zap,
        iconColor: 'text-blue-400',
        highlightColor: 'text-blue-400',
        gradient: 'bg-gradient-to-r from-blue-500 to-cyan-500',
        data: [
            { name: 'FeatherPanel', value: '24 ms', width: '28%', isFeather: true },
            { name: 'Pterodactyl', value: '49 ms', width: '57%', isFeather: false },
            { name: 'Pelican', value: '59 ms', width: '69%', isFeather: false },
            { name: 'Pyrodactyl', value: '63 ms', width: '74%', isFeather: false },
        ],
    },
    {
        title: 'File Size [Server]',
        note: 'Approximate file size (lower is better, without dependencies)',
        icon: Package,
        iconColor: 'text-purple-400',
        highlightColor: 'text-purple-400',
        gradient: 'bg-gradient-to-r from-purple-500 to-pink-500',
        data: [
            { name: 'FeatherPanel', value: '7 MB', width: '50%', isFeather: true },
            { name: 'Pterodactyl', value: '14 MB', width: '100%', isFeather: false },
            { name: 'Pelican', value: '14 MB', width: '100%', isFeather: false },
            { name: 'Pyrodactyl', value: '16 MB', width: '115%', isFeather: false },
        ],
    },
    {
        title: 'Memory Usage [Web Browser]',
        note: 'Average RAM usage while idle (lower is better)',
        icon: Cpu,
        iconColor: 'text-green-400',
        highlightColor: 'text-green-400',
        gradient: 'bg-gradient-to-r from-green-500 to-emerald-500',
        data: [
            { name: 'FeatherPanel', value: '157 MB', width: '45%', isFeather: true },
            { name: 'Pterodactyl', value: '350 MB', width: '100%', isFeather: false },
            { name: 'Pelican', value: '268 MB', width: '77%', isFeather: false },
            { name: 'Pyrodactyl', value: '218 MB', width: '62%', isFeather: false },
        ],
    },
    {
        title: 'Load Usage [Server]',
        note: 'VM usage while on load (lower is better)',
        icon: Activity,
        iconColor: 'text-orange-400',
        highlightColor: 'text-orange-400',
        gradient: 'bg-gradient-to-r from-orange-500 to-red-500',
        data: [
            { name: 'FeatherPanel', value: '1.7%', width: '33%', isFeather: true },
            { name: 'Pterodactyl', value: '5.1%', width: '100%', isFeather: false },
            { name: 'Pelican', value: '3.8%', width: '75%', isFeather: false },
            { name: 'Pyrodactyl', value: '4.2%', width: '82%', isFeather: false },
        ],
    },
];
</script>
