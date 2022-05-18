import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import vuetify from './plugins/vuetify'
import AOS from "aos";
import "aos/dist/aos.css";

Vue.config.productionTip = false



new Vue({
    created() {
        AOS.init();
    },
    store,
    router,
    vuetify,
    render: (h) => h(App),
}).$mount("#app");
