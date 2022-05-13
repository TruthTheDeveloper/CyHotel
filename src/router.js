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
import LandingPage from './page/LandingPage.vue';
import BookingPage from './page/BookingPage.vue';
import Register from './page/Auth/Register.vue';
import Login from './page/Auth/Login.vue';
import DashBoard from './page/DashBoard/Dashboard.vue';
import Reservation from './page/DashBoard/Reservation.vue';
import AdminLandingPage from './page/SuperUser/AdminLandingPage.vue';
import AdminAuth from './page/SuperUser/AdminAuth.vue';
import AdminDashboard from './page/SuperUser/AdminDashboard.vue';
import CreateRoomForm from './page/SuperUser/CreateRoomForm.vue';
import UpdateRoomForm from './page/SuperUser/UpdateRoomform.vue';
import Management from './page/SuperUser/Management.vue';

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
            component:CreateRoomForm
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