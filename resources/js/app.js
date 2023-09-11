require('./bootstrap')

import { library } from "@fortawesome/fontawesome-svg-core";
// import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { fas } from '@fortawesome/free-solid-svg-icons'
// import { fab } from '@fortawesome/free-brands-svg-icons';
// import { far } from '@fortawesome/free-regular-svg-icons';
// import { dom } from "@fortawesome/fontawesome-svg-core";
library.add(fas);
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

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
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(router)
app.mount('#app')