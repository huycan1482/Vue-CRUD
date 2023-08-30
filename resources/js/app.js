import { createApp } from "vue";
import router from "./router"
import App from "./App.vue"
import CompanyIndex from "./components/companies/CompanyIndex.vue"

// createApp({
//     components: {
//         CompanyIndex
//     }
// }).use(router).mount('#app')

const app = createApp({})
// app.component('CompanyIndex', CompanyIndex)
app.use(router)
app.mount('#app')