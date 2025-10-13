<template>
    <section id="changelog" class="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div class="max-w-7xl mx-auto">
            <div class="text-center mb-16">
                <h2 class="text-4xl md:text-5xl font-bold mb-4 animate-slide-in-up">
                    <span class="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                        Latest Updates & Changelog
                    </span>
                </h2>
                <p class="text-xl text-gray-400 animate-slide-in-up stagger-1">
                    Stay up to date with the latest features, fixes, and improvements
                </p>
            </div>

            <!-- Loading State -->
            <div v-if="loading" class="flex justify-center items-center py-20">
                <div class="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
            </div>

            <!-- Error State -->
            <div v-else-if="error" class="text-center py-20">
                <AlertCircle class="w-16 h-16 text-red-400 mx-auto mb-4" />
                <p class="text-xl text-red-400">Failed to load changelog data</p>
                <p class="text-gray-400 mt-2">{{ error }}</p>
            </div>

            <!-- Version Information -->
            <div v-else-if="versionData" class="space-y-8">
                <!-- Current/Latest Version Card -->
                <div
                    class="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300 animate-slide-in-up"
                >
                    <div class="flex flex-wrap items-center justify-between gap-4 mb-6">
                        <div class="flex items-center gap-4">
                            <div
                                class="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center"
                            >
                                <Sparkles class="w-8 h-8 text-blue-400" />
                            </div>
                            <div>
                                <h3 class="text-3xl font-bold text-white flex items-center gap-3">
                                    {{ versionData.version }}
                                    <span
                                        class="text-sm px-3 py-1 rounded-full"
                                        :class="getVersionTypeBadge(versionData.type)"
                                    >
                                        {{ versionData.type }}
                                    </span>
                                    <span
                                        v-if="versionData.is_security_release"
                                        class="text-sm px-3 py-1 rounded-full bg-red-500/20 text-red-400 border border-red-500/30"
                                    >
                                        🔒 Security Release
                                    </span>
                                </h3>
                                <p class="text-xl text-purple-400 font-semibold">
                                    {{ versionData.release_name }}
                                </p>
                            </div>
                        </div>
                        <div class="text-right">
                            <p class="text-sm text-gray-400">Released</p>
                            <p class="text-white font-semibold">
                                {{ formatDate(versionData.created_at) }}
                            </p>
                        </div>
                    </div>

                    <p class="text-gray-300 mb-6">{{ versionData.description }}</p>

                    <div class="flex flex-wrap gap-4 text-sm">
                        <div class="flex items-center gap-2">
                            <Code class="w-4 h-4 text-blue-400" />
                            <span class="text-gray-400">PHP:</span>
                            <span class="text-white font-mono">
                                {{ versionData.min_supported_php }} - {{ versionData.max_supported_php }}
                            </span>
                        </div>
                    </div>
                </div>

                <!-- Changelog Categories -->
                <div class="grid md:grid-cols-2 gap-6">
                    <!-- Added Features -->
                    <ChangelogCategory
                        v-if="versionData.changelog_added?.length"
                        title="✨ Added"
                        :items="versionData.changelog_added"
                        icon-color="text-green-400"
                        bg-gradient="from-green-500/20 to-emerald-500/20"
                        :icon="Plus"
                    />

                    <!-- Fixed Issues -->
                    <ChangelogCategory
                        v-if="versionData.changelog_fixed?.length"
                        title="🔧 Fixed"
                        :items="versionData.changelog_fixed"
                        icon-color="text-blue-400"
                        bg-gradient="from-blue-500/20 to-cyan-500/20"
                        :icon="Wrench"
                    />

                    <!-- Improvements -->
                    <ChangelogCategory
                        v-if="versionData.changelog_improved?.length"
                        title="⚡ Improved"
                        :items="versionData.changelog_improved"
                        icon-color="text-purple-400"
                        bg-gradient="from-purple-500/20 to-pink-500/20"
                        :icon="Zap"
                    />

                    <!-- Removed Features -->
                    <ChangelogCategory
                        v-if="versionData.changelog_removed?.length"
                        title="🗑️ Removed"
                        :items="versionData.changelog_removed"
                        icon-color="text-orange-400"
                        bg-gradient="from-orange-500/20 to-red-500/20"
                        :icon="Trash2"
                    />

                    <!-- Updated -->
                    <ChangelogCategory
                        v-if="versionData.changelog_updated?.length"
                        title="🔄 Updated"
                        :items="versionData.changelog_updated"
                        icon-color="text-cyan-400"
                        bg-gradient="from-cyan-500/20 to-blue-500/20"
                        :icon="RefreshCw"
                    />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { Sparkles, Plus, Wrench, Zap, Trash2, RefreshCw, Code, AlertCircle } from 'lucide-vue-next';
import ChangelogCategory from './ChangelogCategory.vue';

const versionData = ref(null);
const loading = ref(true);
const error = ref(null);

const fetchChangelog = async () => {
    try {
        loading.value = true;
        error.value = null;

        const response = await fetch('/api/online-versions-list');
        const result = await response.json();

        if (result.success && result.data) {
            // Use latest version data, fallback to current if latest is not available
            versionData.value = result.data.latest || result.data.current;
        } else {
            error.value = result.error_message || 'Failed to fetch changelog data';
        }
    } catch (err) {
        error.value = err.message || 'An error occurred while fetching changelog data';
        console.error('Error fetching changelog:', err);
    } finally {
        loading.value = false;
    }
};

const getVersionTypeBadge = (type) => {
    const badges = {
        alpha: 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30',
        beta: 'bg-orange-500/20 text-orange-400 border border-orange-500/30',
        stable: 'bg-green-500/20 text-green-400 border border-green-500/30',
        rc: 'bg-blue-500/20 text-blue-400 border border-blue-500/30',
    };
    return badges[type] || 'bg-gray-500/20 text-gray-400 border border-gray-500/30';
};

const formatDate = (dateString) => {
    if (!dateString) return 'Unknown';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
};

onMounted(() => {
    fetchChangelog();
});
</script>

