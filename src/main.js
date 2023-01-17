import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import store from './stores'
import router from './router'

const vue = createApp(App);
vue.use(router);
vue.use(store);

vue.mount('#app');