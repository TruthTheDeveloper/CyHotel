<template>
        <div class="m-5 px-6 py-4 shadow-xl border mb-14">
        <div class="w-64 h-72 bg-red-700">
            <img :src="roomImage" class="h-full"/>
        </div>
        <div class="">
            <h1 class="font-semibold text-xl my-3">{{roomType}}</h1>
            <p class="text-sm my-2 text-slate-500  w-44">{{roomDescription}}</p>
            <p>Starting from<span class="font-semibold text-xl">{{roomPrice}}</span></p>
            <button class="bg-pink-500 my-5 px-6 py-3 text-white">
                Book now
            </button>
        </div>
    </div>
</template>

<script setup>
// import { any } from "prop-types";

const props = defineProps({
  roomImage:String,
  roomType: String,
  roomDescription:String,
  roomPrice:String
})



console.log(props.roomImage)
</script>