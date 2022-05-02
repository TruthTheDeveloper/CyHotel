import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from './page/LandingPage.vue';
import BookingPage from './page/BookingPage.vue';
import Register from './page/Auth/Register.vue';
import Login from './page/Auth/Login.vue';
import Dashboard from './page/DashBoard/Dashboard.vue';

export const router = createRouter({
    history:createWebHistory(),
    routes:[
        {
            name:'LandingPage',
            path:'/',
            component:LandingPage
        },
        {
            name:'BookingPage',
            path:'/book',
            component:BookingPage
        },
        {
            name:'Register',
            path:'/register',
            component:Register
        },
        {
            name:'Login',
            path:'/login',
            component:Login
        },
        {
            name:'Dashboard',
            path:'/dashboard',
            component:Dashboard
        },

    ]
})