<template>
    <section class="my-24">
        <div class="text-center my-12">
            <h1 class="font-bold text-xl my-4">EXPLORE</h1>
            <h3 class="text-3xl my-8">Watchout For Newest Event!</h3>
        </div>
        <div class="explore-background-image flex flex-col md:flex-row">
            <div class="bg-white basis-1/3 mx-6 lg:mx-12 pl-5 py-6 my-12 rounded-md">
                <h1 class="text-xl my-4">10 MAY 2021</h1>
                <p class="text-3xl p-8 pl-0 my-3">A new menu is available in our Hotel</p>
                <button class="border-pink-500 border-2 text-lg py-3 px-6 rounded-sm text-pink-500" @click="bookButtonHandler()">
                    Continue
                </button>
            </div>
            <div class="bg-white basis-1/3 mx-6  lg:mx-12 pl-5 py-6 my-12 rounded-md">
                <h1 class="text-xl my-4">5 AUGUST 2021</h1>
                <p class="text-3xl p-8 pl-0 my-3">ReInnovation of our Swimming pool</p>
                <button class="border-pink-500 border-2 text-lg py-3 px-6 rounded-sm text-pink-500" @click="bookButtonHandler()">
                    Continue
                </button>
            </div>
            <div class="bg-white basis-1/3 mx-6  lg:mx-12 pl-5 py-6 my-12 rounded-md">
                <h1 class="text-xl my-4">12 MARCH 2021</h1>
                <p class="text-3xl p-8 pl-0 my-3">The biggest birthday party in the city</p>
                <button class="border-pink-500 border-2 text-lg py-3 px-6 rounded-sm text-pink-500" @click="bookButtonHandler()">
                    Continue
                </button>
            </div>
        </div>
    </section>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter()

const bookButtonHandler = () => {
    router.push('/book')
}
</script>