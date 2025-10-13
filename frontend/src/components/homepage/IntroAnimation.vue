<template>
    <Transition name="intro" @before-leave="handleBeforeLeave" @leave="handleLeave">
        <div
            v-if="showIntro"
            class="fixed inset-0 z-[100] bg-black flex items-center justify-center overflow-hidden"
            :class="{ 'fade-out-active': isFadingOut }"
        >
            <!-- Animated gradient background -->
            <div
                class="absolute inset-0 bg-gradient-to-br from-blue-950/40 via-black to-purple-950/40 animate-gradient"
            ></div>

            <!-- Animated geometric shapes -->
            <div class="absolute inset-0 overflow-hidden">
                <div class="geometric-shape shape-1"></div>
                <div class="geometric-shape shape-2"></div>
                <div class="geometric-shape shape-3"></div>
                <div class="geometric-shape shape-4"></div>
            </div>

            <!-- Flying particles with trails -->
            <div class="absolute inset-0 overflow-hidden">
                <div
                    v-for="i in 50"
                    :key="i"
                    class="particle"
                    :class="`particle-${(i % 3) + 1}`"
                    :style="{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 2}s`,
                        animationDuration: `${2 + Math.random() * 3}s`,
                    }"
                ></div>
            </div>

            <!-- Sparkles bursting -->
            <div class="absolute inset-0 overflow-hidden pointer-events-none">
                <div
                    v-for="i in 20"
                    :key="`sparkle-${i}`"
                    class="sparkle"
                    :style="{
                        left: `${50 + (Math.random() - 0.5) * 60}%`,
                        top: `${50 + (Math.random() - 0.5) * 60}%`,
                        animationDelay: `${1 + Math.random() * 1.5}s`,
                        '--angle': `${Math.random() * 360}deg`,
                    }"
                ></div>
            </div>

            <!-- Main logo animation -->
            <div class="relative z-10 text-center" :class="{ 'content-exit': isFadingOut }">
                <!-- Logo with pulse effect -->
                <div class="mb-8 flex justify-center">
                    <div
                        class="relative w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl flex items-center justify-center logo-entrance shadow-2xl"
                        :class="{ 'logo-spin': spinLogo, 'logo-blast': isFadingOut }"
                    >
                        <img
                            src="https://cdn.mythical.systems/featherpanel/logo.png"
                            alt="FeatherPanel Logo"
                            class="w-16 h-16 feather-float"
                            draggable="false"
                        />

                        <!-- Glow rings -->
                        <div class="absolute inset-0 rounded-3xl ring-glow ring-1"></div>
                        <div class="absolute inset-0 rounded-3xl ring-glow ring-2"></div>
                        <div class="absolute inset-0 rounded-3xl ring-glow ring-3"></div>

                        <!-- Energy burst on exit -->
                        <div v-if="isFadingOut" class="energy-burst"></div>
                    </div>
                </div>

                <!-- Text reveal with bouncy animation -->
                <h1 class="text-6xl md:text-8xl font-bold mb-4 text-reveal">
                    <span class="inline-block text-char" style="animation-delay: 0.1s">F</span>
                    <span class="inline-block text-char" style="animation-delay: 0.15s">e</span>
                    <span class="inline-block text-char" style="animation-delay: 0.2s">a</span>
                    <span class="inline-block text-char" style="animation-delay: 0.25s">t</span>
                    <span class="inline-block text-char" style="animation-delay: 0.3s">h</span>
                    <span class="inline-block text-char" style="animation-delay: 0.35s">e</span>
                    <span class="inline-block text-char" style="animation-delay: 0.4s">r</span>
                    <span class="inline-block text-char gradient-text" style="animation-delay: 0.45s">P</span>
                    <span class="inline-block text-char gradient-text" style="animation-delay: 0.5s">a</span>
                    <span class="inline-block text-char gradient-text" style="animation-delay: 0.55s">n</span>
                    <span class="inline-block text-char gradient-text" style="animation-delay: 0.6s">e</span>
                    <span class="inline-block text-char gradient-text" style="animation-delay: 0.65s">l</span>
                </h1>

                <!-- Tagline with fade in -->
                <p class="text-xl md:text-2xl text-gray-400 tagline-reveal">Light as a Feather, Powerful as a Storm</p>

                <!-- Progress bar with glow -->
                <div class="mt-8 w-64 mx-auto relative">
                    <div class="h-1 bg-white/10 rounded-full overflow-hidden shadow-lg">
                        <div
                            class="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 progress-bar shadow-[0_0_20px_rgba(168,85,247,0.5)]"
                        ></div>
                    </div>
                    <div class="loading-dots flex justify-center gap-2 mt-4">
                        <div class="dot"></div>
                        <div class="dot"></div>
                        <div class="dot"></div>
                    </div>
                </div>
            </div>
        </div>
    </Transition>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const showIntro = ref(true);
