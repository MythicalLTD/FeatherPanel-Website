<template>
    <section id="plugins" class="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div class="max-w-7xl mx-auto">
            <div class="text-center mb-16">
                <h2 class="text-4xl md:text-5xl font-bold mb-4 animate-slide-in-up">
                    <span class="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                        Extend with Plugins
                    </span>
                </h2>
                <p class="text-xl text-gray-400 animate-slide-in-up stagger-1">
                    Browse our collection of verified plugins to enhance your FeatherPanel
                </p>
            </div>

            <!-- Search Bar -->
            <div class="max-w-2xl mx-auto mb-12 animate-slide-in-up stagger-2">
                <div class="relative">
                    <Search
                        class="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                    />
                    <input
                        v-model="searchQuery"
                        type="text"
                        placeholder="Search plugins..."
                        class="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm transition-all duration-300"
                        @input="handleSearch"
                    />
                    <button
                        v-if="searchQuery"
                        class="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                        @click="clearSearch"
                    >
                        <X class="w-5 h-5" />
                    </button>
                </div>
            </div>

            <!-- Loading State -->
            <div v-if="loading" class="flex justify-center items-center py-20">
                <div class="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
            </div>

            <!-- Error State -->
            <div v-else-if="error" class="text-center py-20">
                <AlertCircle class="w-16 h-16 text-red-400 mx-auto mb-4" />
                <p class="text-xl text-red-400">Failed to load plugins</p>
                <p class="text-gray-400 mt-2">{{ error }}</p>
            </div>

            <!-- No Results -->
            <div
                v-else-if="plugins.length === 0 && !loading"
                class="text-center py-20"
            >
                <Package class="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p class="text-xl text-gray-400">
                    {{ searchQuery ? 'No plugins found matching your search' : 'No plugins available' }}
                </p>
            </div>

            <!-- Plugins Grid -->
            <div v-else class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div
                    v-for="(plugin, index) in plugins"
                    :key="plugin.id"
                    class="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 cursor-pointer group animate-slide-in-up"
                    :class="`stagger-${(index % 6) + 1}`"
                >
                    <!-- Plugin Header -->
                    <div class="flex items-start gap-4 mb-4">
                        <div
                            class="w-16 h-16 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 overflow-hidden group-hover:scale-110 transition-transform duration-300"
                        >
                            <img
                                v-if="plugin.icon"
                                :src="plugin.icon"
                                :alt="plugin.name"
                                class="w-full h-full object-cover"
                                @error="handleImageError"
                            />
                            <Package v-else class="w-8 h-8 text-purple-400" />
                        </div>
                        <div class="flex-1 min-w-0">
                            <div class="flex items-start justify-between gap-2">
                                <h3 class="text-lg font-semibold text-white truncate group-hover:text-blue-400 transition-colors">
                                    {{ plugin.name }}
                                </h3>
                                <CheckCircle2
                                    v-if="plugin.verified"
                                    class="w-5 h-5 text-blue-400 flex-shrink-0"
                                    title="Verified Plugin"
                                />
                            </div>
                            <p class="text-sm text-gray-400 truncate">
                                by {{ plugin.author }}
                            </p>
                        </div>
                    </div>

                    <!-- Plugin Description -->
                    <p class="text-gray-300 text-sm mb-4 line-clamp-3 leading-relaxed">
                        {{ plugin.description }}
                    </p>

                    <!-- Plugin Tags -->
                    <div v-if="plugin.tags && plugin.tags.length > 0" class="flex flex-wrap gap-2 mb-4">
                        <span
                            v-for="tag in plugin.tags.slice(0, 3)"
                            :key="tag"
                            class="text-xs px-2 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30"
                        >
                            {{ tag }}
                        </span>
                        <span
                            v-if="plugin.tags.length > 3"
                            class="text-xs px-2 py-1 rounded-full bg-gray-500/20 text-gray-300 border border-gray-500/30"
                        >
                            +{{ plugin.tags.length - 3 }}
                        </span>
                    </div>

                    <!-- Plugin Stats -->
                    <div class="flex items-center justify-between text-sm border-t border-white/10 pt-4">
                        <div class="flex items-center gap-4">
                            <div class="flex items-center gap-1 text-gray-400">
                                <Download class="w-4 h-4" />
                                <span>{{ formatDownloads(plugin.downloads) }}</span>
                            </div>
                            <div v-if="plugin.latest_version?.version" class="flex items-center gap-1 text-gray-400">
                                <Tag class="w-4 h-4" />
                                <span>{{ plugin.latest_version.version }}</span>
                            </div>
                        </div>
                        <a
                            v-if="plugin.website"
                            :href="plugin.website"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="text-blue-400 hover:text-blue-300 transition-colors"
                            @click.stop
                        >
                            <ExternalLink class="w-4 h-4" />
                        </a>
                    </div>
                </div>
            </div>

            <!-- Pagination -->
            <div
                v-if="pagination && pagination.total_pages > 1"
                class="flex justify-center items-center gap-4 mt-12"
            >
                <button
                    :disabled="!pagination.has_prev"
                    class="px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                    @click="goToPage(pagination.current_page - 1)"
                >
                    <ChevronLeft class="w-5 h-5" />
                </button>

                <div class="flex items-center gap-2">
                    <button
                        v-for="page in visiblePages"
                        :key="page"
                        class="w-10 h-10 rounded-lg transition-all duration-300"
                        :class="
                            page === pagination.current_page
                                ? 'bg-blue-500 text-white'
                                : 'bg-white/5 border border-white/10 hover:bg-white/10'
                        "
                        @click="goToPage(page)"
                    >
                        {{ page }}
                    </button>
                </div>

                <button
                    :disabled="!pagination.has_next"
                    class="px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                    @click="goToPage(pagination.current_page + 1)"
                >
                    <ChevronRight class="w-5 h-5" />
                </button>
            </div>

            <!-- Stats Summary -->
            <div class="mt-12 text-center text-sm text-gray-400">
                <p v-if="pagination">
                    Showing {{ pagination.from }}-{{ pagination.to }} of {{ pagination.total_records }} plugins
                </p>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import {
    Search,
    Package,
    Download,
    Tag,
    ExternalLink,
    CheckCircle2,
    X,
    AlertCircle,
    ChevronLeft,
    ChevronRight,
} from 'lucide-vue-next';

