import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import vuetify from './plugins/vuetify'
import AOS from "aos";
import "aos/dist/aos.css";
import EasyCamera from 'easy-vue-camera';
import jquery from 'jquery';


import DatetimePicker from 'vuetify-datetime-picker'
import VueWeather from 'vue-weather-widget';
// /* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'


// /* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

// /* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// /* add icons to the library */
library.add(faUserSecret);

// /* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false
Vue.use(DatetimePicker)
new Vue({
    created() {
        AOS.init();
    },
    store,
    router,
    vuetify,
    FontAwesomeIcon,
    render: (h) => h(App),
    EasyCamera,
    jquery,
    VueWeather,
}).$mount("#app");
