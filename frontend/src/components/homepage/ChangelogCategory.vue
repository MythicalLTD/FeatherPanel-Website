<template>
    <div
        class="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300 group animate-slide-in-up"
    >
        <div class="flex items-center gap-3 mb-4">
            <div
                class="w-10 h-10 rounded-lg flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300"
                :class="`bg-gradient-to-br ${bgGradient}`"
            >
                <component :is="icon" :class="`w-5 h-5 ${iconColor}`" />
            </div>
            <h3 class="text-xl font-semibold" :class="iconColor">
                {{ title }}
            </h3>
            <span class="ml-auto text-sm text-gray-400 font-semibold">
                {{ items.length }} {{ items.length === 1 ? 'item' : 'items' }}
            </span>
        </div>

        <div class="space-y-3 max-h-96 overflow-y-auto pr-2 custom-scrollbar">
            <div
                v-for="(item, index) in displayedItems"
                :key="index"
                class="flex gap-3 text-sm text-gray-300 leading-relaxed group/item"
            >
                <div class="flex-shrink-0 mt-1">
                    <div
                        class="w-1.5 h-1.5 rounded-full group-hover/item:scale-150 transition-all duration-300"
                        :class="getDotColor()"
                    ></div>
                </div>
                <p class="group-hover/item:text-white transition-colors duration-300" v-html="formatItem(item)"></p>
            </div>
        </div>

        <!-- Show More/Less Button -->
        <div v-if="items.length > initialDisplayCount" class="mt-4">
            <button
                @click="toggleShowAll"
                class="w-full py-2 px-4 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300 text-sm font-semibold"
                :class="iconColor"
            >
                {{ showAll ? 'Show Less' : `Show All (${items.length - initialDisplayCount} more)` }}
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
    title: {
        type: String,
        required: true,
    },
    items: {
        type: Array,
        required: true,
    },
    icon: {
        type: Object,
        required: true,
    },
    iconColor: {
        type: String,
        default: 'text-blue-400',
    },
    bgGradient: {
        type: String,
        default: 'from-blue-500/20 to-cyan-500/20',
    },
    initialDisplayCount: {
        type: Number,
        default: 5,
    },
});

const showAll = ref(false);

const displayedItems = computed(() => {
    if (showAll.value || props.items.length <= props.initialDisplayCount) {
        return props.items;
    }
    return props.items.slice(0, props.initialDisplayCount);
});

const toggleShowAll = () => {
    showAll.value = !showAll.value;
};

const getDotColor = () => {
    return props.iconColor.replace('text-', 'bg-');
};

const formatItem = (item) => {
    // Highlight critical/important keywords
    let formatted = item
        .replace(/\*\*CRITICAL:\*\*/gi, '<span class="text-red-400 font-bold">🚨 CRITICAL:</span>')
        .replace(/\*\*([^*]+)\*\*/g, '<strong class="text-white font-semibold">$1</strong>');
    
    // Highlight file paths and code
    formatted = formatted.replace(/`([^`]+)`/g, '<code class="px-1.5 py-0.5 rounded bg-white/10 text-purple-300 font-mono text-xs">$1</code>');
    
    return formatted;
};
</script>

<style scoped>
/* Custom scrollbar styling */
.custom-scrollbar::-webkit-scrollbar {
    width: 6px;
}

.custom-scrollbar::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 3px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 3px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.3);
}
</style>

