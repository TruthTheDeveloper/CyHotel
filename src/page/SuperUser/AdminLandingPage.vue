<template>
    <section class="">
        <navbar/>
        <h1 class="text-center font-bold text-xl lg:text-3xl py-16">Available rooms</h1>
        <button class="bg-pink-500 py-2 px-6 text-white flex mx-auto text-lg rounded-md" @click="routeAddroomPage">Add Room</button>
        <div v-if="storeLoader" class="flex justify-center my-24">
            <half-circle-spinner
            :animation-duration="1000"
            :size="60"
            color="#EC4899"
            />
        </div>
        <booking-card :roomList="storeState" buttonText="Update"/>
        <div class="flex justify-center text-white">
            <button v-if="!storeLastPage" class="bg-pink-500 py-4 px-8 mx-2 rounded-md" @click="getNextPage(storePageNum)">Load More</button>
            <p v-else class="text-black font-semibold text-lg">No More rooms....</p>
        </div>
    </section>
</template>

<script setup>

///UI COMPONENT///
import Navbar from '../../components/Navbar.vue';
import BookingCard from '../../components/BookingCard.vue';

import {useRouter} from "vue-router";

import {computed, onMounted} from 'vue'
//vuex import
import {useStore} from 'vuex';

//loading spinner component
import { HalfCircleSpinner } from 'epic-spinners';

//vuex state
const store = useStore();

//route state
const router = useRouter()

//METHODS//
const routeAddroomPage = () => {
    console.log('route pushed')
    router.push('/admin/create/roomform')
}

const getNextPage = (num) => {
    store.dispatch('rooms/adminNextPage', num)
};

///VUEX STATE GETTERS//
const storePageNum = computed(() => store.state.rooms.adminPageNum)
const storeLastPage = computed(() => store.state.rooms.adminLastPage)
const storeState = computed(() => store.state.rooms.allRooms)
const storeLoader = computed(() => store.state.rooms.loading)

storeState.value.map(el => console.log(el.room_type, 'el'))

///////////////MOUNT/////////
onMounted(() => {
  store.dispatch('rooms/getAdminRooms', storePageNum.value)
});
</script>