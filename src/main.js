import { createApp } from 'vue';
import App from './App.vue';

// Vuex
import store from './store';

//vue router
import {router} from './router.js'

//Golbal css
import './index.css';

// vue components
import 'v-calendar/dist/style.css';

// font awesome libary
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas);
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fab);
import { far } from '@fortawesome/free-regular-svg-icons';
library.add(far);
import { dom } from "@fortawesome/fontawesome-svg-core";
dom.watch();


// vue Calender
import VCalendar from 'v-calendar';
import VueTelInput from 'vue3-tel-input';
import 'vue3-tel-input/dist/vue3-tel-input.css';


//vue js toggle button


//Vue notification Toast
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";



const app = createApp(App);

//use flutterwave

//use vue notification
app.use(Toast, options);
//use vuetel
app.use(VueTelInput);
//use router
app.use(router)

// Use plugin with defaults
app.use(VCalendar, {})

app.component("font-awesome-icon", FontAwesomeIcon);

// add necessary dependencies...

//use vuex
app.use(store)
app.mount("#app");