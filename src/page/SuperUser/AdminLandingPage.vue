<template>
    <section class="">
        <navbar/>
        <h1 class="text-center font-bold text-xl lg:text-3xl py-16">Available rooms</h1>
        <button class="bg-pink-500 py-2 px-6 text-white flex mx-auto text-lg rounded-md" @click="routeAddroomPage">Add Room</button>
        <booking-card :roomList="storeState" buttonText="Update"/>
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
import Navbar from '../../components/Navbar.vue';
import BookingCard from '../../components/BookingCard.vue';

import {useRouter} from "vue-router";

import {computed, onMounted} from 'vue'
//vuex import
import {useStore} from 'vuex';

//vuex state
const store = useStore();

const router = useRouter()

const routeAddroomPage = () => {
    router.push('/admin/create/roomform')
}

const storeState = computed(() => store.state.rooms.allRooms)

storeState.value.map(el => console.log(el.room_type, 'el'))

///////////////MOUNT/////////
onMounted(() => {
  store.dispatch('rooms/getRooms')
});
</script>