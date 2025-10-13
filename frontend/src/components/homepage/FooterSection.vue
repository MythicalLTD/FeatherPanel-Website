<template>
    <footer class="relative z-10 border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8 backdrop-blur-xl bg-black/50">
        <div class="max-w-7xl mx-auto">
            <div class="grid md:grid-cols-4 gap-8 mb-8">
                <div class="animate-slide-in-left">
                    <div class="flex items-center gap-2 mb-4">
                        <div
                            class="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center animate-pulse-glow"
                        >
                            <img src="https://cdn.mythical.systems/featherpanel/logo.png" alt="FeatherPanel Logo" class="w-6 h-6" />
                        </div>
                        <span class="text-xl font-bold">FeatherPanel</span>
                    </div>
                    <p class="text-gray-400 text-sm leading-relaxed">
                        Light as a feather, powerful as a storm. The future of game server management.
                    </p>
                </div>
                <div class="animate-slide-in-up stagger-1">
                    <h4 class="font-semibold mb-4">Product</h4>
                    <ul class="space-y-2 text-sm">
                        <li v-for="link in productLinks" :key="link.href">
                            <a
                                :href="link.href"
                                class="text-gray-400 hover:text-white transition-colors relative inline-block group"
                            >
                                {{ link.label }}
                                <span
                                    class="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"
                                ></span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="animate-slide-in-up stagger-2">
                    <h4 class="font-semibold mb-4">Company</h4>
                    <ul class="space-y-2 text-sm">
                        <li v-for="link in companyLinks" :key="link.href">
                            <a
                                :href="link.href"
                                class="text-gray-400 hover:text-white transition-colors relative inline-block group"
                            >
                                {{ link.label }}
                                <span
                                    class="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"
                                ></span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="animate-slide-in-right">
                    <h4 class="font-semibold mb-4">Community</h4>
                    <ul class="space-y-2 text-sm">
                        <li v-for="link in communityLinks" :key="link.href">
                            <a
                                :href="link.href"
                                class="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group"
                            >
                                <component
                                    :is="link.icon"
                                    v-if="link.icon"
                                    class="w-4 h-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300"
                                />
                                {{ link.label }}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div
                class="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 animate-slide-in-up"
            >
                <p class="text-sm text-gray-400">© 2025 FeatherPanel by MythicalSystems. All rights reserved.</p>
                <div class="flex gap-6 text-sm text-gray-400">
                    <a
                        v-for="link in legalLinks"
                        :key="link.href"
                        :href="link.href"
                        class="hover:text-white transition-colors relative group"
                    >
                        {{ link.label }}
                        <span
                            class="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"
                        ></span>
                    </a>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>
import { Github, MessageCircle } from 'lucide-vue-next';

const productLinks = [
    { label: 'Features', href: '#features' },
    { label: 'Screenshots', href: '#screenshots' },
    { label: 'Benchmarks', href: '#benchmarks' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Documentation', href: '#docs' },
];

const companyLinks = [
    { label: 'About', href: 'https://www.mythical.systems' },
    { label: 'Contact', href: 'mailto:support@mythical.systems' },
];

const communityLinks = [
    { label: 'GitHub', href: 'https://github.com/mythicalltd/FeatherPanel', icon: Github },
    { label: 'Discord', href: 'https://discord.mythical.systems', icon: MessageCircle },
];

const legalLinks = [
    { label: 'Privacy Policy', href: 'https://www.mythical.systems/privacy' },
    { label: 'Terms of Service', href: 'https://www.mythical.systems/terms' },
    { label: 'License', href: 'https://github.com/mythicalltd/FeatherPanel/blob/main/LICENSE' },
];
</script>
