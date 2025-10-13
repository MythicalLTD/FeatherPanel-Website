<template>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
        <div
            v-for="(stat, index) in stats"
            :key="index"
            class="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 hover:scale-105 hover:-translate-y-2 transition-all duration-300 cursor-pointer group animate-scale-in"
            :class="`stagger-${index + 1}`"
        >
            <div
                class="text-3xl md:text-4xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300"
                :class="stat.gradient"
            >
                {{ stat.value }}
            </div>
            <div class="text-sm text-gray-400">{{ stat.label }}</div>
            <div
                class="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl"
                :class="stat.glowColor"
            ></div>
        </div>
    </div>
</template>

<script setup>
const stats = [
    {
        value: '204x',
        label: 'Lighter',
        gradient: 'bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent',
        glowColor: 'bg-blue-500',
    },
    {
        value: '22x',
        label: 'Faster',
        gradient: 'bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent',
        glowColor: 'bg-purple-500',
    },
    {
        value: '99.9%',
        label: 'Uptime',
        gradient: 'bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent',
        glowColor: 'bg-green-500',
    },
    {
        value: '<45ms',
        label: 'Response',
        gradient: 'bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent',
        glowColor: 'bg-orange-500',
    },
];
</script>
