import { createRouter, createWebHistory } from "vue-router";

import CompaniesIndex from '../components/companies/CompanyIndex.vue'
import ListUser from '../components/users/ListUsers.vue'
import { create } from "lodash";

const routes = [
	{
		path: '/dashboard',
		component: CompaniesIndex
	},
	{
		path: '/user',
		component: ListUser
	}
]

const route = createRouter({
	history: createWebHistory(),
	routes
})

export default route