<template>
    <section class="">
        <navbar/>
        <h1 class="text-center font-bold text-xl lg:text-3xl py-16">Select and book from the 220 rooms available</h1>
        <booking-card :roomList="storeState" buttonText="Book Now"/>
    
        <div  class="flex justify-center text-white">
            <button v-if="!storeLastPage" class="bg-pink-500 py-4 px-8 mx-2 rounded-md" @click="getNextPage(storePageNum)">Load More</button>
            <p v-else class="text-black font-semibold text-lg">No More rooms....</p>
        </div>
    </section>
</template>

<script setup>

import Navbar from '../components/Navbar.vue';
import BookingCard from '../components/BookingCard.vue';
import Search from '../components/Search.vue';

//Vue js import
import {ref, onMounted, computed} from 'vue';

//vuex import
import {useStore} from 'vuex';

//vuex state
const store = useStore();

const openNav = ref(false);


////METHOD////
const setOpenNav = () => {
    openNav.value = !openNav.value
};
//guest ref
const guest = ref(1);

const incrementGuest = () => {
    guest.value += 1
};

const getNextPage = (num) => {
    store.dispatch('rooms/nextPage', num)
};

const decrementGuest = () => {
    if(guest.value !==0){
        guest.value -= 1
    };
};


///COMPUTED///
const storePageNum = computed(() => store.state.rooms.pageNum)
const storeState = computed(() => store.state.rooms.allRooms)
const storeLastPage = computed(() => store.state.rooms.lastPage)



///MAP THE URL RESPONSE TO THE UI/////
storeState.value.map(el => console.log(el.room_type, 'el'))

///////////////MOUNT/////////
onMounted(() => {
  store.dispatch('rooms/getRooms', storePageNum.value)
});





</script>