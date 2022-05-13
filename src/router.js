import { createRouter, createWebHistory } from 'vue-router';
// const LandingPage = () => import("./page/landingPage.vue");
// const BookingPage = () => import("./page/bookingPage.vue");
// const Register = () => import("./page/Auth/register.vue");
// const Login = () => import("./page/Auth/login.vue")
// const DashBoard = () => import("./page/Dashboard/dashboard.vue")
// const Reservation = () => import('./page/DashBoard/reservation.vue')
// const AdminLandingPage = () => import('./page/Admin/adminLandingPage.vue')
// const AdminAuth = () => import('./page/Admin/adminLandingPage.vue')
// const AdminDashboard  = () => import('./page/Admin/adminDashboard.vue')
// const createRoomForm = () => import('./page/Admin/createRoomForm.vue')
// const UpdateRoomForm = () => import('./page/Admin/updateRoomform.vue')
// const Management = () => import('./page/Admin/management.vue')
import landingPage from './page/landingPage.vue';
import bookingPage from './page/bookingPage.vue';
import register from './page/Auth/register.vue';
import login from './page/Auth/login.vue';
import dashBoard from './page/DashBoard/dashboard.vue';
import reservation from './page/DashBoard/reservation.vue';
import adminLandingPage from './page/Admin/adminLandingPage.vue';
import adminAuth from './page/Admin/adminAuth.vue';
import adminDashboard from './page/Admin/adminDashboard.vue';
import createRoomForm from './page/Admin/createRoomForm.vue';
import updateRoomForm from './page/Admin/updateRoomform.vue';
import management from './page/Admin/management.vue';

export const router = createRouter({
    history:createWebHistory(),
    routes:[
        {
            name:'LandingPage',
            path:'/',
            component:landingPage
        },
        {
            name:'BookingPage',
            path:'/book',
            component:bookingPage
        },
        {
            name:'Register',
            path:'/register',
            component:register
        },
        {
            name:'Login',
            path:'/login',
            component:login
        },
        {
            name:'Dashboard',
            path:'/dashboard',
            component:dashBoard
        },
        {
            name:'Reservation',
            path:'/reservation',
            component:reservation
        },
        {
            name:'AdminPage',
            path:'/admin/landingpage',
            component:adminLandingPage
        },
        {
            name:'AdminAuth',
            path:'/admin/auth',
            component:adminAuth
        },
        {
            name:'adminDashboard',
            path:'/admin/dashboard',
            component:adminDashboard
        },
        {
            name:'createRoomForm',
            path:'/admin/create/roomform',
            component:createRoomForm
        },
        {
            name:'updateRoomForm',
            path:'/admin/update/roomform',
            component:updateRoomForm
        },

        {
            name:'management',
            path:'/admin/management',
            component:management
        },

    ]
})