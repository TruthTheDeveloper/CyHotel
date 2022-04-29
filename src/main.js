import { createApp } from 'vue';
import App from './App.vue';
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

// Use plugin with defaults
app.use(VCalendar, {})

const app = createApp(App);

app.component("font-awesome-icon", FontAwesomeIcon);

// add necessary dependencies...

app.mount("#app");