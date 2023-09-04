<template>
    <div class="container">
        <h1>Users</h1>
        <div>
            <router-link :to="{ name: 'user.index' }" class="btn btn-primary me-3">List</router-link>
            <router-link :to="{ name: 'user.create' }" class="btn btn-primary">Create</router-link>
        </div>
        <router-view></router-view>
    </div>
</template>
