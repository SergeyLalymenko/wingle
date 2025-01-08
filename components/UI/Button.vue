<script setup>
const props = defineProps(['config']);

const defaultConfig = {
    visualType: 'primary',
    type: 'button',
    size: 'sm'
};

const config = {
    ...defaultConfig,
    ...props.config
};
</script>

<template>
    <button
        class="button"
        :class="[config.size, config.visualType]"
        :type="config.type"
    >
        <slot />
    </button>
</template>

<style lang="scss" scoped>
.button {
    background: none;
    border: none;

    &.sm {
        padding: 10px 20px;
        font-size: 1rem;
    }
    
    &.md {
        padding: 16px 24px;
        font-size: 1.25rem;
    }

    &.xl {
        padding: 20px 28px;
        font-size: 1.25rem;
    }
    
    &.primary {
        background: $colorActive;
        color: $colorText;
        border-radius: 4px;

        &:hover {
            background: $colorActiveHighlight;
        }
    }

    &.danger {
        background: $colorDanger;
        color: $colorText;
        border-radius: 4px;

        &:hover {
            background: $colorDangerActive;
        }
    }
}
</style>
