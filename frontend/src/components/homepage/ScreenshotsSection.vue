<template>
    <section id="screenshots" class="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div class="max-w-7xl mx-auto">
            <div class="text-center mb-16">
                <h2 class="text-4xl md:text-5xl font-bold mb-4 animate-slide-in-up">
                    <span class="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                        Beautiful Interface, Powerful Features
                    </span>
                </h2>
                <p class="text-xl text-gray-400 animate-slide-in-up stagger-1">
                    Experience the modern UI that makes server management a breeze
                </p>
            </div>

            <!-- Main Dashboard Screenshot -->
            <div
                class="relative rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm overflow-hidden hover:border-white/20 transition-all duration-500 group mb-8 animate-scale-in cursor-zoom-in"
                @click="openFullscreen('/demo/dashboard.png?height=600&width=1200', 'Dashboard Overview')"
            >
                <div
                    class="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"
                ></div>
                <div class="relative">
                    <div class="flex items-center gap-2 mb-4 px-4 pt-4">
                        <div class="flex gap-2">
                            <div class="w-3 h-3 rounded-full bg-red-500 animate-pulse-glow"></div>
                            <div
                                class="w-3 h-3 rounded-full bg-yellow-500 animate-pulse-glow"
                                style="animation-delay: 0.2s"
                            ></div>
                            <div
                                class="w-3 h-3 rounded-full bg-green-500 animate-pulse-glow"
                                style="animation-delay: 0.4s"
                            ></div>
                        </div>
                        <div class="flex-1 text-center text-sm text-gray-500">Dashboard Overview</div>
                    </div>
                    <img
                        src="/demo/dashboard.png?height=600&width=1200"
                        alt="FeatherPanel Dashboard"
                        class="w-full rounded-2xl border border-white/10 transform group-hover:scale-[1.02] transition-transform duration-500"
                    />
                    <!-- Zoom indicator -->
                    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                        <div class="bg-black/80 backdrop-blur-sm rounded-full p-4">
                            <Maximize2 class="w-8 h-8 text-white" />
                        </div>
                    </div>
                </div>
            </div>

            <!-- Feature Screenshots Grid -->
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div
                    v-for="(screenshot, index) in screenshots"
                    :key="index"
                    class="relative p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 hover:scale-105 hover:-translate-y-2 transition-all duration-500 cursor-pointer group animate-slide-in-up"
                    :class="`stagger-${index + 1}`"
                    @click="openFullscreen(screenshot.image, screenshot.title)"
                >
                    <div
                        class="absolute -inset-0.5 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                        :class="screenshot.gradient"
                    ></div>
                    <div class="relative">
                        <div class="relative">
                            <img
                                :src="screenshot.image"
                                :alt="screenshot.title"
                                class="w-full rounded-xl border border-white/10 mb-4 transform group-hover:scale-105 transition-transform duration-300"
                            />
                            <!-- Zoom indicator -->
                            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                                <div class="bg-black/80 backdrop-blur-sm rounded-full p-3">
                                    <Maximize2 class="w-6 h-6 text-white" />
                                </div>
                            </div>
                        </div>
                        <h3 class="text-lg font-semibold mb-2 flex items-center gap-2">
                            <component
                                :is="screenshot.icon"
                                :class="`w-5 h-5 ${screenshot.iconColor} group-hover:scale-125 group-hover:rotate-12 transition-all duration-300`"
                            />
                            {{ screenshot.title }}
                        </h3>
                        <p class="text-sm text-gray-400">
                            {{ screenshot.description }}
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Fullscreen Modal -->
        <Teleport to="body">
            <Transition name="modal">
                <div
                    v-if="isFullscreen"
                    class="fixed inset-0 z-[200] bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
                    @click="closeFullscreen"
                >
                    <!-- Close button -->
                    <button
                        class="absolute top-4 right-4 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 group z-10"
                        @click.stop="closeFullscreen"
                    >
                        <X class="w-6 h-6 text-white group-hover:rotate-90 transition-transform duration-300" />
                    </button>

                    <!-- Navigation buttons -->
                    <button
                        v-if="currentIndex > 0"
                        class="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 group z-10"
                        @click.stop="previousImage"
                    >
                        <ChevronLeft class="w-6 h-6 text-white group-hover:-translate-x-1 transition-transform duration-300" />
                    </button>

                    <button
                        v-if="currentIndex < allImages.length - 1"
                        class="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 group z-10"
                        @click.stop="nextImage"
                    >
                        <ChevronRight class="w-6 h-6 text-white group-hover:translate-x-1 transition-transform duration-300" />
                    </button>

                    <!-- Image container -->
                    <div class="max-w-7xl w-full max-h-full flex flex-col items-center justify-center" @click.stop>
                        <!-- Image title -->
                        <div class="mb-4 text-center">
                            <h3 class="text-2xl font-bold text-white mb-2">{{ currentTitle }}</h3>
                            <p class="text-gray-400">{{ currentIndex + 1 }} / {{ allImages.length }}</p>
                        </div>

                        <!-- Image with animation -->
                        <div class="relative max-w-full max-h-[80vh] rounded-2xl overflow-hidden shadow-2xl animate-scale-in">
                            <img
                                :src="currentImage"
                                :alt="currentTitle"
                                class="max-w-full max-h-[80vh] object-contain rounded-2xl border border-white/20"
                            />
                        </div>

                        <!-- Keyboard hint -->
                        <div class="mt-4 flex gap-4 text-sm text-gray-400">
                            <span class="flex items-center gap-2">
                                <kbd class="px-2 py-1 bg-white/10 rounded">←</kbd>
                                <kbd class="px-2 py-1 bg-white/10 rounded">→</kbd>
                                Navigate
                            </span>
                            <span class="flex items-center gap-2">
                                <kbd class="px-2 py-1 bg-white/10 rounded">Esc</kbd>
                                Close
                            </span>
                        </div>
                    </div>
                </div>
            </Transition>
        </Teleport>
    </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { Terminal, FolderOpen, Activity, Puzzle, Users, Palette, Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-vue-next';

const isFullscreen = ref(false);
const currentImage = ref('');
const currentTitle = ref('');
const currentIndex = ref(0);

const screenshots = [
    {
        title: 'Real-time Console',
        description: 'Beautiful terminal with syntax highlighting and command history',
        image: '/demo/server_console.png?height=400&width=600',
        icon: Terminal,
        iconColor: 'text-blue-400',
        gradient: 'bg-gradient-to-r from-blue-600 to-cyan-600',
    },
    {
        title: 'File Manager',
        description: 'Intuitive file browser with drag-and-drop support',
        image: '/demo/file_manager.png?height=400&width=600',
        icon: FolderOpen,
        iconColor: 'text-purple-400',
        gradient: 'bg-gradient-to-r from-purple-600 to-pink-600',
    },
    {
        title: 'Admin Dashboard',
        description: 'Beautiful admin dashboard with custom widgets',
        image: '/demo/admin_dashboard.png?height=400&width=600',
        icon: Activity,
        iconColor: 'text-green-400',
        gradient: 'bg-gradient-to-r from-green-600 to-emerald-600',
    },
    {
        title: 'Plugin Marketplace',
        description: 'Browse and install plugins with one click',
        image: '/demo/plugins.png?height=400&width=600',
        icon: Puzzle,
        iconColor: 'text-orange-400',
        gradient: 'bg-gradient-to-r from-orange-600 to-red-600',
    },
    {
        title: 'User Management',
        description: 'Granular permissions and role-based access control',
        image: '/demo/admin_users.png?height=400&width=600',
        icon: Users,
        iconColor: 'text-cyan-400',
        gradient: 'bg-gradient-to-r from-cyan-600 to-blue-600',
    },
    {
        title: 'Theme Customization',
        description: 'Fully customizable themes and branding options',
        image: '/demo/theme.png?height=400&width=600',
        icon: Palette,
        iconColor: 'text-pink-400',
        gradient: 'bg-gradient-to-r from-pink-600 to-purple-600',
    },
];

// All images including dashboard
const allImages = computed(() => [
    { image: '/demo/dashboard.png?height=600&width=1200', title: 'Dashboard Overview' },
    ...screenshots
]);

const openFullscreen = (image, title) => {
    currentImage.value = image;
    currentTitle.value = title;
    currentIndex.value = allImages.value.findIndex(img => img.image === image);
    isFullscreen.value = true;
    document.body.style.overflow = 'hidden';
};

const closeFullscreen = () => {
    isFullscreen.value = false;
    document.body.style.overflow = '';
};

const nextImage = () => {
    if (currentIndex.value < allImages.value.length - 1) {
        currentIndex.value++;
        const next = allImages.value[currentIndex.value];
        currentImage.value = next.image;
        currentTitle.value = next.title;
    }
};

const previousImage = () => {
    if (currentIndex.value > 0) {
        currentIndex.value--;
        const prev = allImages.value[currentIndex.value];
        currentImage.value = prev.image;
        currentTitle.value = prev.title;
    }
};

// Keyboard navigation
const handleKeydown = (e) => {
    if (!isFullscreen.value) return;
    
    if (e.key === 'Escape') {
        closeFullscreen();
    } else if (e.key === 'ArrowRight') {
        nextImage();
    } else if (e.key === 'ArrowLeft') {
        previousImage();
    }
};

onMounted(() => {
    window.addEventListener('keydown', handleKeydown);
});

onUnmounted(() => {
    window.removeEventListener('keydown', handleKeydown);
    document.body.style.overflow = '';
});
</script>

<style scoped>
.cursor-zoom-in {
    cursor: zoom-in;
}

/* Modal transitions */
.modal-enter-active,
.modal-leave-active {
    transition: all 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
    opacity: 0;
}

.modal-enter-from .max-w-7xl {
    transform: scale(0.9);
}

.modal-leave-to .max-w-7xl {
    transform: scale(0.9);
}

kbd {
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
    font-size: 0.875rem;
}
</style>
