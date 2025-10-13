<template>
    <section class="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div class="max-w-7xl mx-auto">
            <div class="text-center mb-16">
                <h2 class="text-4xl md:text-5xl font-bold mb-4 animate-slide-in-up">
                    <span class="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                        Feature Comparison
                    </span>
                </h2>
                <p class="text-xl text-gray-400 animate-slide-in-up stagger-1">
                    See how FeatherPanel stacks up against the competition
                </p>
            </div>

            <div
                class="overflow-x-auto rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm animate-scale-in"
            >
                <table class="w-full">
                    <thead class="bg-white/5 border-b border-white/10">
                        <tr>
                            <th class="px-6 py-4 text-sm font-semibold text-left">Feature</th>
                            <th class="px-6 py-4 text-sm font-semibold text-center">
                                <div class="flex flex-col items-center gap-2">
                                    <div
                                        class="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center animate-pulse-glow"
                                    >
                                        <Feather class="w-5 h-5" />
                                    </div>
                                    <span>FeatherPanel</span>
                                </div>
                            </th>
                            <th class="px-6 py-4 text-sm font-semibold text-center">Pterodactyl</th>
                            <th class="px-6 py-4 text-sm font-semibold text-center">Pelican</th>
                            <th class="px-6 py-4 text-sm font-semibold text-center">Pyrodactyl</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                            v-for="(row, index) in comparisonData"
                            :key="index"
                            class="hover:bg-white/5 transition-colors duration-200"
                        >
                            <td class="px-6 py-4 border-b border-white/5">{{ row.feature }}</td>
                            <td class="px-6 py-4 border-b border-white/5 text-center">
                                <component
                                    :is="Check"
                                    v-if="row.feather === 'check'"
                                    class="w-5 h-5 text-green-400 mx-auto hover:scale-125 transition-transform"
                                />
                                <component
                                    :is="X"
                                    v-else-if="row.feather === 'x'"
                                    class="w-5 h-5 text-red-400 mx-auto"
                                />
                                <component
                                    :is="Minus"
                                    v-else-if="row.feather === 'minus'"
                                    class="w-5 h-5 text-yellow-400 mx-auto"
                                />
                                <span v-else :class="row.featherClass">{{ row.feather }}</span>
                            </td>
                            <td class="px-6 py-4 border-b border-white/5 text-center">
                                <component
                                    :is="Check"
                                    v-if="row.pterodactyl === 'check'"
                                    class="w-5 h-5 text-green-400 mx-auto"
                                />
                                <component
                                    :is="X"
                                    v-else-if="row.pterodactyl === 'x'"
                                    class="w-5 h-5 text-red-400 mx-auto"
                                />
                                <component
                                    :is="Minus"
                                    v-else-if="row.pterodactyl === 'minus'"
                                    class="w-5 h-5 text-yellow-400 mx-auto"
                                />
                                <span v-else class="text-gray-500">{{ row.pterodactyl }}</span>
                            </td>
                            <td class="px-6 py-4 border-b border-white/5 text-center">
                                <component
                                    :is="Check"
                                    v-if="row.pelican === 'check'"
                                    class="w-5 h-5 text-green-400 mx-auto"
                                />
                                <component
                                    :is="X"
                                    v-else-if="row.pelican === 'x'"
                                    class="w-5 h-5 text-red-400 mx-auto"
                                />
                                <component
                                    :is="Minus"
                                    v-else-if="row.pelican === 'minus'"
                                    class="w-5 h-5 text-yellow-400 mx-auto"
                                />
                                <span v-else class="text-gray-500">{{ row.pelican }}</span>
                            </td>
                            <td class="px-6 py-4 border-b border-white/5 text-center">
                                <component
                                    :is="Check"
                                    v-if="row.pyrodactyl === 'check'"
                                    class="w-5 h-5 text-green-400 mx-auto"
                                />
                                <component
                                    :is="X"
                                    v-else-if="row.pyrodactyl === 'x'"
                                    class="w-5 h-5 text-red-400 mx-auto"
                                />
                                <component
                                    :is="Minus"
                                    v-else-if="row.pyrodactyl === 'minus'"
                                    class="w-5 h-5 text-yellow-400 mx-auto"
                                />
                                <span v-else class="text-gray-500">{{ row.pyrodactyl }}</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </section>
</template>

<script setup>
import { Feather, Check, X, Minus } from 'lucide-vue-next';

const comparisonData = [
    { feature: 'Wings Compatibility', feather: 'check', pterodactyl: 'check', pelican: 'check', pyrodactyl: 'check' },
    { feature: 'Native Plugin System', feather: 'check', pterodactyl: 'x', pelican: 'x', pyrodactyl: 'x' },
    {
        feature: 'Response Time',
        feather: '24 ms',
        featherClass: 'font-semibold text-blue-400',
        pterodactyl: '49 ms',
        pelican: '59 ms',
        pyrodactyl: '63 ms',
    },
    {
        feature: 'File Size',
        feather: '7 MB',
        featherClass: 'font-semibold text-purple-400',
        pterodactyl: '14 MB',
        pelican: '14 MB',
        pyrodactyl: '16 MB',
    },
    {
        feature: 'Memory Usage',
        feather: '157 MB',
        featherClass: 'font-semibold text-green-400',
        pterodactyl: '350 MB',
        pelican: '268 MB',
        pyrodactyl: '218 MB',
    },
    { feature: 'Modern UI Framework', feather: 'check', pterodactyl: 'x', pelican: 'x', pyrodactyl: 'x' },
    { feature: 'Friendly Mobile UI', feather: 'check', pterodactyl: 'minus', pelican: 'minus', pyrodactyl: 'minus' },
    { feature: 'Open Source', feather: 'check', pterodactyl: 'check', pelican: 'check', pyrodactyl: 'check' },
];

</script>
