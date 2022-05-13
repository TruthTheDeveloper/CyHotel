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
import LandingPage from './page/landingPage.vue';
import BookingPage from './page/bookingPage.vue';
import Register from './page/Auth/register.vue';
import Login from './page/Auth/login.vue';
import DashBoard from './page/DashBoard/dashboard.vue';
import Reservation from './page/DashBoard/reservation.vue';
import AdminLandingPage from './page/Admin/adminLandingPage.vue';
import AdminAuth from './page/Admin/adminAuth.vue';
import AdminDashboard from './page/Admin/adminDashboard.vue';
import createRoomForm from './page/Admin/createRoomForm.vue';
import UpdateRoomForm from './page/Admin/updateRoomform.vue';
import Management from './page/Admin/management.vue';

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
            component:DashBoard
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

        {
            name:'management',
            path:'/admin/management',
            component:Management
        },

    ]
})