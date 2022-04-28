import { createApp } from 'vue';
import App from './App.vue';
import './index.css';
// import Vue from 'vue';

import { library } from '@fortawesome/fontawesome-svg-core'

import { faPhone } from '@fortawesome/free-solid-svg-icons'

import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(fas, far, fab)

dom.watch();


createApp(App)
.component("font-awesome-icon", FontAwesomeIcon)
.mount('#app');
