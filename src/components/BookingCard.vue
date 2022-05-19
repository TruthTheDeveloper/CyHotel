<template>
    <div v-for="room in roomList" class="flex flex-col md:flex-row border-2 shadow-xl mx-3 my-12 md:mx-12 xl:w-8/12 lg:w-9/12 lg:mx-auto" :key="room.id">
            <div class="p-5 h-80 md:w-6/12 lg:w-5/12">
                <img :src="room.room_Image" class="w-full h-full" />
            </div>
            <div class="py-6 pb-2 pl-4 m-2">
                <h1 class="text-xl font-semibold py-2">{{room.room_type}}</h1>
                <p class="py-2">{{room.room_description}}</p>
                <p>{{room.room_price}}</p>
                <button v-if="buttonText === 'Book Now'" class="bg-pink-500 my-5 px-6 py-3 text-white" @click="bookButtonHandler_1(room.id, room.room_Image, room.room_type, room.room_description, room.room_price)">{{props.buttonText}}</button>
                <button v-if="buttonText === 'Update'" class="bg-pink-500 my-5 px-6 py-3 text-white" @click="bookButtonHandler_2(room.id, room.room_image, room.room_type, room.room_description, room.room_price)">{{props.buttonText}}</button>
            </div>
        </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

//vuex import
import {useStore} from 'vuex';

//vuex state
const store = useStore();

const router = useRouter()
const props = defineProps({
        buttonText:String,
        roomList:Array
    })

const bookButtonHandler_1 = (id, roomImage, roomType, roomDescription, roomPrice) => {
    store.commit('rooms/roomsData', {roomImage, roomType, roomDescription, roomPrice})
    router.push('/dashboard')
}

const bookButtonHandler_2 = (id, room_image, room_type, room_description, room_price) => {
    console.log(id,'id')
    store.commit('rooms/roomsUpdateDetails', {id, room_image, room_type, room_description, room_price})
    router.push('/admin/update/roomform')
}
</script>