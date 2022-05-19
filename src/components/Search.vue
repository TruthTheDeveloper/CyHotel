<template>
    <div class="flex justify-center lg:mt-24 mt-12  mx-3 md:mx-auto flex-col md:flex-row">
        <v-date-picker class="" v-model="date" :min-date="date" :value="null" color="pink">
            <template v-slot="{  togglePopover }">
                <div class="bg-white px-8 md:px-5 py-3 border flex">
                    <i class="fa-solid fa-user-check text-pink-500 text-2xl mt-5 md:pl-2"></i>
                    <div class="mx-2 pb" >
                        <p class="font-semibold mb-1 md:pb-1 lg:pb-0  lg:mb-2">CHECK IN</p>
                        <h1 class="font-bold text-2xl " @click="togglePopover()">{{date.getDate()}}<span class="text-slate-500 font-normal text-base pl-2">{{month[date.getMonth()]}}</span><i class="fa-solid font-ligh  ml-2 text-base fa-angle-down cursor-pointer" ></i></h1>
                    </div>
                </div>
            </template>
        </v-date-picker>
        <v-date-picker class="" v-model="date2" :min-date="date" :value="null" color="pink">
            <template v-slot="{ togglePopover }">
                <div class="bg-white px-8 py-3 md:px-5 border flex">
                    <i class="fa-solid fa-user-xmark text-pink-500 text-2xl mt-5"></i>
                    <div class="mx-2">
                        <p class="font-semibold mb-2">CHECK OUT</p>
                        <h1 class="font-bold text-2xl"  @click="togglePopover()">{{date2.getDate()}}<span class="text-slate-500 font-normal text-base pl-2">{{month[date2.getMonth()]}}</span><i class="fa-solid font-light  ml-2 text-base fa-angle-down cursor-pointer" ></i></h1>
                    </div>
                </div>
            </template>
        </v-date-picker>
        <div class="bg-white px-8 py md:px-5 border flex">
            <i class="fa-solid fa-users text-pink-500 text-2xl mt-5"></i>
            <div class="mx-2">
                <p class="font-semibold">GUESTS</p>
                <h1 class="font-bold text-2xl text-center" >{{guest}}<span class="text-slate-500 font-normal text-base pl-2"></span></h1>
                <div class="flex">
                    <div @click="decrementGuest()">
                    <i class="fa-solid font-light  ml-2 text-base fa-angle-down cursor-pointer" ></i>
                    </div>
                    <div @click="incrementGuest()">
                        <i class="fa-solid font-light  ml-2 text-base fa-angle-up cursor-pointer" ></i>
                    </div>
                </div>
                <!-- <div class="flex">
                    
                </div> -->
            </div>
        </div>
        <div class=" px-8 py-3 bg-pink-500 text-white  text-center cursor-pointer md:pt-5 font-semibold" @click="checkAvailable()">
            Check<br/> Availablity
        </div>
    </div> 
</template>
<script setup>
import {ref, watchEffect, computed} from 'vue';
import {useStore} from 'vuex';
import {useRouter} from 'vue-router';

const store = useStore();

const router = useRouter();

//guest ref
const guest = ref(1);

const incrementGuest = () => {
    guest.value += 1

    store.commit('rooms/setGuest', guest.value)
    
};


const decrementGuest = () => {
    if(guest.value !==0){
        guest.value -= 1
        store.commit('rooms/setGuest', guest.value)
    };
};

const checkAvailable = () => {
    console.log('clicked')
    router.push('/book')
};

// Date Ref
const date = ref(new Date())
const date2 = ref(new Date())
// const setdate2 = computed(() => date)




const month = ref(new Array());
month.value[0] = "January";
month.value[1] = "February";
month.value[2] = "March";
month.value[3] = "April";
month.value[4] = "May";
month.value[5] = "June";
month.value[6] = "July";
month.value[7] = "August";
month.value[8] = "September";
month.value[9] = "October";
month.value[10] = "November";
month.value[11] = "December";


watchEffect(() => {
    store.commit('rooms/checkInMutation', date.value)
    store.commit('rooms/checkOutMutation', date2.value)
})
</script>