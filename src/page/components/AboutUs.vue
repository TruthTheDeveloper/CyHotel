<template>
    <section id="about-us" class="flex my-32 justify-center flex-col md:flex-row flex-col-reverse relative ">
        <div class="basis-1/4 lg:basis-1/3 md:basis-1/2 m-8 ">
            <img src="../../assets/images/reception.jpg" class="w-full h-full "/>
            <div class="bg-white absolute  bottom-16 md:bottom-24 lg:bottom-12 md:top-56 md:left-16 border shadow-xl rounded-md z-40">
                <h1 class="text-center py-3 font-semibold">Our Address </h1>
                <p class=" py-2 text-center px-12 pb-4">1, Folarin Wiliams close, ikola<br/> ikenegbu plaza owerri california</p>
            </div>
        </div>
        <div class="m-12 lg:m-8 z-40 bg-white">
            <h1 class="text-xl font-bold my-4 border-b-4 pb-3 border-pink-500 ">About Us</h1>
            <h1 class="lg:text-5xl font-semibold my-8 text-3xl  md:text-4xl">The best comfort start here!</h1>
            <p class="text-lg text-slate-500">No one rejects dislikes or avoid pleasure itself<br/>because it is pleasure but because those who do not know how to pursue</p>
            <button class="my-8 bg-pink-500 py-4 px-8 text-white rounded-sm text-lg" @click="bookButtonHandler()">Book Now</button>
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