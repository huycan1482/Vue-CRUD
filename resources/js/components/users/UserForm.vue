<template>
  <div class="mt-2 mb-6 text-sm text-red-600" v-if="errors !== ''">
    {{ errors }}
  </div>

  <form class="space-y-6" @submit.prevent="saveUser">
    <div class="mb-3">
      <label for="name" class="form-label">Name</label>
      <input type="text" class="form-control" name="name" id="name" placeholder="name" v-model="form.name"> 
    </div>
    <div class="mb-3">
      <label for="email" class="form-label">Email</label>
      <input type="email" class="form-control" name="email" id="email" placeholder="name@example.com" v-model="form.email"> 
    </div>
    <div class="mb-3">
      <button class="btn btn-primary mb-3"> {{ userId ? 'Update' : 'Create' }} </button>
    </div>
  </form>
</template>

<script>
import { reactive, onMounted } from "vue"
import useUser from "../../composables/users";

export default {
    name: "UserForm",
    props: {
        userId: {
            require: false,
            type: String,
        }
    },
    setup(props) {
        let form = reactive({
            'id': null,
            'name': '',
            'email': '',
        })

        const { errors, user, getUser, updateUser, storeUser } = useUser()

        if (props.userId) {
            onMounted(getUser(props.userId))
            form = user;
        }

        const saveUser = async () => {
            props.userId
                ? await updateUser(props.userId)
                : await storeUser({ ...form })
        }

        return {
            form,
            saveUser,
            errors
        }
    }
}
</script>

<style>

</style>