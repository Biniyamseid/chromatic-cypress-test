<template>
    <span v-html="icon" :class="classes" :style="style"></span>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

const props = defineProps<{
    icon: string;
    size?: number;
    color?: string;
    spinning: boolean;
}>();

const classes = computed(() => ({
    'storybook-icon': true,
    'icon-spin': props.spinning
}));

const icon = computed(() => {
    let icon = props.icon;
    icon = icon.replace(/(width|height|class)="[^"]*"/g, '');
    const size = props.size || 24;
    if (icon.trim().startsWith('<svg')) {
        return icon
            .replace(/(width|height|class)="[^"]*"/g, '') // Remove width, height, class, style
            .replace(/^<svg/, `<svg width="${size}px" height="${size}px" class="object-cover"`);
    }
    if (icon.trim().startsWith('<img')) {
        return icon
            .replace(/(width|height|class)="[^"]*"/g, '') // Remove width, height, class, style
            .replace(/^<img/, `<img width="${size}px" height="${size}px" class="object-cover"`);
    }
    return icon;
});

const style = computed(() => ({
    color: props.color,
}));
</script>

<style scoped>
.storybook-icon {
    display: inline-block;
    font-size: 1.5rem;
    line-height: 1;
    vertical-align: middle;
    text-align: center;
    color: inherit;
    transition: color 0.3s;
    object-fit: cover;
}

.storybook-icon--small {
    font-size: 1rem;
}

.storybook-icon--medium {
    font-size: 1.5rem;
}

.storybook-icon--large {
    font-size: 2rem;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

.icon-spin {
    animation: spin 1s linear infinite;
}
</style>