const spinLogo = ref(false);
const isFadingOut = ref(false);

const handleBeforeLeave = () => {
    isFadingOut.value = true;
};

const handleLeave = (el, done) => {
    setTimeout(done, 800);
};

onMounted(() => {
    // Add spin effect after initial entrance
    setTimeout(() => {
        spinLogo.value = true;
    }, 800);

    // Start fade out animation
    setTimeout(() => {
        isFadingOut.value = true;
    }, 2800);

    // Hide intro after animation completes
    setTimeout(() => {
        showIntro.value = false;
    }, 3500);
});
</script>

<style scoped>
/* Intro transition */
.intro-enter-active {
    transition: opacity 0.3s ease;
}

.intro-leave-active {
    transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.intro-leave-to {
    opacity: 0;
    transform: scale(1.2);
}

/* Fade out state */
.fade-out-active {
    animation: screen-fade-out 0.8s ease-out forwards;
}

@keyframes screen-fade-out {
    0% {
        opacity: 1;
        filter: blur(0px) brightness(1);
    }
    50% {
        opacity: 0.8;
        filter: blur(2px) brightness(1.5);
    }
    100% {
        opacity: 0;
        filter: blur(10px) brightness(2);
    }
}

/* Content exit animation */
.content-exit {
    animation: content-blast-away 0.8s ease-out forwards;
}

@keyframes content-blast-away {
    0% {
        transform: scale(1) translateY(0);
        opacity: 1;
    }
    60% {
        transform: scale(1.2) translateY(-30px);
        opacity: 0.5;
    }
    100% {
        transform: scale(1.5) translateY(-100px);
        opacity: 0;
    }
}

/* Geometric shapes */
.geometric-shape {
    position: absolute;
    border: 2px solid rgba(96, 165, 250, 0.2);
    border-radius: 20% 80% 80% 20%;
    animation: shape-morph 8s ease-in-out infinite;
}

.shape-1 {
    width: 300px;
    height: 300px;
    top: 10%;
    left: 10%;
    border-color: rgba(96, 165, 250, 0.3);
    animation-delay: 0s;
}

.shape-2 {
    width: 400px;
    height: 400px;
    bottom: 10%;
    right: 10%;
    border-color: rgba(168, 85, 247, 0.3);
    animation-delay: 2s;
}

.shape-3 {
    width: 250px;
    height: 250px;
    top: 50%;
    right: 20%;
    border-color: rgba(236, 72, 153, 0.2);
    animation-delay: 4s;
}

.shape-4 {
    width: 350px;
    height: 350px;
    bottom: 30%;
    left: 20%;
    border-color: rgba(59, 130, 246, 0.2);
    animation-delay: 6s;
}

@keyframes shape-morph {
    0%,
    100% {
        border-radius: 20% 80% 80% 20%;
        transform: rotate(0deg) scale(1);
    }
    25% {
        border-radius: 80% 20% 20% 80%;
        transform: rotate(90deg) scale(1.1);
    }
    50% {
        border-radius: 40% 60% 70% 30%;
        transform: rotate(180deg) scale(0.9);
    }
    75% {
        border-radius: 60% 40% 30% 70%;
        transform: rotate(270deg) scale(1.05);
    }
}

/* Particle animation - multiple types */
.particle {
    position: absolute;
    border-radius: 50%;
    opacity: 0;
    pointer-events: none;
}

.particle-1 {
    width: 4px;
    height: 4px;
    background: linear-gradient(135deg, #60a5fa, #a78bfa);
    animation: particle-float-1 3s ease-in-out infinite;
    box-shadow: 0 0 10px rgba(96, 165, 250, 0.5);
}

.particle-2 {
    width: 6px;
    height: 6px;
    background: linear-gradient(135deg, #ec4899, #f472b6);
    animation: particle-float-2 4s ease-in-out infinite;
    box-shadow: 0 0 15px rgba(236, 72, 153, 0.5);
}

.particle-3 {
    width: 3px;
    height: 3px;
    background: linear-gradient(135deg, #a78bfa, #ec4899);
    animation: particle-float-3 2.5s ease-in-out infinite;
    box-shadow: 0 0 8px rgba(167, 139, 250, 0.5);
}

@keyframes particle-float-1 {
    0%,
    100% {
        opacity: 0;
        transform: translateY(0) translateX(0) scale(1);
    }
    50% {
        opacity: 1;
        transform: translateY(-120px) translateX(30px) scale(1.5);
    }
}

@keyframes particle-float-2 {
    0%,
    100% {
        opacity: 0;
        transform: translateY(0) translateX(0) scale(1) rotate(0deg);
    }
    50% {
        opacity: 0.9;
        transform: translateY(-100px) translateX(-40px) scale(2) rotate(180deg);
    }
}

@keyframes particle-float-3 {
    0%,
    100% {
        opacity: 0;
        transform: translateY(0) translateX(0) scale(1);
    }
    50% {
        opacity: 0.7;
        transform: translateY(-80px) translateX(20px) scale(1.8);
    }
}

/* Sparkles */
.sparkle {
    position: absolute;
    width: 8px;
    height: 8px;
    background: white;
    clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
    animation: sparkle-burst 1.5s ease-out forwards;
    opacity: 0;
}

@keyframes sparkle-burst {
    0% {
        opacity: 0;
        transform: translate(0, 0) scale(0) rotate(0deg);
    }
    30% {
        opacity: 1;
    }
    100% {
        opacity: 0;
        transform: translate(calc(cos(var(--angle)) * 150px), calc(sin(var(--angle)) * 150px)) scale(1.5) rotate(360deg);
    }
}

/* Logo entrance animation */
.logo-entrance {
    animation: logo-entrance 1s cubic-bezier(0.34, 1.56, 0.64, 1);
}

@keyframes logo-entrance {
    0% {
        transform: scale(0) rotate(-360deg);
        opacity: 0;
        filter: blur(10px);
    }
    60% {
        transform: scale(1.2) rotate(20deg);
        filter: blur(0px);
    }
    100% {
        transform: scale(1) rotate(0deg);
        opacity: 1;
        filter: blur(0px);
    }
}

/* Logo spin with bounce */
.logo-spin {
    animation:
        logo-entrance 1s cubic-bezier(0.34, 1.56, 0.64, 1),
        logo-subtle-spin 3s ease-in-out infinite 1s,
        logo-bounce 2s ease-in-out infinite 1.5s;
}

@keyframes logo-subtle-spin {
    0%,
    100% {
        transform: scale(1) rotate(0deg);
    }
    50% {
        transform: scale(1.1) rotate(8deg);
    }
}

@keyframes logo-bounce {
    0%,
    100% {
        transform: translateY(0) scale(1);
    }
    50% {
        transform: translateY(-15px) scale(1.05);
    }
}

/* Logo blast effect on exit */
.logo-blast {
    animation: logo-blast-away 0.8s ease-out forwards !important;
}

@keyframes logo-blast-away {
    0% {
        transform: scale(1) rotate(0deg);
        opacity: 1;
        filter: brightness(1);
    }
    50% {
        transform: scale(1.5) rotate(180deg);
        opacity: 0.7;
        filter: brightness(2);
    }
    100% {
        transform: scale(2) rotate(360deg);
        opacity: 0;
        filter: brightness(3) blur(20px);
    }
}

/* Energy burst effect */
.energy-burst {
    position: absolute;
    inset: -50%;
    background: radial-gradient(circle, rgba(96, 165, 250, 0.4) 0%, transparent 70%);
    animation: energy-pulse 0.8s ease-out forwards;
    border-radius: 50%;
}

@keyframes energy-pulse {
    0% {
        transform: scale(0);
        opacity: 1;
    }
    100% {
        transform: scale(3);
        opacity: 0;
    }
}

/* Feather floating with sway */
.feather-float {
    animation: feather-float 3s ease-in-out infinite;
    filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.3));
}

@keyframes feather-float {
    0%,
    100% {
        transform: translateY(0) rotate(0deg) scale(1);
    }
    25% {
        transform: translateY(-8px) rotate(-5deg) scale(1.05);
    }
    50% {
        transform: translateY(-15px) rotate(0deg) scale(1.1);
    }
    75% {
        transform: translateY(-8px) rotate(5deg) scale(1.05);
    }
}

/* Glow rings */
.ring-glow {
    border: 2px solid rgba(96, 165, 250, 0.5);
    animation: ring-expand 2s ease-out infinite;
}

.ring-2 {
    animation-delay: 0.3s;
}

.ring-3 {
    animation-delay: 0.6s;
}

@keyframes ring-expand {
    0% {
        transform: scale(1);
        opacity: 0.8;
    }
    100% {
        transform: scale(1.8);
        opacity: 0;
    }
}

/* Text character reveal */
.text-char {
    animation: text-pop-in 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) both;
    opacity: 0;
}

@keyframes text-pop-in {
    0% {
        transform: scale(0) translateY(30px) rotate(-10deg);
        opacity: 0;
    }
    100% {
        transform: scale(1) translateY(0) rotate(0deg);
        opacity: 1;
    }
}

.gradient-text {
    background: linear-gradient(135deg, #60a5fa, #a78bfa, #ec4899);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: 200% 200%;
    animation:
        text-pop-in 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) both,
        gradient-shift 3s ease infinite;
}

@keyframes gradient-shift {
    0%,
    100% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
}

/* Tagline reveal */
.tagline-reveal {
    animation: fade-slide-up 1s ease-out 0.8s both;
}

@keyframes fade-slide-up {
    0% {
        opacity: 0;
        transform: translateY(20px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Progress bar with shimmer */
.progress-bar {
    animation: progress-fill 2.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
    position: relative;
    overflow: hidden;
}

.progress-bar::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
    animation: shimmer 1.5s infinite 0.5s;
}

@keyframes progress-fill {
    0% {
        width: 0%;
    }
    100% {
        width: 100%;
    }
}

@keyframes shimmer {
    0% {
        transform: translateX(-100%);
    }
    100% {
        transform: translateX(100%);
    }
}

/* Loading dots */
.loading-dots {
    animation: dots-appear 0.5s ease-out 2s both;
}

.dot {
    width: 8px;
    height: 8px;
    background: linear-gradient(135deg, #60a5fa, #a78bfa);
    border-radius: 50%;
    animation: dot-bounce 1.4s ease-in-out infinite;
    box-shadow: 0 0 10px rgba(96, 165, 250, 0.5);
}

.dot:nth-child(2) {
    animation-delay: 0.2s;
}

.dot:nth-child(3) {
    animation-delay: 0.4s;
}

@keyframes dots-appear {
    from {
        opacity: 0;
        transform: translateY(10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes dot-bounce {
    0%,
    60%,
    100% {
        transform: translateY(0) scale(1);
    }
    30% {
        transform: translateY(-15px) scale(1.2);
    }
}
</style>
