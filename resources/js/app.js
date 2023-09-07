require('./bootstrap')
import { createApp } from "vue";
import router from "./router"

import MyApp from "./MyApp.vue"
// import CompanyIndex from "./components/companies/CompanyIndex.vue"

// createApp({
    // components: {
    //     CompanyIndex
    // }
// }).use(router).mount('#app')

const app = createApp(MyApp)
// app.component('my-app', MyApp)
app.use(router)
app.mount('#app')