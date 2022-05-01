<template>
    <section class="">
        <div class="pb-12 bg-slate-400 mb-6">
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
                    <input
                        :value="inputValue"
                        class="hidden"
                        readonly
                        />
                    <div class=" px-8 py-3 bg-pink-500 text-white  text-center cursor-pointer md:pt-5 font-semibold">
                    
                        Check<br/> Availablity
                    </div>
                </div>    
        <h1 class="text-center font-bold text-xl lg:text-3xl py-16">Select and book from the 220 rooms available</h1>
        <div class="flex flex-col md:flex-row border-2 shadow-xl mx-3 my-12 md:mx-12 xl:w-8/12 lg:w-7/12 lg:mx-auto">
            <div class="p-5 h-80">
                <img src="../assets/images/room8.jpg" class="w-full h-full" />
            </div>
            <div class="py-6 pb-2 pl-4 m-2">
                <h1 class="text-xl font-semibold py-2">Duplex Room</h1>
                <p class="py-2">Semi double bed 1 guest room 3 windows</p>
                <p>$50/night</p>
                <button class="bg-pink-500 my-5 px-6 py-3 text-white">Book Now</button>
            </div>
        </div>
        <div class="flex flex-col md:flex-row border-2 shadow-xl mx-3 my-12 md:mx-12 xl:w-8/12 lg:w-7/12 lg:mx-auto">
            <div class="p-5 h-80">
                <img src="../assets/images/room8.jpg" class="w-full h-full" />
            </div>
            <div class="py-6 pb-2 pl-4 m-2">
                <h1 class="text-xl font-semibold py-2">Duplex Room</h1>
                <p class="py-2">Semi double bed 1 guest room 3 windows</p>
                <p>$50/night</p>
                <button class="bg-pink-500 my-5 px-6 py-3 text-white">Book Now</button>
            </div>
        </div>
        <div class="flex flex-col md:flex-row border-2 shadow-xl mx-3 my-12 md:mx-12 xl:w-8/12 lg:w-7/12 lg:mx-auto">
            <div class="p-5 h-80">
                <img src="../assets/images/room8.jpg" class="w-full h-full" />
            </div>
            <div class="py-6 pb-2 pl-4 m-2">
                <h1 class="text-xl font-semibold py-2">Duplex Room</h1>
                <p class="py-2">Semi double bed 1 guest room 3 windows</p>
                <p>$50/night</p>
                <button class="bg-pink-500 my-5 px-6 py-3 text-white">Book Now</button>
            </div>
        </div>
        <div class="flex flex-col md:flex-row border-2 shadow-xl mx-3 my-12 md:mx-12 xl:w-8/12 lg:w-7/12 lg:mx-auto">
            <div class="p-5 h-80">
                <img src="../assets/images/room8.jpg" class="w-full h-full" />
            </div>
            <div class="py-6 pb-2 pl-4 m-2">
                <h1 class="text-xl font-semibold py-2">Duplex Room</h1>
                <p class="py-2">Semi double bed 1 guest room 3 windows</p>
                <p>$50/night</p>
                <button class="bg-pink-500 my-5 px-6 py-3 text-white">Book Now</button>
            </div>
        </div>
        <div class="flex flex-col md:flex-row border-2 shadow-xl mx-3 my-12 md:mx-12 xl:w-8/12 lg:w-7/12 lg:mx-auto">
            <div class="p-5 h-80">
                <img src="../assets/images/room8.jpg" class="w-full h-full" />
            </div>
            <div class="py-6 pb-2 pl-4 m-2">
                <h1 class="text-xl font-semibold py-2">Duplex Room</h1>
                <p class="py-2">Semi double bed 1 guest room 3 windows</p>
                <p>$50/night</p>
                <button class="bg-pink-500 my-5 px-6 py-3 text-white">Book Now</button>
            </div>
        </div>
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
            <button class="bg-pink-500 py-4 px-6 mx-2 rounded-md rounded-md">Last</button>
        </div>
    </section>
</template>

<script setup>
import AboutUs from './components/AboutUs.vue';
import Services from './components/Services.vue';
import Rooms from './components/Rooms.vue';
import Credit from './components/Credit.vue';
import Testimonial from './components/Testimonial.vue';
import Explore from './components/Explore.vue';
import Footer from './../components/Footer.vue';


import {ref, watch} from 'vue';

const openNav = ref(false)

const setOpenNav = () => {
    openNav.value = !openNav.value
}
//guest ref
const guest = ref(1)

const incrementGuest = () => {
    guest.value += 1
}


const decrementGuest = () => {
    if(guest.value !==0){
        guest.value -= 1
    }
}


// const bookButtonHandler = () => {

//     $router.push()
// }

// Date Ref
const date = ref(new Date())
const date2 = ref(new Date())

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



</script>