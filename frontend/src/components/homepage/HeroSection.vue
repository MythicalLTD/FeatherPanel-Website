<template>
    <section class="relative z-10 pt-20 pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <!-- Enhanced animated background elements -->
        <div class="absolute inset-0 pointer-events-none overflow-hidden">
            <!-- Floating orbs with glow -->
            <div class="floating-orb orb-1"></div>
            <div class="floating-orb orb-2"></div>
            <div class="floating-orb orb-3"></div>
            <div class="floating-orb orb-4"></div>

            <!-- Animated light beams -->
            <div class="light-beam beam-1"></div>
            <div class="light-beam beam-2"></div>
            <div class="light-beam beam-3"></div>

            <!-- Particle trail -->
            <div
                v-for="i in 30"
                :key="i"
                class="hero-particle"
                :style="{
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 5}s`,
                    animationDuration: `${5 + Math.random() * 10}s`,
                }"
            ></div>
        </div>

        <div class="max-w-7xl mx-auto text-center relative z-10">
            <div
                class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 cursor-pointer group animate-slide-in-down"
            >
                <Sparkles
                    class="w-4 h-4 text-blue-400 group-hover:rotate-12 group-hover:scale-125 transition-transform duration-300 animate-pulse-glow"
                />
                <span class="text-sm text-gray-300">Light as a Feather, Powerful as a Storm</span>
            </div>

            <h1 class="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-slide-in-up">
                <span
                    class="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent animate-gradient-x"
                >
                    The Future of Game
                </span>
                <br />
                <span
                    class="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x"
                >
                    Server Management
                </span>
            </h1>

            <p class="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed animate-slide-in-up stagger-1">
                A revolutionary Pterodactyl alternative that's
                <span class="text-blue-400 font-semibold">204x lighter</span> and
                <span class="text-purple-400 font-semibold">22x faster</span>. Seamlessly compatible with plugins and
                themes.
            </p>

            <div
                class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-slide-in-up stagger-2"
            >
                <button
                    class="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-lg font-semibold overflow-hidden transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/50"
                    @click="handleGetStarted"
                >
                    <span class="relative z-10 flex items-center gap-2">
                        Get Started Now
                        <ArrowRight class="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                    <div
                        class="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    ></div>
                </button>
                <button
                    target="_blank"
                    class="group px-8 py-4 bg-white/5 border border-white/10 rounded-xl text-lg font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm flex items-center gap-2 hover:-translate-y-1"
                    @click="handleWatchDemo"
                >
                    <Play class="w-5 h-5 group-hover:scale-125 transition-transform duration-300" />
                    Watch Demo
                </button>
            </div>
        </div>
    </section>
</template>

<script setup>
import { Sparkles, ArrowRight, Play } from 'lucide-vue-next';

const handleGetStarted = () => {
    const el = document.getElementById('pricing');
    if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
    }
};
const handleWatchDemo = () => {
    const el = document.getElementById('screenshots');
    if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
    }
};
</script>

<style scoped>
/* Floating orbs with colorful glow */
.floating-orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(60px);
    opacity: 0.6;
    animation: float-orb 15s ease-in-out infinite;
}

.orb-1 {
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 70%);
    top: -10%;
    left: 10%;
    animation-duration: 18s;
}

.orb-2 {
    width: 350px;
    height: 350px;
    background: radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, transparent 70%);
    top: 20%;
    right: 15%;
    animation-duration: 22s;
    animation-delay: 2s;
}

.orb-3 {
    width: 300px;
    height: 300px;
    background: radial-gradient(circle, rgba(236, 72, 153, 0.3) 0%, transparent 70%);
    bottom: 10%;
    left: 20%;
    animation-duration: 20s;
    animation-delay: 4s;
}

.orb-4 {
    width: 450px;
    height: 450px;
    background: radial-gradient(circle, rgba(6, 182, 212, 0.3) 0%, transparent 70%);
    top: 40%;
    right: 10%;
    animation-duration: 25s;
    animation-delay: 1s;
}

@keyframes float-orb {
    0%,
    100% {
        transform: translate(0, 0) scale(1);
    }
    25% {
        transform: translate(50px, -50px) scale(1.1);
    }
    50% {
        transform: translate(-30px, 40px) scale(0.9);
    }
    75% {
        transform: translate(40px, 30px) scale(1.05);
    }
}

/* Light beams */
.light-beam {
    position: absolute;
    width: 2px;
    height: 200%;
    background: linear-gradient(
        to bottom,
        transparent 0%,
        rgba(96, 165, 250, 0.3) 20%,
        rgba(168, 85, 247, 0.3) 50%,
        rgba(236, 72, 153, 0.3) 80%,
        transparent 100%
    );
    animation: beam-scan 8s ease-in-out infinite;
    transform-origin: top;
}

.beam-1 {
    left: 20%;
    animation-delay: 0s;
}

.beam-2 {
    left: 50%;
    animation-delay: 2.7s;
}

.beam-3 {
    left: 80%;
    animation-delay: 5.3s;
}

@keyframes beam-scan {
    0%,
    100% {
        opacity: 0;
        transform: translateY(-100%) scaleY(0);
    }
    10%,
    90% {
        opacity: 0.6;
    }
    50% {
        opacity: 1;
        transform: translateY(0%) scaleY(1);
    }
}

/* Hero particles */
.hero-particle {
    position: absolute;
    width: 3px;
    height: 3px;
    background: radial-gradient(circle, rgba(96, 165, 250, 0.8) 0%, transparent 70%);
    border-radius: 50%;
    animation: hero-particle-rise linear infinite;
    bottom: -50px;
    box-shadow: 0 0 10px rgba(96, 165, 250, 0.5);
}

@keyframes hero-particle-rise {
    0% {
        bottom: -50px;
        opacity: 0;
        transform: translateX(0) scale(0);
    }
    10% {
        opacity: 1;
    }
    90% {
        opacity: 1;
    }
    100% {
        bottom: 120%;
        opacity: 0;
        transform: translateX(calc(var(--random-x, 0) * 100px)) scale(1.5);
    }
}

/* Add subtle pulsing to section */
section {
    animation: section-breathe 10s ease-in-out infinite;
}

@keyframes section-breathe {
    0%,
    100% {
        background-color: transparent;
    }
    50% {
        background-color: rgba(59, 130, 246, 0.02);
    }
}
</style>
