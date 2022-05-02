<template>
<div class="pb-12 mb-6" style="background:#0D0206">
            <nav class="h-5 flex p-4 justify-between ">
                <h1 class="text-white text-2xl md:text-3xl lg:text-4xl font-extrabold ">Cy-<span class="text-pink-500">hotel</span></h1>
                <ul v-if="openNav === false" class="text-white lg:flex text-lg mr-8 pt-2 hidden">
                    <li class="mx-4 hover:text-pink-500"><a href="#">Home</a></li>
                    <li class="mx-4 hover:text-pink-500"><a href="#">Rooms</a></li>
                    <li class="mx-4 hover:text-pink-500"><a href="#">Services</a></li>
                    <li class="mx-4 hover:text-pink-500"><a href="#">About Us</a></li>
                    <li class="mx-4 hover:text-pink-500"><a href="#">Contact Us</a></li>
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
                    <li class="my-1"><a href="#">Home</a></li>
                    <li class="my-1"><a href="#">Rooms</a></li>
                    <li class="my-1"><a href="#">Services</a></li>
                    <li class="my-1"><a href="#">About Us</a></li>
                    <li class="my-1"><a href="#">Contact Us</a></li>
                    <!-- <li class="mx-4"><a href="#">07019035442</a></li> -->
                    <li class="bg-pink-500 h-10 pt-1 rounded-sm w-28 text-center text-white font-normal mt-2 cursor-pointer">Book Now</li>
                </ul>
        </div>
    <form class=" my-12 xl:w-3/12 lg:w-4/12 md:w-6/12 mx-8 sm:mx-auto py-12 border border-pink-500 shadow-xl rounded-md">
        <h1 class="text-center font-semibold text-2xl">Sign Up</h1>
            <div class="my-1 px-3 py-2">
                <label>FullName</label>
                <input class="w-full py-2 border border-pink-500 outline-none pl-2"/>
            </div>
            <div class=" my-1 px-3 py-2">
                <label>Email</label>
                <input class="w-full py-2 border border-pink-500 outline-none pl-2"/>
            </div>
            <div class=" my-1 px-3 py-2">
                <label>Phone Number</label>
                <input class="w-full py-2 border border-pink-500 outline-none pl-2"/>
            </div>
            <div class=" my-1 px-3 py-2">
                <label>Password</label>
                <div v-if="!showPassword" class="flex border border-pink-500 ">
                    <input class="w-full py-2 outline-none pl-2" type="password" v-model="password"/>
                    <div @click="switchPassword()">
                        <i class="fas fa-eye-open m-1 text-black text-3xl cursor-pointer"></i>
                    </div>
                </div>
                <div v-else class="flex border border-pink-500 ">
                    <input class="w-full py-2 outline-none pl-2" type="text" v-model="password"/>
                    <div @click="switchPassword()">
                        <i class="fas fa-eye-open m-1 text-black text-3xl cursor-pointer"></i>
                    </div>
                </div>
            </div>
            <div class=" my-1 px-3 py-2">
                <label>Confirm Password</label>
                <div v-if="!showConfirmPassword" class="flex border border-pink-500 ">
                    <input class="w-full py-2 outline-none pl-2" type="password" v-model="confirmPassword"/>
                    <div @click="switchConfirmPassword()">
                        <i class="fa-solid fa-eye m-1 text-xl cursor-pointer text-pink-500 pt-2"></i>
                    </div>
                </div>
                <div v-else class="flex border border-pink-500 ">
                    <input class="w-full py-2 outline-none pl-2" type="text" v-model="confirmPassword"/>
                    <div @click="switchConfirmPassword()">
                        <i class="fas fa-eye-open m-1 text-black text-3xl cursor-pointer"></i>
                    </div>
                </div>
            </div>
            <button class="bg-pink-500 flex mx-auto py-4 mt-4 rounded-full text-white px-16">Register</button>
    </form>
</template>

<script setup>
import {ref} from 'vue';

const openNav = ref(false)

const setOpenNav = () => {
    openNav.value = !openNav.value
}

const showPassword = ref(false)
const showConfirmPassword = ref(false)

const password = ref('')
const confirmPassword = ref('')

const switchPassword = () => {
    showPassword.value = !showPassword.value
}

const switchConfirmPassword = () => {
    showConfirmPassword.value = !showConfirmPassword.value
}
</script>