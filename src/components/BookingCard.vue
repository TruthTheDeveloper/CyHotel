<template>
    <div v-for="room in roomList" class="flex flex-col md:flex-row border-2 shadow-xl mx-3 my-12 md:mx-12 xl:w-8/12 lg:w-7/12 lg:mx-auto" :key="room.id">
            <div class="p-5 h-80">
                <img :src="room.room_Image" class="w-full h-full" />
            </div>
            <div class="py-6 pb-2 pl-4 m-2">
                <h1 class="text-xl font-semibold py-2">{{room.room_type}}</h1>
                <p class="py-2">{{room.room_description}}</p>
                <p>{{room.room_price}}</p>
                <button class="bg-pink-500 my-5 px-6 py-3 text-white" @click="bookButtonHandler()">{{props.buttonText}}</button>
            </div>
        </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter()
const props = defineProps({
        buttonText:String,
        roomList:Array
    })

const bookButtonHandler = () => {
    router.push('/dashboard')
}
</script>