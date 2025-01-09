<script setup>
const route = useRoute();
</script>

<template>
    <div class="user-profile">
        <div class="user-profile__wrapper wrapper">
            <ComponentUserFullInfo
                :userId="route.params.id"
            />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.user-profile {

    &__wrapper {
        margin-top: 40px;
        margin-bottom: 20px;
    }
}
</style>
