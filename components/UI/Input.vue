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
    width: 100%;
    border: 1px solid $colorFieldBorder;
    border-radius: 4px;
    padding: 8px;
}
</style>
