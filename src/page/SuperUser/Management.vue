<template>
    <section class="my-12 mx-10">
        <div class="flex justify-center">
            <div>
                <h1 class="text-center text-xl font-bold">Management Dashboard</h1>
                <div class="flex my-10 w-full  mx-16">
                    <input class="border border-pink-500 outline-none rounded-md w-full pl-2 placeholder:text-sm" placeholder="fullname phoneNumber email"/>
                    <button class="bg-black text-white py-2 px-5 mx-5 rounded-md">Search</button>
                </div>
            </div>
        </div>
        <div class="grid grid-cols-7 mx-auto w-full">
            <div class="text-center border border-pink-500 p-5 font-semibold">FullName</div>
            <div class="text-center border border-pink-500 p-5 font-semibold">Phonenumber</div>
            <div class="text-center border border-pink-500 p-5 font-semibold">Email</div>
            <div class="text-center border border-pink-500 p-5 font-semibold">CheckIn</div>
            <div class="text-center border border-pink-500 p-5 font-semibold">CheckOut</div>
            <div class="text-center border border-pink-500 p-5 font-semibold">Payment Status</div>
            <div class="text-center border border-pink-500 p-5 font-semibold">Conform user lodge</div>
        </div>
        <user-detail/>
        <user-detail/>
        <user-detail/>
        <div class="grid grid-cols-7 w-full mx-auto">
            <div class="text-center border border-pink-500 p-2 text-sm">Henry Truth</div>
            <div class="text-center border border-pink-500 p-2 text-sm">07019035442</div>
            <div class="text-center border border-pink-500 p-2 text-xs">henrysempire111@gmail.com</div>
            <div class="text-center border border-pink-500 p-2 text-sm">4th may 2022</div>
            <div class="text-center border border-pink-500 p-2 text-sm">5th may 2022</div>
            <div class="text-center border border-pink-500 p-2 text-sm">Reservation</div>
            <div class="text-center border border-pink-500 p-2 text-sm"><button class="bg-pink-500 py-2 px-4 text-white rounded-md">confirm</button></div>
        </div>
        <user-detail/>
    </section>
</template>
<script setup>
import UserDetail from '../../components/UserDetail.vue';
</script>