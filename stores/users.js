import { BASE_API_URL } from '~/api/api';

export const useUsersStore = defineStore('users', () => {
    const users = ref([]);

    async function fetchUsers() {
        const { data, error } = await useFetch(`${BASE_API_URL}users`);
        if (error.value) return;
        users.value = data.value;
    }

    return {
        users,
        fetchUsers
    };
});
