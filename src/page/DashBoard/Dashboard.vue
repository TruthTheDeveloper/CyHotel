<template>
    <Navbar/>
    <section class="my-12">
        <div class="flex justify-center my-10">
            <h1 class="text-3xl text-center font-semibold">Confirm and pay</h1>
        </div>
        <div class="flex flex-col md:flex-row w-10/12 mx-auto ">
            <form class="xl:mx-12 md:mx-4 border-2">
                <h1 class="m-5 font-semibold">Your Details </h1>
                <div class="flex flex-col xl:flex-row mx-5">
                    <select class="xl:w-16 w-full mb-5 xl:mb-0  py-2  border-pink-500 border pl-2 placeholder:text-sm outline-none   rounded-sm" placeholder="Mr">
                        <option>Mr</option>
                        <option>Mrs</option>
                        <option>Miss</option>
                        <option>Chief</option>
                        <option>Dr</option>
                        <option>Engr</option>
                        <option>Senator</option>
                        <option>Arch</option>
                        <option>Barr</option>
                    </select>
                    <input class="border-pink-500 border mb-5 xl:mb-0 xl:mx-5  py-2  pl-2 placeholder:text-sm outline-none  rounded-sm" placeholder="First Name"/>
                    <input class="border-pink-500 border  py-2 pl-2 placeholder:text-sm outline-none  rounded-sm" placeholder="Last Name"/>
                </div>
                <div class="flex flex-col xl:flex-row my-6 mx-5">
                    <div class="border-pink-500 border w-full  mb-5 xl:mb-0">
                        <vue-tel-input class="h-full border-pink-500 border" v-model="phone"></vue-tel-input>
                    </div>
                    <input class="border-pink-500 border py-2 pl-2 xl:ml-8 placeholder:text-sm outline-none rounded-sm" placeholder="Email"/>
                </div>
                <div class="flex text-sm mx-5 md:mx-0">
                    <input class="border-pink-500 border mt-1 md:mx-3 lg:mx-5 mr-2" type="checkbox"/>
                    <p>i'm Making this reservation on behalf of someone else </p>
                </div>
                <div class="m-5">
                    <textarea class="border-pink-500 border w-full h-32 rounded-sm placeholder:p-5 placeholder:text-sm outline-none pl-2 pt-2" placeholder="Enter additional request"/>
                </div>
                <div class="flex mx-5 my-5">
                    <i class="fa-solid fa-gift text-pink-500 pt-1 mx-1"></i>
                    <p class="text-pink-500 cursor-pointer">Add Discount Code</p>
                </div>
                <div class="bg-pink-200 py-8 mx-5 mb-5 rounded-md hidden">
                    <input class=" border w-9/12 ml-12 py-2 border-slate-400 rounded-md outline-none rounde-md border pl-2 placeholder:pl-3" placeholder="Enter Code"/>
                    <button class="px-10 py-2 bg-pink-500 text-white mx-auto flex my-8 rounded-md">Apply Discount</button>
                </div>
                <div class="flex flex-col xl:flex-row justify-between text-white mx-5">
                    <input type="number" v-model.number="amount" />
                    <button class="bg-pink-500 my-3 md:py-4 py-2 px-4 md:px-6  rounded-md">Pay at Hotel</button>
                    <button class="bg-pink-500 my-3 md:py-4 py-2 px-4 md:px-12  rounded-md" @click="makePayment">Pay Now</button>
                </div>
                <div class="lg:w-96 text-xs  bg-pink-200  my-12 mx-5 xl:mx-auto">
                    <p class="p-5">We use your personal data to process services that you have applied for, to contact you with newsletters and deal offers, and for personalised content and ads. You consent to our Data Policy if you click the above. You can withdraw consent and contact our Data Protection Officer at any time.</p>
                </div>
            </form>
            <div class=" lg:mx-12 md:mx-4 mt-12 md:mt-0 shadowx-xl border-2 p-5  h-3/6">
                <div class="flex flex-col xl:flex-row justify-center">
                    <div>
                        <img src="../../assets/images/room3.jpg" class="w-full xl:w-56 h-full mx-auto"/>
                    </div>
                    <div class="mt-5 xl:mx-5">
                        <p class="font-semibold">Duplex Room</p>
                        <p>Semi double bed 1 guest room 3 windows</p>
                    </div>
                </div>
                <div class="flex  justify-between my-12 border-2 border-pink-500 p-5 rounded-md">
                    <div class=" my-2">
                        <h1 class="font-semibold my-1">Check In</h1>
                        <p class="my-2 text-sm"><i class="fa-solid fa-calendar text-pink-500 pr-2"></i> Mon,2 May 2022 </p>
                        <p class="my-2 text-sm"><i class="fa-regular fa-clock text-pink-500 pr-2"></i>12:00PM</p>
                    </div>
                    <div class=" my-2">
                        <h1 class="font-semibold my-1">Check out</h1>
                        <p class="my-2 text-sm"><i class="fa-solid fa-calendar text-pink-500 pr-2"></i> Mon,2 May 2022 </p>
                        <p class="my-2 text-sm"><i class="fa-regular fa-clock text-pink-500 pr-2"></i>12:00PM</p>
                    </div>
                </div>
                <div class="flex flex-col xl:flex-row my-12 border-2 border-pink-500  rounded-md px-2 py-2">
                    <p class="text-sm pt-1">1 Rooms</p>
                    <p class="text-sm pt-1 xl:mx-auto">1 Guest</p>
                    <p class="text-sm pt-1">1 Night</p>
                    <button class="py-1 px-6 border text-sm border-black my-3 xl:my-0 mx-auto sm:ml-auto">change</button>
                </div>
                <div class="flex justify-between p-5 bg-pink-100">
                    <p class=" font-semibold">Total</p>
                    <p class="text-2xl font-semibold">80$</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import Navbar from '../../components/Navbar.vue';
import {ref} from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter()
const phone = ref('')
const amount = ref(200)

const payAtHotelButtonHandler = () => {
    router.push('/reservation')
}

const makePayment = () => {
      this.$launchFlutterwave({
        tx_ref: Date.now(),
        amount: this.amount,
        currency: 'NGN',
        payment_options: 'card,mobilemoney,ussd',
        customer: {
          email: 'user@gmail.com',
          phonenumber: '08102909304',
          name: 'yemi desola'
        },
        callback: function(data) {
          // specified callback function
          console.log(data)
        },
        customizations: {
          title: 'My store',
          description: 'Payment for items in cart',
          logo: 'https://assets.piedpiper.com/logo.png'
        }
      })
    }
  }

const payNowButtonHandler = () => {
    router.push('/reservation')
}
</script>