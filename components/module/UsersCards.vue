<script setup>
const searchValue = defineModel({ default: '' });
const isLoading = ref(true);

const searchConfig = {
    type: 'search',
    placeholder: 'Search'
};

const usersStore = useUsersStore();
usersStore.fetchUsers();

const filteredUsers = computed(() => {
    return usersStore.users.filter((user) => {
        const lowerName = user.name.toLowerCase();
        const searchValueCopy = searchValue.value;
        const lowerSearchValue = searchValueCopy.toLowerCase();

        return lowerName.includes(lowerSearchValue);
    });
});

function initLoadingTimer() {
    setTimeout(() => {
        isLoading.value = false;
    }, 1000);
}

onMounted(initLoadingTimer);
</script>

<template>
    <div class="users-cards">
        <p v-if="isLoading">
            Loading...
        </p>
        <template v-else>
            <div class="users-cards__head head">
                <UIInput
                    class="head__search"
                    :config="searchConfig"
                    v-model="searchValue"
                />
            </div>
            <div
                v-if="filteredUsers.length"
                class="users-cards__body"
            >
                <ComponentUserCard
                    v-for="user in filteredUsers"
                    :key="user.id"
                    :user="user"
                />
            </div>
            <div
                v-else
                class="users-cards__empty"
            >
                No users found.
            </div>
        </template>
    </div>
</template>

<style lang="scss" scoped>
.users-cards {
    display: flex;
    flex-direction: column;
    width: 100%;

    .head {

        &__search {
            width: 200px;
        }
    }

    &__body {
        margin-top: 20px;
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
    }

    &__empty {
        margin-top: 20px;
    }
}
</style>
