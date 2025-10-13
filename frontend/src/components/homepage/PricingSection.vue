<template>
    <section id="pricing" class="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div class="max-w-7xl mx-auto">
            <div class="text-center mb-16">
                <h2 class="text-4xl md:text-5xl font-bold mb-4 animate-slide-in-up">
                    <span class="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                        Simple, Transparent Pricing
                    </span>
                </h2>
                <p class="text-xl text-gray-400 animate-slide-in-up stagger-1">
                    Choose the perfect plan for your needs
                </p>
            </div>

            <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <!-- Free Plan -->
                <div
                    class="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 hover:scale-105 hover:-translate-y-2 transition-all duration-300 group animate-scale-in stagger-1"
                >
                    <div class="mb-6">
                        <h3 class="text-2xl font-bold mb-2">Free</h3>
                        <div class="flex items-baseline gap-2 mb-4">
                            <span class="text-5xl font-bold">$0</span>
                            <span class="text-gray-400">/month</span>
                        </div>
                        <p class="text-gray-400">Perfect for getting started</p>
                    </div>
                    <ul class="space-y-4 mb-8">
                        <li v-for="(feature, index) in freeFeatures" :key="index" class="flex items-start gap-3">
                            <Check
                                class="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0 group-hover:scale-125 transition-transform"
                                :style="{ transitionDelay: `${index * 0.05}s` }"
                            />
                            <span class="text-gray-300">{{ feature }}</span>
                        </li>
                    </ul>
                    <button
                        @click="handleGetStarted"
                        class="w-full py-3 bg-white/5 border border-white/10 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
                    >
                        Get Started
                    </button>
                </div>

                <!-- Pro Plan (Featured) -->
                <div
                    class="relative p-8 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-2 border-blue-500/50 backdrop-blur-sm hover:border-purple-500/50 hover:scale-105 hover:-translate-y-2 transition-all duration-300 group animate-scale-in stagger-2"
                >
                    <div
                        class="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-sm font-semibold animate-bounce-subtle"
                    >
                        Most Popular
                    </div>
                    <div class="mb-6">
                        <h3 class="text-2xl font-bold mb-2">Professional (Hosted)</h3>
                        <div class="flex items-baseline gap-2 mb-4">
                            <span
                                class="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
                            >
                                $29
                            </span>
                            <span class="text-gray-400">/month</span>
                        </div>
                        <p class="text-gray-400">For serious hosting providers</p>
                    </div>
                    <ul class="space-y-4 mb-8">
                        <li v-for="(feature, index) in proFeatures" :key="index" class="flex items-start gap-3">
                            <Check
                                class="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0 group-hover:scale-125 transition-transform"
                                :style="{ transitionDelay: `${index * 0.05}s` }"
                            />
                            <span class="text-gray-300">{{ feature }}</span>
                        </li>
                    </ul>
                    <button 
                        @click="handleStartFreeTrial"
                        class="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300"
                    >
                        Start Free Trial (Coming Soon)
                    </button>
                </div>

                <!-- Enterprise Plan -->
                <div
                    class="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 hover:scale-105 hover:-translate-y-2 transition-all duration-300 group animate-scale-in stagger-3"
                >
                    <div class="mb-6">
                        <h3 class="text-2xl font-bold mb-2">Enterprise</h3>
                        <div class="flex items-baseline gap-2 mb-4">
                            <span class="text-5xl font-bold">$99</span>
                            <span class="text-gray-400">/month</span>
                        </div>
                        <p class="text-gray-400">For large-scale operations</p>
                    </div>
                    <ul class="space-y-4 mb-8">
                        <li v-for="(feature, index) in enterpriseFeatures" :key="index" class="flex items-start gap-3">
                            <Check
                                class="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0 group-hover:scale-125 transition-transform"
                                :style="{ transitionDelay: `${index * 0.05}s` }"
                            />
                            <span class="text-gray-300">{{ feature }}</span>
                        </li>
                    </ul>
                    <button
                        @click="handleSendMail"
                        class="w-full py-3 bg-white/5 border border-white/10 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
                    >
                        Contact Sales
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { Check } from 'lucide-vue-next';
import { useToast } from 'vue-toastification';
const toast = useToast();

const handleGetStarted = () => {
    window.open(
        'https://docs.mythical.systems/docs/featherpanel/welcome-featherpanel#installing-featherpanel-canary',
        '_blank',
    );
};

const handleSendMail = () => {
    window.open('mailto:support@mythical.systems?subject=Enterprise%20Plan%20Enquiry', '_blank');
};

const handleStartFreeTrial = () => {
    toast.info("Coming soon!");
};

const freeFeatures = [
    'Self-hosted only',
    'Unlimited servers',
    'Wings compatibility',
    'Community support',
    'Native plugin support',
];

const proFeatures = [
    'Everything in Free',
    'Priority support',
    'Hosted panel (Cloud)',
    'Automatic updates',
    '99.9% uptime SLA',
    '24/7 monitoring',
];

const enterpriseFeatures = [
    'Everything in Professional',
    'Fully hosted panel',
    'Automatic updates',
    '99.9% uptime SLA',
    '24/7 monitoring',
];
</script>
