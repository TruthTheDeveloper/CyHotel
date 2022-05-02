<template>
    <section class="overflow-x-hidden">
    <header class="">
        <div class="header-background-image px-8 pb-16 lg:h-screen">
            <nav class="h-5 flex p-4 justify-between ">
                <h1 class="text-white text-2xl md:text-3xl lg:text-4xl font-extrabold ">Cy-<span class="text-pink-500">hotel</span></h1>
                <ul v-if="openNav === false" class="text-white lg:flex text-lg mr-8 pt-2 hidden">
                    <li class="mx-4 hover:text-pink-500"><router-link to="/">Home</router-link></li>
                    <li class="mx-4 hover:text-pink-500"><a href="#rooms">Rooms</a></li>
                    <li class="mx-4 hover:text-pink-500"><a href="#service">Services</a></li>
                    <li class="mx-4 hover:text-pink-500"><a href="#about-us">About Us</a></li>
                    <li class="mx-4 hover:text-pink-500"><a href="#footer">Contact Us</a></li>
                    
                    <!-- <li class="mx-4"><a href="#">07019035442</a></li> -->
                    <li class="bg-pink-500 h-10 pt-1 rounded-sm px-6 mx-4 cursor-pointer"><router-link to="/book">Book Now</router-link></li>
                </ul>
                <div v-if="openNav === false" class="lg:hidden" @click="setOpenNav()">
                    <i class="fa-solid fa-bars text-white text-3xl cursor-pointer"></i>
                </div>
                <div v-if="openNav === true" class="lg:hidden" @click="setOpenNav()">
                    <i class="fa fa-close text-white text-3xl cursor-pointer"></i>
                </div>
                
            </nav>
            <ul v-if="openNav === true" class="bg-white text-black lg:flex text-lg mr-8 pt-2 mt-12 w-full pl-2 pb-4 font-semibold">
                    <li class="my-1"><router-link to="/">Home</router-link></li>
                    <li class="my-1"><a href="#rooms">Rooms</a></li>
                    <li class="my-1"><a href="#service">Services</a></li>
                    <li class="my-1"><a href="#about-us">About Us</a></li>
                    <li class="my-1"><a href="#footer">Contact Us</a></li>
                    <!-- <li class="mx-4"><a href="#">07019035442</a></li> -->
                    <li class="bg-pink-500 h-10 pt-1 rounded-sm w-28 text-center text-white font-normal mt-2 cursor-pointer"><router-link to="/book">Book Now</router-link></li>
            </ul>
            <div class="text-white text-center lg:mt-56 font-semibold text-3xl mt-36 md:mt-44 md:text-4xl lg:text-5xl">
                <h1 class="my-4">Make yourself at home</h1>
                <p class="text-pink-500">In our Hotel</p>
            </div>
            <search/>
        </div>
    </header>
    <about-us/> 
    <services/>
     <rooms/> 
     <credit/> 
     <testimonial/> 
     <explore/> 
    </section>
</template>

<script setup>

import AboutUs from './components/AboutUs.vue';
import Services from './components/Services.vue';
import Rooms from './components/Rooms.vue';
import Credit from './components/Credit.vue';
import Testimonial from './components/Testimonial.vue';
import Explore from './components/Explore.vue';
import Search from '../components/Search.vue';
import BaseLayout from '../slot/BaseLayout.vue';


// vue import
import {ref} from 'vue';

const openNav = ref(false)

const setOpenNav = () => {
    openNav.value = !openNav.value
}
 

</script>
