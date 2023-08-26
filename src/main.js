import { createApp } from "vue";
import App from "@/App.vue";
import router from "@/routes/index";

const Vue = createApp(App);
Vue.use(router);
Vue.mount("#app");
