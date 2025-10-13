<template>
    <section class="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div class="max-w-7xl mx-auto">
            <div class="text-center mb-16">
                <h2 class="text-4xl md:text-5xl font-bold mb-4 animate-slide-in-up">
                    <span class="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                        Loved by Hosting Providers
                    </span>
                </h2>
                <p class="text-xl text-gray-400 animate-slide-in-up stagger-1">See what our users have to say</p>
            </div>

            <div class="grid md:grid-cols-3 gap-6">
                <div
                    v-for="(testimonial, index) in testimonials"
                    :key="index"
                    class="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 hover:scale-105 hover:-translate-y-2 transition-all duration-300 group animate-scale-in"
                    :class="`stagger-${index + 1}`"
                >
                    <div class="flex items-center gap-4 mb-4">
                        <div
                            class="w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold group-hover:scale-110 group-hover:rotate-6 transition-all duration-300"
                            :class="testimonial.avatarGradient"
                        >
                            {{ testimonial.initials }}
                        </div>
                        <div>
                            <div class="font-semibold">{{ testimonial.name }}</div>
                            <div class="text-sm text-gray-400">{{ testimonial.role }}</div>
                        </div>
                    </div>
                    <p class="text-gray-400 leading-relaxed mb-4">
                        {{ testimonial.quote }}
                    </p>
                    <div class="flex gap-1">
                        <Star
                            v-for="i in 5"
                            :key="i"
                            class="w-4 h-4 text-yellow-400 fill-yellow-400 group-hover:scale-125 transition-transform"
                            :style="{ transitionDelay: `${i * 0.05}s` }"
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { Star } from 'lucide-vue-next';

const testimonials = [
    {
        name: 'Galaxy OP',
        role: 'CEO, Blazars Cloud',
        initials: 'GO',
        avatarGradient: 'bg-gradient-to-br from-blue-500 via-cyan-400 to-emerald-500',
        quote: 'FeatherPanel redefined our hosting experience — it’s lightning fast, feather-light on resources, and astonishingly intuitive. You can tell it was built by people who understand hosting inside and out!',
    },
    {
        name: 'Blanco',
        role: 'Cloud Architect',
        initials: 'B',
        avatarGradient: 'bg-gradient-to-br from-indigo-500 via-purple-400 to-pink-500',
        quote: 'I’ve worked with all the panels out there, and nothing comes close to FeatherPanel\'s modern design and seamless performance. Deployment is effortless, and our clients love the user experience.',
    },
    {
        name: 'Adam',
        role: 'Founder, ONHost',
        initials: 'A',
        avatarGradient: 'bg-gradient-to-br from-teal-500 via-green-500 to-lime-400',
        quote: 'How am I only just finding this panel? It works perfectly and looks amazing. Finally, a dev who actually keeps things updated!',
    },
    {
        name: 'ChristiannX',
        role: 'Founder, MultyPlay & ScrifySystems',
        initials: 'CX',
        avatarGradient: 'bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500',
        quote: 'We switched to FeatherPanel after months of frustration with other solutions. The migration was simple, support was stellar, and our server operations have never been smoother.',
    },
    {
        name: 'Alexutzerion5',
        role: 'Founder, RexSystems & Lethal Romania',
        initials: 'A5',
        avatarGradient: 'bg-gradient-to-br from-pink-500 via-fuchsia-500 to-purple-600',
        quote: 'FeatherPanel brought robust features, modern security, and true reliability to our network. It’s the upgrade I wish we’d made years ago!',
    },
    {
        name: 'Th3Hunter',
        role: 'Founder, KingsDomain',
        initials: 'TH',
        avatarGradient: 'bg-gradient-to-br from-emerald-400 via-cyan-500 to-blue-600',
        quote: 'I was impressed with how light and responsive FeatherPanel is. Managing even large fleets of servers is a breeze it’s seriously next-gen.',
    }

];
</script>
