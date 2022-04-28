<template>
    <header class=" w-full ">
        <div class="header-background-image px-8 pb-16">
            <nav class="h-5 flex p-4 justify-between ">
                <h1 class="text-white text-2xl md:text-3xl lg:text-4xl font-extrabold ">Cy-<span class="text-pink-500">hotel</span></h1>
                <ul v-if="openNav === true" class="text-white lg:flex text-lg mr-8 pt-2 hidden">
                    <li class="mx-4"><a href="#">Home</a></li>
                    <li class="mx-4"><a href="#">Rooms</a></li>
                    <li class="mx-4"><a href="#">Services</a></li>
                    <li class="mx-4"><a href="#">About Us</a></li>
                    <li class="mx-4"><a href="#">Contact Us</a></li>
                    <!-- <li class="mx-4"><a href="#">07019035442</a></li> -->
                    <li class="bg-pink-500 h-10 pt-1 rounded-sm px-6 mx-4 cursor-pointer">Book Now</li>
                </ul>
                <div v-if="openNav === false" class="lg:hidden" @click="setOpenNav()">
                    <i class="fas fa-bars text-white text-3xl cursor-pointer"></i>
                </div>
                <div v-if="openNav === true" class="lg:hidden" @click="setOpenNav()">
                    <i class="fa fa-close text-white text-3xl cursor-pointer"></i>
                </div>
            </nav>
            <ul v-if="openNav === true" class="bg-white text-black lg:flex text-lg mr-8 pt-2 mt-12 w-full pl-2 pb-4 font-semibold">
                    <li class="my-1"><a href="#">Home</a></li>
                    <li class="my-1"><a href="#">Rooms</a></li>
                    <li class="my-1"><a href="#">Services</a></li>
                    <li class="my-1"><a href="#">About Us</a></li>
                    <li class="my-1"><a href="#">Contact Us</a></li>
                    <!-- <li class="mx-4"><a href="#">07019035442</a></li> -->
                    <li class="bg-pink-500 h-10 pt-1 rounded-sm w-28 text-center text-white font-normal mt-2 cursor-pointer">Book Now</li>
            </ul>
            <div class="text-white text-center lg:mt-56 font-semibold text-3xl mt-36 md:mt-44 md:text-4xl lg:text-5xl">
                <h1 class="my-4">Make yourself at home</h1>
                <p class="text-pink-500">In our Hotel</p>
            </div>
            <div class="flex justify-center lg:mt-24 mt-12  mx-auto flex-col md:flex-row">
                <div class="bg-white px-8 py-3 border">
                    <p class="font-semibold mb-2">CHECK IN</p>
                    <h1 class="text-slate-500">09<span>Mar</span></h1>
                </div>
                <div class="bg-white px-8 py-3 border">
                    <p class="font-semibold mb-2">CHECK OUT</p>
                    <h1 class="text-slate-500">12<span>Mar</span></h1>
                </div>
                <div class="bg-white px-8 py-3 border">
                    <p class="font-semibold mb-2">GUESTS</p>
                    <h1 class="text-slate-500">10<span>Mar</span></h1>
                </div>
                <div class=" px-8 py-3 bg-pink-500 text-white  text-center cursor-pointer">
                   
                    Check<br/> Availablity
                </div>
            </div>
        </div>
        
    </header>
    <about-us/>
    <services/>
    <rooms/>
    <credit/>
    <testimonial/>
    <explore/>
    <Footer/>
</template>

<script setup>
import AboutUs from './components/AboutUs.vue';
import Services from './components/Services.vue';
import Rooms from './components/Rooms.vue';
import Credit from './components/Credit.vue';
import Testimonial from './components/Testimonial.vue';
import Explore from './components/Explore.vue';
import Footer from './components/Footer.vue';


import {ref} from 'vue';


const openNav = ref(false)


const setOpenNav = () => {
    openNav.value = !openNav.value
}
  
  

</script>

