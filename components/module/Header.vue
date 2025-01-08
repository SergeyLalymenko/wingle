<template>
    <header class="header">
        <div class="header__wrapper wrapper">
            <ul class="header__nav">
                <NuxtLink to="/" class="header__nav-link" exact-active-class="active">
                    Home
                </NuxtLink>
                <NuxtLink to="/users" class="header__nav-link" exact-active-class="active">
                    Users
                </NuxtLink>
            </ul>
        </div>
    </header>
</template>

<style lang="scss" scoped>
.header {
    display: flex;
    width: 100%;
    border-bottom: 1px solid $colorDivider;

    &__wrapper {
        padding-top: 20px;
        padding-bottom: 20px;
    }

    &__nav {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        gap: 20px;
        width: 100%;

        &-link {

            &.active {
                position: relative;

                &:after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    height: 1px;
                    background: $colorLink;
                }

                &:hover {
                    color: $colorLink;
                }
            }
        }
    }
}
</style>
