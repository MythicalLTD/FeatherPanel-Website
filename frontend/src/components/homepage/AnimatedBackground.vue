<template>
    <div class="fixed inset-0 pointer-events-none">
        <div
            class="absolute inset-0 bg-gradient-to-br from-blue-950/20 via-black to-purple-950/20 animate-gradient"
        ></div>
        <div class="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
        <div
            class="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float-delayed"
        ></div>
        <div class="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-float-slow"></div>
        <div class="grid-background"></div>
    </div>
</template>

<script setup></script>
