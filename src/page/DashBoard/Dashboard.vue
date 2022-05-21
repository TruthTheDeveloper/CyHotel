<template>
    <Navbar/>
    <section class="my-12">
        <div class="flex justify-center my-10">
            <h1 class="text-3xl text-center font-semibold">Confirm and pay</h1>
        </div>
        <div class="flex flex-col md:flex-row w-10/12 mx-auto ">
            <div class="xl:mx-12 md:mx-4 border-2">
                <h1 class="m-5 font-semibold">Your Details </h1>
                <div class="flex flex-col xl:flex-row mx-5">
                    <div>
                        <select class="xl:w-16 w-full mb-5 xl:mb-0  py-2  border-pink-500 border pl-2 placeholder:text-sm outline-none   rounded-sm" placeholder="Mr" value="Mr" @input="(e) => titleNameValidationError = '' " v-model="title">
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
                    <p class="text-red-500 text-xs text-center">{{titleValidationError}}</p>
                    </div>
                    <div>
                        <input class="border-pink-500 border mb-5 xl:mb-0 xl:mx-5  py-2  pl-2 placeholder:text-sm outline-none  rounded-sm" placeholder="First Name" v-model="firstName" @input="(e) => firstNameValidationError = '' "/>
                        <p class="text-red-500 text-xs text-center">{{firstNameValidationError}}</p>
                    </div>
                    <div>
                        <input class="border-pink-500 border  py-2 pl-2 placeholder:text-sm outline-none  rounded-sm" placeholder="Last Name" v-model="lastName" @input="(e) => lastNameValidationError = '' "/>
                        <p class="text-red-500 text-xs text-center">{{lastNameValidationError}}</p>
                    </div>
                </div>
                <div class="flex flex-col xl:flex-row my-6 mx-5">
                    <div class="border-pink-500 border w-full  mb-5 xl:mb-0">
                        <vue-tel-input class="h-full border-pink-500 border" v-model="phone"  @input="(e) => phoneValidationError = '' "></vue-tel-input>
                        <p class="text-red-500 text-xs text-center">{{emailValidationError}}</p>
                    </div>
                    <div>
                        <input class="border-pink-500 border py-2 pl-2 xl:ml-8 placeholder:text-sm outline-none rounded-sm" placeholder="Email" v-model="email" @input="(e) => emailValidationError = '' "/>
                        <p class="text-red-500 text-xs text-center">{{emailValidationError}}</p>
                    </div>
                </div>
                <div class="flex text-sm mx-5 md:mx-0">
                    <input class="border-pink-500 border mt-1 md:mx-3 lg:mx-5 mr-2" type="checkbox"/>
                    <p>i'm Making this reservation on behalf of someone else </p>
                </div>
                <div class="my-6 hidden">
                    <div class="flex flex-col xl:flex-row mx-5">
                    <select class="xl:w-16 w-full mb-5 xl:mb-0  py-2  border-pink-500 border pl-2 placeholder:text-sm outline-none   rounded-sm" placeholder="Mr" value="" v-model="title">
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
                    <input class="border-pink-500 border mb-5 xl:mb-0 xl:mx-5  py-2  pl-2 placeholder:text-sm outline-none  rounded-sm" placeholder="First Name" v-model="firstName" @input="(e) => firstNameValidationError = '' "/>
                    <input class="border-pink-500 border  py-2 pl-2 placeholder:text-sm outline-none  rounded-sm" placeholder="Last Name" v-model="lastName"/>
                    </div>
                    <div class="flex flex-col xl:flex-row my-6 mx-5">
                        <div class="border-pink-500 border w-full  mb-5 xl:mb-0">
                            <vue-tel-input class="h-full border-pink-500 border" v-model="phone"></vue-tel-input>
                        </div>
                        <input class="border-pink-500 border py-2 pl-2 xl:ml-8 placeholder:text-sm outline-none rounded-sm" placeholder="Email" v-model="email" @input="(e) => emailValidationError = '' "/>
                    </div>
                </div>
                <div class="m-5">
                    <textarea class="border-pink-500 border w-full h-32 rounded-sm placeholder:p-5 placeholder:text-sm outline-none pl-2 pt-2" placeholder="Enter additional request" />
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
                    <button class="bg-pink-500 my-3 md:py-4 py-2 px-4 md:px-6  rounded-md" @click.prevent="payAtHotelButtonHandler()">Pay at Hotel</button>

                    <button class="bg-pink-500 my-3 md:py-4 py-2 px-4 md:px-12 text-white rounded-md">
                        <paystack
                        @click.prevent=""
                        buttonClass="''"
                        buttonText="Pay Online"
                        :publicKey="publicKey"
                        :email="email"
                        :amount="amount"
                        :reference="reference"
                        :onSuccess="onSuccessfulPayment"
                        :onCancel="onCancelledPayment">
                        </paystack>
                    </button>
                    
                </div>
                 <!-- class="bg-pink-500 my-3 md:py-4 py-2 px-4 md:px-12  rounded-md" -->
                <div class="lg:w-96 text-xs  bg-pink-200  my-12 mx-5 xl:mx-auto">
                    <p class="p-5">We use your personal data to process services that you have applied for, to contact you with newsletters and deal offers, and for personalised content and ads. You consent to our Data Policy if you click the above. You can withdraw consent and contact our Data Protection Officer at any time.</p>
                </div>
            </div>
            <div class=" lg:mx-12 md:mx-4 mt-12 md:mt-0 shadowx-xl border-2 p-5  h-3/6">
                <div class="flex flex-col xl:flex-row justify-center">
                    <div>
                        <img :src="storeState.roomImage" class="w-full xl:w-56 h-full mx-auto"/>
                    </div>
                    <div class="mt-5 xl:mx-5">
                        <p class="font-semibold">{{storeState.roomType}}</p>
                        <p>{{storeState.roomDescription}}</p>
                    </div>
                </div>
                <div class="flex  justify-between my-12 border-2 border-pink-500 p-5 rounded-md">
                    <div class=" my-2">
                        <h1 class="font-semibold my-1">Check In</h1>
                        <p class="my-2 text-sm"><i class="fa-solid fa-calendar text-pink-500 pr-2"></i>{{storeCheckIn.getDate()}} {{month[storeCheckIn.getMonth()]}}</p>
                        <p class="my-2 text-sm"><i class="fa-regular fa-clock text-pink-500 pr-2"></i>12:00PM</p>
                    </div>
                    <div class=" my-2">
                        <h1 class="font-semibold my-1">Check out</h1>
                        <p class="my-2 text-sm"><i class="fa-solid fa-calendar text-pink-500 pr-2"></i>{{storeCheckOut.getDate()}} {{month[storeCheckOut.getMonth()]}}</p>
                        <p class="my-2 text-sm"><i class="fa-regular fa-clock text-pink-500 pr-2"></i>12:00PM</p>
                    </div>
                </div>
                <div class="flex flex-col xl:flex-row my-12 border-2 border-pink-500  rounded-md px-2 py-2">
                    <p class="text-sm pt-1">1 Rooms</p>
                    <p class="text-sm pt-1 xl:mx-auto">{{storeGuest}} guests</p>
                    <p class="text-sm pt-1">1 Night</p>
                    <button class="py-1 px-6 border text-sm border-black my-3 xl:my-0 mx-auto sm:ml-auto" @click="changeButtonHandler">change</button>
                </div>
                <div class="flex justify-between p-5 bg-pink-100">
                    <p class=" font-semibold">Total</p>
                    <p class="text-xl font-semibold">{{storeState.roomPrice}}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import Navbar from '../../components/Navbar.vue';
