<script setup>
import defaultAvatarImg from '~/assets/images/users/default-avatar.jpg';

const { userId } = defineProps(['userId']);
const usersStore = useUsersStore();
const user = computed(() => {
    return usersStore.users.find(({ id }) => id === +userId);
});

!usersStore.isLoadedOnce && usersStore.fetchUsers(1000);
</script>

<template>
    <div class="user-full-info">
        <ComponentLoader v-if="usersStore.isLoading" />
        <template v-else>
            <div
                v-if="user"
                class="user-full-info__body"
            >
                <img
                    class="user-full-info__image"
                    :src="user.image || defaultAvatarImg"
                    alt="avatar"
                />
                <h5 class="user-full-info__text">
                    <span>Name: </span> {{ user.name }}
                </h5>
                <h5 class="user-full-info__text">
                    <span>Email: </span>
                    <a
                        class="user-full-info__text-href"
                        :href="'mailto:' + user.email"
                    >
                        {{ user.email }}
                    </a>
                </h5>
                <h5 class="user-full-info__text">
                    <span>City: </span> {{ user.address.city }}
                </h5>
                <h5 class="user-full-info__text">
                    <span>Street: </span> {{ user.address.street }}
                </h5>
                <h5 class="user-full-info__text">
                    <span>Suite: </span> {{ user.address.suite }}
                </h5>
                <h5 class="user-full-info__text">
                    <span>Zipcode: </span> {{ user.address.zipcode }}
                </h5>
            </div>
            <div v-else>
                No user found.
            </div>
        </template>
    </div>
</template>

<style lang="scss" scoped>
.user-full-info {
    width: 100%;

    &__image {
        width: 100%;
        max-width: 200px;
        margin-bottom: 10px;
    }

    &__text {
        margin-top: 5px;

        span {
            font-weight: 700;
        }
    }
}
</style>
