import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from './page/LandingPage.vue';
import BookingPage from './page/BookingPage.vue';
import Register from './page/Auth/Register.vue';
import Login from './page/Auth/Login.vue';
import Dashboard from './page/DashBoard/Dashboard.vue';
import Reservation from './page/DashBoard/Reservation.vue';
import AdminLandingPage from './page/Admin/adminLandingPage.vue';
import AdminAuth from './page/Admin/adminAuth.vue';
import AdminDashboard from './page/Admin/adminDashboard.vue';
import createRoomForm from './page/Admin/createRoomForm.vue';
import UpdateRoomForm from './page/Admin/updateRoomform.vue';

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
        {
            name:'Reservation',
            path:'/reservation',
            component:Reservation
        },
        {
            name:'AdminPage',
            path:'/admin/landingpage',
            component:AdminLandingPage
        },
        {
            name:'AdminAuth',
            path:'/admin/auth',
            component:AdminAuth
        },
        {
            name:'adminDashboard',
            path:'/admin/dashboard',
            component:AdminDashboard
        },
        {
            name:'createRoomForm',
            path:'/admin/create/roomform',
            component:createRoomForm
        },
        {
            name:'updateRoomForm',
            path:'/admin/update/roomform',
            component:UpdateRoomForm
        },


    ]
})