import {ref, computed} from 'vue';
import { useRouter } from 'vue-router';
import {useStore} from 'vuex';

//Paystack libary
import paystack from "vue3-paystack";

//Toast Notification
import { useToast } from "vue-toastification";



/// AMIXTURE OF BOTH COMPOSITION AND OPRION API

export default {
    components: {
    paystack,
    Navbar
  },
  
    setup(){
        // const toast = useToast()
        const router = useRouter();
        const store = useStore();
        const phone = ref('070190354442');
        const phoneValidationError = ref('');
        const title = ref('');
        const titleValidationError = ref('');
        const firstName = ref('');
        const firstNameValidationError = ref('');
        const lastName = ref('');
        const lastNameValidationError = ref('');
        const email = ref('');
        const emailValidationError = ref('');
        

        const storeState = computed(() => store.state.rooms.roomData);
        const storeCheckIn = computed(() => store.state.rooms.checkIn);
        const storeCheckOut = computed(() => store.state.rooms.checkOut);
        const storeGuest = computed(() => store.state.rooms.guest);

        const amount = ref(storeState.value.roomPrice);
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

        const payAtHotelButtonHandler = () => {
            title.value === "" ? titleValidationError.value = 'please selectTitle' : null;
            email.value === "" ? emailValidationError.value = "please input email" : null;
            lastName.value === "" ? lastNameValidationError.value = "please input last name" : null;
            firstName.value === "" ? firstNameValidationError.value = "please input first name" : null;
            phone.value === "" ? phoneValidationError.value = "please input phone number" : null;

            !titleValidationError.value && 
            !emailValidationError.value && 
            !lastNameValidationError.value &&
            !firstNameValidationError.value &&
            store.dispatch('rooms/bookRoom',{title, firstName, lastName, email, phone, storeCheckIn, storeCheckOut}) &&
            router.push('/reservation')
            
        }

        const changeButtonHandler = () => {
            router.push('/book')
        }
        return{
            phoneValidationError,
            phone,
            title,
            titleValidationError,
            firstName,
            lastName,
            firstNameValidationError,
            lastNameValidationError,
            email,
            emailValidationError,
            storeState,
            storeCheckIn,
            storeCheckOut,
            storeGuest,
            month,
            payAtHotelButtonHandler,
        }
    },
    data() {
    return{
        publicKey:'pk_test_5899c5730c6a69c33fc4ff3e4902a20a9508cd49',
        amount:1000, //Expressed in lowest demonitation, so 1000kobo is equivalent to 10Naira
        gmail:'somteacodes@gmail.com',
        firstname:'Somtea', //optional field remember to pass as a prop of firstname if needed
        lastname:'Codes',
        router:useRouter(),//optional field remember to pass as a prop of lastname if needed
        toast:useToast()
    }
  },
  computed: {
    reference: function() {
        // if using nanoid to generate randomRef
        // comment this out if not using nano id
    //   return nanoid(15);

    //   you can use plain JS to generate random ref ID, just uncomment this section if you

        let randomRef = "";
        let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for( let i=0; i < 15; i++ )
          randomRef += characters.charAt(Math.floor(Math.random() * characters.length));

        return randomRef;

    },
    price:function(){
        return this.$store.state.rooms.roomData.roomPrice
    }
  },
    methods: {
    successToastNotification:function(response){
    this.toast.success('payment successfull please lodge at the checkin date', {
        timeout: 4000
    })
    this.router.push('/')
    },
    errorToastNotification:function(response){
    this.toast.error('payment was unsuccessful', {
        timeout: 4000
        })
    },
    onSuccessfulPayment: function(response) {
      console.log(response, 'succefull');
    //   this.router.push('/reservation')
      this.successToastNotification()
    },
    onCancelledPayment: function() {
      console.log("Payment cancelled by user");
      this.errorToastNotification()
    },
    
  },
}

</script>