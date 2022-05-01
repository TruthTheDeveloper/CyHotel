<template>
    <form class=" my-12 xl:w-3/12 lg:w-4/12 md:w-6/12 mx-8 sm:mx-auto py-12 border border-pink-500 shadow-xl rounded-md">
        <h1 class="text-center font-semibold text-2xl">Sign Up</h1>
            <div class="my-1 px-3 py-2">
                <label>FullName</label>
                <input class="w-full py-2 border border-pink-500 outline-none pl-2"/>
            </div>
            <div class=" my-1 px-3 py-2">
                <label>Email</label>
                <input class="w-full py-2 border border-pink-500 outline-none pl-2"/>
            </div>
            <div class=" my-1 px-3 py-2">
                <label>Phone Number</label>
                <input class="w-full py-2 border border-pink-500 outline-none pl-2"/>
            </div>
            <div class=" my-1 px-3 py-2">
                <label>Password</label>
                <div v-if="!showPassword" class="flex border border-pink-500 ">
                    <input class="w-full py-2 outline-none pl-2" type="password" v-model="password"/>
                    <div @click="switchPassword()">
                        <i class="fas fa-eye-open m-1 text-black text-3xl cursor-pointer"></i>
                    </div>
                </div>
                <div v-else class="flex border border-pink-500 ">
                    <input class="w-full py-2 outline-none pl-2" type="text" v-model="password"/>
                    <div @click="switchPassword()">
                        <i class="fas fa-eye-open m-1 text-black text-3xl cursor-pointer"></i>
                    </div>
                </div>
            </div>
            <div class=" my-1 px-3 py-2">
                <label>Confirm Password</label>
                <div v-if="!showConfirmPassword" class="flex border border-pink-500 ">
                    <input class="w-full py-2 outline-none pl-2" type="password" v-model="confirmPassword"/>
                    <div @click="switchConfirmPassword()">
                        <i class="fas fa-eye-open m-1 text-black text-3xl cursor-pointer"></i>
                    </div>
                </div>
                <div v-else class="flex border border-pink-500 ">
                    <input class="w-full py-2 outline-none pl-2" type="text" v-model="confirmPassword"/>
                    <div @click="switchConfirmPassword()">
                        <i class="fas fa-eye-open m-1 text-black text-3xl cursor-pointer"></i>
                    </div>
                </div>
            </div>
            <button class="bg-pink-500 flex mx-auto py-4 mt-4 rounded-full text-white px-16">Register</button>
    </form>
</template>

<script setup>
import {ref} from 'vue';

const showPassword = ref(false)
const showConfirmPassword = ref(false)

const password = ref('')
const confirmPassword = ref('')

const switchPassword = () => {
    showPassword.value = !showPassword.value
}

const switchConfirmPassword = () => {
    showConfirmPassword.value = !showConfirmPassword.value
}
</script>