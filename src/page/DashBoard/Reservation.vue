<template>
    <navbar/>
    <section class="my-12">
        <div class="xl:w-6/12 w-10/12 md:w-8/12 lg:w-7/12 border-2 border-pink-500 rounded-sm mx-auto text-center">
            <h1 class="font-semibold my-4 text-2xl">Your Reservation is been Processed</h1>
            <i class="fa-solid fa-circle-check text-green-500 text-6xl my-6"></i>
            <p class="my-4 font-semibold my-4">Thank you for booking with us</p>
            <p class="my-3">Your receive an email soon</p>
        </div>
    </section>
</template>

<script setup>
import Navbar from '../../components/Navbar.vue';
</script>