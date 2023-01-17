import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import store from './stores'
import router from './router'

import "bootstrap/dist/css/bootstrap.css";

const vue = createApp(App);
vue.use(router);
vue.use(store);

vue.mount('#app');

import "bootstrap/dist/js/bootstrap.js";