<template>
    <p>Hello world</p>
    <font-awesome-icon icon="phone" />
    <font-awesome-icon icon="fa-solid fa-caret-up" />
    <font-awesome-icon icon="fa-solid fa-book" />
    <SideBar/>
    <router-view/>
</template>

<script>
import SideBar from "./components/layouts/SideBar.vue"
export default {
    name: "MyApp",
    components: {SideBar}
}
</script>

<style>

</style>