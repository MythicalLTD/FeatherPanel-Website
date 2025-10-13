<template>
    <section class="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto">
            <div class="text-center mb-16">
                <h2 class="text-4xl md:text-5xl font-bold mb-4 animate-slide-in-up">
                    <span class="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                        Frequently Asked Questions
                    </span>
                </h2>
                <p class="text-xl text-gray-400 animate-slide-in-up stagger-1">Everything you need to know</p>
            </div>

            <div class="space-y-4">
                <div
                    v-for="(faq, index) in faqs"
                    :key="index"
                    class="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300 group animate-slide-in-up"
                    :class="`stagger-${index + 1}`"
                >
                    <h3 class="text-lg font-semibold mb-2 flex items-center gap-2">
                        <HelpCircle
                            :class="`w-5 h-5 ${faq.iconColor} group-hover:rotate-12 group-hover:scale-125 transition-all duration-300`"
                        />
                        {{ faq.question }}
                    </h3>
                    <p class="text-gray-400 leading-relaxed">
                        {{ faq.answer }}
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { HelpCircle } from 'lucide-vue-next';

const faqs = [
    {
        question: 'Is FeatherPanel compatible with old pterodactyl eggs??',
        answer: 'Yes! FeatherPanel is 100% compatible with old Pterodactyl eggs. You can migrate seamlessly without changing your egg files.',
        iconColor: 'text-blue-400',
    },
    {
        question: 'How difficult is it to migrate from Pterodactyl?',
        answer: 'Currently, we do not have a migration tool. However, we are working on one. If you want to help us, please contact us.',
        iconColor: 'text-purple-400',
    },
    {
        question: 'Can I self-host FeatherPanel for free?',
        answer: 'FeatherPanel is open source and free to self-host with unlimited servers. Paid plans are only for hosted panel (Cloud) by Mythical.',
        iconColor: 'text-green-400',
    },
    {
        question: 'What makes FeatherPanel so much faster?',
        answer: 'FeatherPanel is built with modern technologies and build from scratch unlike other panels, optimized database queries, efficient caching, and a lightweight architecture. This results in 22x faster response times compared to other panels.',
        iconColor: 'text-orange-400',
    },
    {
        question: 'Do you offer support for enterprise customers?',
        answer: 'Yes! Enterprise customers receive 24/7 priority support, dedicated account management, custom feature development, and SLA guarantees. Contact our sales team for more information.',
        iconColor: 'text-cyan-400',
    },
    {
        question: 'What about other Pterodactyl billing areas or old API integrations?',
        answer: "Don't worry! We have developed a dedicated plugin to support Pterodactyl's panel old API inside FeatherPanel. This means you can use existing integrations like WHMCS, Paymenter, and other popular addons seamlessly. Just head over to the Plugins section in FeatherPanel, choose our Online Repository, and click Install on the compatibility plugin. You'll be up and running in no time!",
        iconColor: 'text-pink-400',
    },
    {
        question: "Do you offer premade eggs or spells so I don't have to search?",
        answer: 'No worries! You can find spells (eggs) directly inside the panel via the Spells Online Repository page. Simply browse and download any egg (spell) you want to use, all from within FeatherPanel—no manual searching required.',
        iconColor: 'text-yellow-400',
    },
    {
        question: 'How do plugins work?',
        answer: 'FeatherPanel features a native plugin system that allows you to extend functionality without modifying core code. Plugins can add new features, customize the interface, and integrate with external services.',
        iconColor: 'text-indigo-400',
    },
    {
        question: 'What makes FeatherPanel different from Pterodactyl?',
        answer: "FeatherPanel focuses on game server hosting with extensive customization options, native plugin support, a modern UI, and significantly better performance. Unlike Pterodactyl, it's built from the ground up for gaming communities and supports plugin-driven extensibility, easier management, and a much faster, more intuitive user experience.",
        iconColor: 'text-fuchsia-400',
    },
];
</script>
