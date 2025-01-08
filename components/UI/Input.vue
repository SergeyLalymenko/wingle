<script setup>
const model = defineModel();
const props = defineProps(['config']);

const defaultConfig = {
    type: 'text',
    placeholder: ''
};
const config = {
    ...defaultConfig,
    ...props.config
};
</script>

<template>
    <input
        class="input"
        :type="config.type"
        v-model="model"
        :placeholder="config.placeholder"
        :id="config.id"
    />
</template>

<style lang="scss" scoped>
.input {
    position: relative;
    width: 100%;
    border: 1px solid $colorFieldBorder;
    border-radius: 4px;
    padding: 8px;
    background-color: $colorFieldBackground;

    &[type=search] {
        padding-right: 30px;
        background-image: url('~/assets/images/shared/search.svg');
        background-repeat: no-repeat;
        background-size: 16px;
        background-position: calc(100% - 10px) 50%;
    }
}
</style>
