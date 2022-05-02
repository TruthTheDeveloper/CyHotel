<template>
    <div class="pb-12 mb-6" style="background:#0D0206">
            <nav class="h-5 flex p-4 justify-between ">
                <h1 class="text-white text-2xl md:text-3xl lg:text-4xl font-extrabold ">Cy-<span class="text-pink-500">hotel</span></h1>
                <ul v-if="openNav === false" class="text-white lg:flex text-lg mr-8 pt-2 hidden">
                    <li class="mx-4 hover:text-pink-500"><router-link to="/">Home</router-link></li>
                    <li class="mx-4 hover:text-pink-500"><router-link to="/">Rooms</router-link></li>
                    <li class="mx-4 hover:text-pink-500"><router-link to="/">Services</router-link></li>
                    <li class="mx-4 hover:text-pink-500"><router-link to="/">About Us</router-link></li>
                    <li class="mx-4 hover:text-pink-500"><router-link to="/">Contact Us</router-link></li>
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
            <ul v-if="openNav === true" class="bg-white text-black lg:flex text-lg mx-12 pt-2 mt-12  pl-2 pb-4 font-semibold">
                    <li class="my-1"><router-link to="/">Home</router-link></li>
                    <li class="my-1"><router-link to="/">Rooms</router-link></li>
                    <li class="my-1"><router-link to="/">Services</router-link></li>
                    <li class="my-1"><router-link to="/">About Us</router-link></li>
                    <li class="my-1"><router-link to="/">Contact Us</router-link></li>
                    <!-- <li class="mx-4"><a href="#">07019035442</a></li> -->
                    <li class="bg-pink-500 h-10 pt-1 rounded-sm w-28 text-center text-white font-normal mt-2 cursor-pointer"><router-link to="/book">Book Now</router-link></li>
            </ul>
        </div>
</template>

<script setup>
// vue import
import {ref} from 'vue';

const openNav = ref(false)

const setOpenNav = () => {
    openNav.value = !openNav.value
}
</script>