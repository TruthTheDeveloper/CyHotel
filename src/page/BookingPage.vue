<template>
    <section class="">
        <navbar/>
        <search/>
        <h1 class="text-center font-bold text-xl lg:text-3xl py-16">Select and book from the 220 rooms available</h1>
        <booking-card/>
        <booking-card/>
        <booking-card/>
        <booking-card/>
        <booking-card/>
        <div class="flex justify-center text-white">
            <button class="bg-pink-500 py-4 px-4 mx-2 rounded-md">Previous</button>
            <button class="border-2 text-black py-2 px-6 mx-2 rounded-md">1</button>
            <button class="bg-pink-500 py-2 px-6 mx-2 rounded-md">2</button>
            <button class="bg-pink-500 py-2 px-6 mx-2 rounded-md hidden sm:block">3</button>
            <button class="bg-pink-500 py-2 px-6 mx-2 rounded-md hidden md:block">4</button>
            <button class="bg-pink-500 py-2 px-6 mx-2 rounded-md hidden md:block">5</button>
            <button class="bg-pink-500 py-2 px-6 mx-2 rounded-md hidden xl:block">6</button>
            <button class="bg-pink-500 py-2 px-6 mx-2 rounded-md hidden xl:block">7</button>
            <button class="bg-pink-500 py-2 px-6 mx-2 rounded-md hidden xl:block">8</button>
            <button class="bg-pink-500 py-2 px-6 mx-2 rounded-md hidden xl:block">9</button>
            <button class="bg-pink-500 py-2 px-6 mx-2 rounded-md hidden xl:block">10</button>
            <button class="bg-pink-500 py-4 px-6 mx-2 rounded-md">Last</button>
        </div>
    </section>
</template>

<script setup>

import Navbar from '../components/Navbar.vue';
import BookingCard from '../components/BookingCard.vue';
import Search from '../components/Search.vue';


import {ref} from 'vue';

const openNav = ref(false);

const setOpenNav = () => {
    openNav.value = !openNav.value
};
//guest ref
const guest = ref(1);

const incrementGuest = () => {
    guest.value += 1
};


const decrementGuest = () => {
    if(guest.value !==0){
        guest.value -= 1
    };
};





</script>