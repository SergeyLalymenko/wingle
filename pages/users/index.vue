<script setup>

const usersStore = useUsersStore();
usersStore.fetchUsers();

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
            
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>
