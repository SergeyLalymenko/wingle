<script setup>
useHead({
    title: 'Users',
    meta: [
        {
            property: 'og:title',
            content: 'Users'
        },
        {
            name: 'description',
            content: 'Users description'
        },
        {
            property: 'og:description',
            content: 'Users description'
        }
    ]
});
</script>

<template>
    <div class="users">
        <div class="users__wrapper wrapper">
            <ModuleUsersCards />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.users {

    &__wrapper {
        margin-top: 40px;
        margin-bottom: 20px;
    }
}
</style>
