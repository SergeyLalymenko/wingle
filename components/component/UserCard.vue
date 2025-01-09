<script setup>
import defaultAvatarImg from '~/assets/images/users/default-avatar.jpg';

const { user } = defineProps(['user']);
</script>

<template>
    <div class="user-card">
        <NuxtLink
            class="user-card__link"
            :to="'/users/' + user.id"
        >
            <img
                class="user-card__image"
                :src="user.image || defaultAvatarImg"
                alt="avatar"
            />
        </NuxtLink>
        <h6 class="user-card__name">
            {{ user.name }}
        </h6>
        <a
            class="user-card__email"
            :href="'mailto:' + user.email"
        >
            {{ user.email }}
        </a>
    </div>
</template>

<style lang="scss" scoped>
.user-card {
    display: flex;
    flex-direction: column;
    padding: 20px;
    border-radius: 8px;
    background: $colorBackgroundUpper;
    width: 100%;

    &__link {
        display: flex;
        max-width: 120px;
        border-radius: 50%;
        overflow: hidden;
        margin: 0 auto;
    }

    &__image {
        width: 100%;
    }

    &__name {
        margin-top: 20px;
        margin-bottom: 5px;
    }

    &__email {
        margin-top: auto;
        max-width: 100%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
}
</style>
