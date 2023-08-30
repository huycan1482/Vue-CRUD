<template>
    <h1>Users</h1>

    <div>
        <p v-for="user in users" :key="user.id">
            {{ user.name }}
        </p>
    </div>
</template>

<script>
import useUser from "../../composables/users"
import { onMounted } from "vue";

export default {
    name: 'ListUsers',
    setup() {
        const { users, getUsers } = useUser()

        onMounted(getUsers)

        console.log(users)

        return {
            users
        }
    }
}
</script>

<style>

</style>