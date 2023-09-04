import { createRouter, createWebHistory } from "vue-router";

import CompaniesIndex from '../components/companies/CompanyIndex.vue'
import UserList from '../components/users/UserList.vue'
import UserPage from "../components/users/UserPage.vue"
import UserCreate from "../components/users/UserCreate.vue"
import UserEdit from "../components/users/UserEdit.vue"

const routes = [
	{ path: '/dashboard', component: CompaniesIndex },
	{ path: '/user', component: UserPage, children: [
		{ path: '', component: UserList, name: 'user.index' },
		{ path: 'create', component: UserCreate, name: 'user.create' },
		{ path: 'edit/:id', component: UserEdit, name: 'user.edit', props: true },
	]},
]

const route = createRouter({
	history: createWebHistory(),
	routes
})

export default route