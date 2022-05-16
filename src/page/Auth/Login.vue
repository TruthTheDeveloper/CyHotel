<template>
    <Navbar/>
    <form class=" my-12 xl:w-3/12 lg:w-4/12 md:w-6/12 mx-8 sm:mx-auto py-12 border border-pink-500 shadow-xl rounded-md">
        <h1 class="text-center font-semibold text-2xl">Login</h1>
            <div class=" my-1 px-3 py-2">
                <label>Email</label>
                <input class="w-full py-2 border border-pink-500 outline-none pl-2" v-model="email" @input="(e) => emailValidationError = '' "/>
                <p class="text-red-500 text-sm">{{emailValidationError}}</p>
            </div>
            <div class=" my-1 px-3 py-2">
                <label>Password</label>
                <div v-if="!showPassword" class="flex border border-pink-500 ">
                    <input class="w-full py-2 outline-none pl-2" type="password" v-model="password" @input="(e) => passwordValidationError = '' "/>
                    <div @click="switchPassword()">
                        <i class="fa-solid fa-eye  m-1 text-xl text-pink-500  cursor-pointer pt-2"></i>
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
            <button class="bg-pink-500 flex mx-auto py-4 mt-4 rounded-full text-white px-16" @click.prevent="loginSubmitHandler">Login</button>
            <h1 class="text-pink-500 pt-5 text-center">Don't have an account, <a class="underline"><router-link to="register">Register</router-link></a></h1>
    </form>
</template>

<script setup>
//Components
import Navbar from '../../components/Navbar.vue';

//Toast Notification
import { useToast } from "vue-toastification";

// vue import
import {ref, computed, watch} from 'vue';

//vuex import
import {useStore} from 'vuex';

//Local state
const email = ref('');
const emailValidationError = ref('');

const password = ref('');
const passwordValidationError = ref('');

// route
import { useRouter } from 'vue-router';
const router = useRouter()

//vuex state
const store = useStore();

//toast notification
const toast = useToast();

const showPassword = ref(false)

const switchPassword = () => {
    showPassword.value = !showPassword.value
}

//computed propertis to check email validity
const isEmailValid = computed(() => {
    return email.value.includes('@') && email.value.includes('.')
})

//get global state through computed properties
const storeState = computed(() => store.state.auth.statusCode)

const msg = computed(() => store.state.auth.message)

console.log(msg, 'msg')

const successToastNotification = () =>{
    toast.success(store.state.auth.message, {
        timeout: 4000
    })
}

const errorToastNotification = () =>{
    toast.error(store.state.auth.message, {
        timeout: 4000
    })
}



console.log(storeState)

watch(storeState, (newVal,oldVal) => {
    if(newVal === 200){
        router.push('/book')
        successToastNotification()
    }else if(newVal === 401){
        errorToastNotification()
    }

});





const loginSubmitHandler = () => {
    !isEmailValid.value ? emailValidationError.value = 'please input a valid email' : null
    email.value === "" ? emailValidationError.value = "please input email" : null
    password.value === "" ? passwordValidationError.value = "please input password" : null


    !emailValidationError.value && 
    isEmailValid && 
    !passwordValidationError.value && 
    store.dispatch('auth/loginUser', {email, password})
}

</script>