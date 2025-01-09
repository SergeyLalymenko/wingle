<script setup>
const searchValue = defineModel({ default: '' });
const searchConfig = {
    type: 'search',
    placeholder: 'Search'
};
const usersStore = useUsersStore();
const filteredUsers = computed(() => {
    return usersStore.users.filter((user) => {
        const lowerName = user.name.toLowerCase();
        const searchValueCopy = searchValue.value;
        const lowerSearchValue = searchValueCopy.toLowerCase();

        return lowerName.includes(lowerSearchValue);
    });
});

!usersStore.isLoadedOnce && usersStore.fetchUsers(1000);
</script>

<template>
    <div class="users-cards">
        <ComponentLoader v-if="usersStore.isLoading" />
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
                    class="users-cards__body-card"
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
        $gap: 20px;
        $cardsInRow: 5;
        $gapInRow: $gap * ($cardsInRow - 1);

        margin-top: 20px;
        display: flex;
        flex-wrap: wrap;
        gap: $gap;

        &-card {
            max-width: calc(100% / $cardsInRow - $gapInRow / $cardsInRow);
        }
    }

    &__empty {
        margin-top: 20px;
    }

    @media(max-width: 1199px) {

        &__body {
            $gap: 20px;
            $cardsInRow: 4;
            $gapInRow: $gap * ($cardsInRow - 1);

            &-card {
                max-width: calc(100% / $cardsInRow - $gapInRow / $cardsInRow);
            }
        }
    }

    @media(max-width: 991px) {

        &__body {
            $gap: 20px;
            $cardsInRow: 3;
            $gapInRow: $gap * ($cardsInRow - 1);

            &-card {
                max-width: calc(100% / $cardsInRow - $gapInRow / $cardsInRow);
            }
        }
    }

    @media(max-width: 767px) {

        &__body {
            $gap: 20px;
            $cardsInRow: 2;
            $gapInRow: $gap * ($cardsInRow - 1);

            &-card {
                max-width: calc(100% / $cardsInRow - $gapInRow / $cardsInRow);
            }
        }
    }

    @media(max-width: 575px) {

        &__body {
            $gap: 20px;
            $cardsInRow: 1;
            $gapInRow: $gap * ($cardsInRow - 1);

            &-card {
                max-width: calc(100% / $cardsInRow - $gapInRow / $cardsInRow);
            }
        }
    }
}
</style>
