<template>
    <div class="container">
        <table class="table table-striped">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(user, key) in users" :key="user.id">
                    <th scope="row">{{ key + 1 }}</th>
                    <td>{{ user.name }}</td>
                    <td>{{ user.email }}</td>
                    <td>
                        <router-link :to="{ name: 'user.edit', params: { id: user.id } }" class="btn btn-primary me-3">Edit</router-link>
                        <div @click="deleteUser(user.id)" class="btn btn-primary">Delete</div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import useUser from "../../composables/users"
import { onMounted } from "vue";

export default {
    name: 'UserList',
    setup() {
        const { users, getUsers, destroyUser } = useUser()
        onMounted(getUsers)

        const deleteUser = async (id) => {
            if (!window.confirm('Delete?')) {
                return
            }
            await destroyUser(id);
            await getUsers();
        }

        return {
            users,
            deleteUser
        }
    }
}
</script>

<style>

</style>