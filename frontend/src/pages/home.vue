<template>
    <div class="min-h-screen bg-black text-white overflow-hidden relative">
        <!-- Intro Animation -->
        <IntroAnimation />

        <!-- Animated Background -->
        <AnimatedBackground />

        <!-- Navigation -->
        <NavBar />

        <!-- Hero Section with Stats -->
        <HeroSection />
        <div class="relative z-10 px-4 sm:px-6 lg:px-8 -mt-16">
            <StatsSection />
        </div>

        <!-- Screenshots Showcase -->
        <ScreenshotsSection />

        <!-- Features Grid -->
        <FeaturesSection />

        <!-- Integrations Section -->
        <IntegrationsSection />

        <!-- Benchmarks Section -->
        <BenchmarksSection />

        <!-- Testimonials Section -->
        <TestimonialsSection />

        <!-- Feature Comparison Table -->
        <ComparisonSection />

        <!-- Pricing Section -->
        <PricingSection />

        <!-- FAQ Section -->
        <FAQSection />

        <!-- Plugins Section -->
        <PluginsSection />

        <!-- Spells Section -->
        <SpellsSection />

        <!-- Changelog Section -->
        <ChangelogSection />

        <!-- CTA Section -->
        <CTASection />

        <!-- Footer -->
        <FooterSection />
    </div>
</template>

<script setup>
import IntroAnimation from '@/components/homepage/IntroAnimation.vue';
import AnimatedBackground from '@/components/homepage/AnimatedBackground.vue';
import NavBar from '@/components/homepage/NavBar.vue';
import HeroSection from '@/components/homepage/HeroSection.vue';
import StatsSection from '@/components/homepage/StatsSection.vue';
import ScreenshotsSection from '@/components/homepage/ScreenshotsSection.vue';
import FeaturesSection from '@/components/homepage/FeaturesSection.vue';
import IntegrationsSection from '@/components/homepage/IntegrationsSection.vue';
import BenchmarksSection from '@/components/homepage/BenchmarksSection.vue';
import TestimonialsSection from '@/components/homepage/TestimonialsSection.vue';
import ComparisonSection from '@/components/homepage/ComparisonSection.vue';
import PricingSection from '@/components/homepage/PricingSection.vue';
import FAQSection from '@/components/homepage/FAQSection.vue';
import CTASection from '@/components/homepage/CTASection.vue';
import FooterSection from '@/components/homepage/FooterSection.vue';
import ChangelogSection from '@/components/homepage/ChangelogSection.vue';
import PluginsSection from '@/components/homepage/PluginsSection.vue';
import SpellsSection from '@/components/homepage/SpellsSection.vue';
</script>