const plugins = ref([]);
const loading = ref(true);
const error = ref(null);
const searchQuery = ref('');
const pagination = ref(null);
const currentPage = ref(1);
const searchTimeout = ref(null);

const fetchPlugins = async (page = 1, query = '') => {
    try {
        loading.value = true;
        error.value = null;

        const params = new URLSearchParams();
        if (query) params.append('q', query);
        if (page > 1) params.append('page', page.toString());

        const url = `/api/online-plugins-list${params.toString() ? '?' + params.toString() : ''}`;
        const response = await fetch(url);
        const result = await response.json();

        if (result.success && result.data) {
            plugins.value = result.data.addons || [];
            pagination.value = result.data.pagination || null;
            currentPage.value = page;
        } else {
            error.value = result.error_message || 'Failed to fetch plugins';
        }
    } catch (err) {
        error.value = err.message || 'An error occurred while fetching plugins';
        console.error('Error fetching plugins:', err);
    } finally {
        loading.value = false;
    }
};

const handleSearch = () => {
    // Debounce search
    if (searchTimeout.value) {
        clearTimeout(searchTimeout.value);
    }

    searchTimeout.value = setTimeout(() => {
        currentPage.value = 1;
        fetchPlugins(1, searchQuery.value);
    }, 500);
};

const clearSearch = () => {
    searchQuery.value = '';
    currentPage.value = 1;
    fetchPlugins(1, '');
};

const goToPage = (page) => {
    if (page < 1 || (pagination.value && page > pagination.value.total_pages)) {
        return;
    }
    fetchPlugins(page, searchQuery.value);
    // Scroll to top of section
    document.getElementById('plugins')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const visiblePages = computed(() => {
    if (!pagination.value) return [];

    const current = pagination.value.current_page;
    const total = pagination.value.total_pages;
    const pages = [];

    // Show max 5 pages
    let start = Math.max(1, current - 2);
    const end = Math.min(total, start + 4);

    // Adjust start if we're near the end
    if (end - start < 4) {
        start = Math.max(1, end - 4);
    }

    for (let i = start; i <= end; i++) {
        pages.push(i);
    }

    return pages;
});

const formatDownloads = (downloads) => {
    if (downloads >= 1000) {
        return (downloads / 1000).toFixed(1) + 'k';
    }
    return downloads.toString();
};

const handleImageError = (event) => {
    event.target.style.display = 'none';
};

onMounted(() => {
    fetchPlugins();
});
</script>

<style scoped>
.line-clamp-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
</style>

