<template>
    <span :class="classes" :style="style">{{ text }}</span>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

const props = defineProps<{
    text: string;
    weight: 'bold' | 'semi-bold' | 'normal';
    size: number;
    color?: string;
}>();

const emit = defineEmits<{
    (e: 'click', id: number): void;
}>();

const classes = computed(() => ({
    'storybook-text': true,
    'font-bold': props.weight === 'bold',
    'font-semibold': props.weight === 'semi-bold',
    'font-normal': props.weight === 'normal',
}));

const style = computed(() => ({
    fontSize: `${props.size || 16}px`,
    color: props.color,
}));
</script>

<style scoped>
.storybook-text {
    font-family: 'Inter', ui-sans-serif, system-ui;
    color: white;
}
</style>
