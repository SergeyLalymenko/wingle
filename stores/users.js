import { BASE_API_URL } from '~/api/api';

export const useUsersStore = defineStore('users', () => {
    const users = ref([]);
    const isLoadedOnce = ref(false);
    const isLoading = ref(false);

    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    async function fetchUsers(ms = 0) {
        isLoading.value = true;
        const { data, error } = await useFetch(`${BASE_API_URL}users`);
        if (ms) {
            await delay(ms);
        }
        isLoading.value = false;
        if (error.value) return;
        users.value = data.value;
        isLoadedOnce.value = true;
    }

    return {
        users,
        isLoadedOnce,
        isLoading,
        fetchUsers
    };
});
