<template>
    <section class="my-12 mx-10">
        <div class="flex justify-center">
            <div>
                <h1 class="text-center text-xl font-bold">Management Dashboard</h1>
                <div class="flex my-10 w-full  mx-16">
                    <input class="border border-pink-500 outline-none rounded-md w-full pl-2 placeholder:text-sm" placeholder="Fullname phoneNumber email"/>
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
        <user-detail :reservationDetail="storeState"/>
        <user-detail/>
        <user-detail/>
        
        <user-detail/>
    </section>
</template>
<script setup>
import UserDetail from '../../components/UserDetail.vue';
import {computed, onMounted} from 'vue';

//vuex import
import {useStore} from 'vuex';

//vuex state
const store = useStore();

const storeState = computed(() => store.state.auth.allReservation)


onMounted(()=>{
   store.dispatch('auth/getUsersReservation')
});


</script>