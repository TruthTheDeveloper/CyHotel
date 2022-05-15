<template>
    <Navbar/>
    <form class=" my-12 xl:w-3/12 lg:w-4/12 md:w-6/12 mx-8 sm:mx-auto py-12 border border-pink-500 shadow-xl rounded-md">
        <h1 class="text-center font-semibold text-2xl">Sign Up</h1>
            <div class="my-1 px-3 py-2">
                <label>Username</label>
                <input class="w-full py-2 border border-pink-500 outline-none pl-2" v-model="username" @input="(e) => usernameValidationError = '' "/>
                <p class="text-red-500 text-sm">{{usernameValidationError}}</p>
            </div>
            <div class=" my-1 px-3 py-2">
                <label>Email</label>
                <input class="w-full py-2 border border-pink-500 outline-none pl-2" v-model="email" @input="(e) => emailValidationError = '' "/>
                <p class="text-red-500 text-sm">{{emailValidationError}}</p>
            </div>
            <div class=" my-1 px-3 py-2">
                <label>Phone Number</label>
                <input class="w-full py-2 border border-pink-500 outline-none pl-2" v-model="phoneNumber" @input="(e) => phoneNumberValidationError = '' " type="number"/>
                <p class="text-red-500 text-sm">{{phoneNumberValidationError}}</p>
            </div>
            <div class=" my-1 px-3 py-2">
                <label>Password</label>
                <div v-if="!showPassword" class="flex border border-pink-500 ">
                    <input class="w-full py-2 outline-none pl-2" type="password" v-model="password" @input="(e) => passwordValidationError = '' "/>
                    <div @click="switchPassword()">
                        <i class="fa-solid fa-eye m-1 text-xl text-pink-500  cursor-pointer pt-2"></i>
                    </div>
                </div>
                <div v-else class="flex border border-pink-500 ">
                    <input class="w-full py-2 outline-none pl-2" type="text" v-model="password" @input="(e) => passwordValidationError = '' "/>
                    <div @click="switchPassword()">
                        <i class="fa-solid fa-eye-slash m-1 text-xl text-pink-500  cursor-pointer pt-2"></i>
                    </div>
                </div>
                <p class="text-red-500 text-sm">{{passwordValidationError}}</p>
            </div>
            <div class=" my-1 px-3 py-2">
                <label>Confirm Password</label>
                <div v-if="!showConfirmPassword" class="flex border border-pink-500 ">
                    <input class="w-full py-2 outline-none pl-2" type="password" v-model="confirmPassword"  @input="(e) => confirmPasswordValidationError = '' "/>
                    <div @click="switchConfirmPassword()">
                        <i class="fa-solid fa-eye m-1 text-xl cursor-pointer text-pink-500 pt-2"></i>
                    </div>
                </div>
                <div v-else class="flex border border-pink-500 ">
                    <input class="w-full py-2 outline-none pl-2" type="text" v-model="confirmPassword" @input="(e) => confirmPasswordValidationError = '' " />
                    <div @click="switchConfirmPassword()">
                        <i class="fa-solid fa-eye-slash m-1  text-xl text-pink-500  cursor-pointer pt-2"></i>
                    </div>
                </div>
                <p class="text-red-500 text-sm">{{confirmPasswordValidationError}}</p>
            </div>
            <button class="bg-pink-500 flex mx-auto py-4 mt-4 rounded-full text-white px-16" @click.prevent="registerSubmitHandler()">Register</button>
            <h1 class="text-pink-500 pt-5 text-center">Already have an account, <a class="underline"><router-link to="login">Login</router-link></a></h1>
    </form>
</template>


<script setup>
//Component
import Navbar from '../../components/Navbar.vue';

//Vue js import
import {ref, computed, watch} from 'vue';

//vuex import
import {useStore} from 'vuex';

// route
import { useRouter } from 'vue-router';
const router = useRouter()

//Local state
const showPassword = ref(false);
const showConfirmPassword = ref(false);

const username = ref('');
const usernameValidationError = ref('');

const email = ref('');
const emailValidationError = ref('');

const phoneNumber = ref('');
const phoneNumberValidationError = ref('');

const password = ref('');
const passwordValidationError = ref('');

const confirmPassword = ref('');
const confirmPasswordValidationError = ref('');

//vuex state
const store = useStore();

//methods
const switchPassword = () => {
    showPassword.value = !showPassword.value
};

const switchConfirmPassword = () => {
    showConfirmPassword.value = !showConfirmPassword.value
};

//computed propertis to check email validity
const isEmailValid = computed(() => email.value.includes('@') && email.value.includes('.')
);

const lowerCaseEmail = computed(() => email.value.toLowerCase())



//get global state through computed properties
const storeState = computed(() => store.state.auth.statusCode)


//watcher
watch(storeState, (newVal,oldVal) => {
    if(newVal === 201){
        router.push('/login')
    }
    console.log(newVal, oldVal)
});



// submit button handler
const registerSubmitHandler = () => {
    console.log(lowerCaseEmail.value, 'lower')
    username.value === "" ? usernameValidationError.value = 'please input username' : null
    !isEmailValid.value ? emailValidationError.value = 'please input a valid email' : null
    email.value === "" ? emailValidationError.value = "please input email" : null
    phoneNumber.value === "" ? phoneNumberValidationError.value = "please input phoneNumber" :null
    password.value === "" ? passwordValidationError.value = "please input password" : null
    confirmPassword.value !== password.value ? confirmPasswordValidationError.value = "password does not match" : null

    !usernameValidationError.value && 
    !emailValidationError.value && 
    isEmailValid && 
    !phoneNumberValidationError.value && 
    !passwordValidationError.value && 
    !confirmPasswordValidationError.value &&
    store.dispatch('auth/registerUser', {username, lowerCaseEmail, phoneNumber, password})
};

//


</script>