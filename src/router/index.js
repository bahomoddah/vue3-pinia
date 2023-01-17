import { createRouter, createWebHistory } from 'vue-router'
import Homepage from '../views/index.vue';
import Login from '../views/login.vue';
import Stores from '../views/stores.vue';
import Profile from '../views/profile.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
        path: '/',
        name: 'home',
        component: Homepage
    },
    {
        path: '/stores/',
        name: 'stores',
        component: Stores,
    },
    {
        path: '/login/',
        component: Login,
        name: 'login',
    },
    {
        path: '/profile/',
        component: Profile,
        name: 'profile',
    }
  ]
})

export default router

