<template>
    <section class="my-8">
        <form class="xl:w-3/12 lg:w-5/12 md:w-6/12 w-10/12 border-2 mx-auto">
            <h1 class="text-center my-5 text-xl font-semibold">{{formTitle}}</h1>
            <div class="mx-3">
                <div class="my-6">
                    <h1>Title of room</h1>
                    <input class="border border-pink-500 py-2 w-full outline-none pl-2" v-model="roomTitle" @input="(e) => roomTitleValidationError = '' "/>
                    <p class="text-red-500 text-sm">{{roomTitleValidationError}}</p>
                </div>
                <div class="my-6">
                    <h1>Price</h1>
                    <input class="border border-pink-500 py-2 w-full outline-none pl-2" v-model="roomPrice" @input="(e) => roomPriceValidationError = '' "/>
                    <p class="text-red-500 text-sm">{{roomPriceValidationError}}</p>
                </div>
                <div class="my-6">
                    <h1>Room Image</h1>
                    <input class="border border-pink-500 py-2 w-full outline-none pl-2" type="file" accept="image/*" @change="getRoomImage($event)" id="file-input" @input="(e) => roomImageValidationError = '' "/>
                    <p class="text-red-500 text-sm">{{roomImageValidationError}}</p>
                </div>
                <div class="my-6">
                    <h1>Description</h1>
                    <textarea class="border border-pink-500 py-2 h-32 w-full outline-none pl-2" v-model="roomDescription" @input="(e) => roomDescriptionValidationError = '' "></textarea>
                    <p class="text-red-500 text-sm">{{roomDescriptionValidationError}}</p>
                </div>
                <div class="my-6">
                    <h1>Available</h1>
                    <Toggle v-model="value" :classes="{
                        container: 'inline-block rounded-full outline-none focus:ring focus:ring-pink-500 focus:ring-opacity-30',
                        toggle: 'flex w-12 h-5 rounded-full relative cursor-pointer transition items-center box-content border-2 text-xs leading-none',
                        toggleOn: 'bg-pink-500 border-pink-500 justify-start text-white',
                        toggleOff: 'bg-gray-200 border-gray-200 justify-end text-gray-700',
                        toggleOnDisabled: 'bg-gray-300 border-gray-300 justify-start text-gray-400 cursor-not-allowed',
                        toggleOffDisabled: 'bg-gray-200 border-gray-200 justify-end text-gray-400 cursor-not-allowed',
                        handle: 'inline-block bg-white w-5 h-5 top-0 rounded-full absolute transition-all',
                        handleOn: 'left-full transform -translate-x-full',
                        handleOff: 'left-0',
                        handleOnDisabled: 'bg-gray-100 left-full transform -translate-x-full',
                        handleOffDisabled: 'bg-gray-100 left-0',
                        label: 'text-center w-8 border-box whitespace-nowrap select-none',
                        }"/>
                </div>
                <button v-if="buttonText === 'Create' " class="bg-pink-500 flex mx-auto py-4 my-4 rounded-full text-white px-16" @click.prevent="createRoomHandler()">{{buttonText}}</button>
                <button v-else class="bg-pink-500 flex mx-auto py-4 my-4 rounded-full text-white px-16" @click.prevent="updateRoomHandler()">{{buttonText}}</button>
            </div>
        </form>
    </section>
</template>

<script setup>
import Toggle from '@vueform/toggle';
import {ref, computed, watch, onMounted} from 'vue';
const value = ref(true);

const props = defineProps({
    buttonText:String,
    formTitle:String
})

//vuex import
import {useStore} from 'vuex';

// route
import { useRouter } from 'vue-router';
const router = useRouter()

//vuex state
const store = useStore();
const roomId = ref('');
const roomTitle = ref('')
const roomTitleValidationError = ref('')

const roomImage = ref('')
const roomImageValidationError = ref('')

const roomPrice = ref('');
const roomPriceValidationError = ref('')

const roomDescription = ref('')
const roomDescriptionValidationError = ref('')

const storeState = computed(() => store.state.rooms.isCreated)

const detailState = computed(() => store.state.rooms.updateRoomsFormDetails)


onMounted(()=>{
    if(Object.keys(detailState).length === 0){
        return
    }else{
        roomId.value = detailState.value.id
        roomTitle.value = detailState.value.room_type
        roomPrice.value = detailState.value.room_price
        roomDescription.value = detailState.value.room_description
    }
});



const getRoomImage = (event) => {
     roomImage.value = event.target.files[0]
}

const updateRoomHandler = () => {
    console.log('update')
    roomTitle.value === "" ? roomTitleValidationError.value = 'please input room Title' : null
    roomPrice.value === "" ? roomPriceValidationError.value = "please input room price" : null
    roomImage.value === "" ? roomImageValidationError.value = "please input room Image" : null
    roomDescription.value === "" ? roomDescriptionValidationError.value = "please input room description" : null

    !roomTitleValidationError.value && 
    !roomImageValidationError.value &&
    !roomPriceValidationError.value && 
    !roomDescriptionValidationError.value && 
    store.dispatch('rooms/updateRooms', {roomId, roomTitle, roomPrice, roomImage, roomDescription, value})
}

const createRoomHandler = () => {
    roomTitle.value === "" ? roomTitleValidationError.value = 'please input room Title' : null
    roomPrice.value === "" ? roomPriceValidationError.value = "please input room price" : null
    roomImage.value === "" ? roomImageValidationError.value = "please input room Image" : null
    roomDescription.value === "" ? roomDescriptionValidationError.value = "please input room description" : null

    !roomTitleValidationError.value && 
    !roomImageValidationError.value &&
    !roomPriceValidationError.value && 
    !roomDescriptionValidationError.value && 
    store.dispatch('rooms/postRooms', {roomTitle, roomPrice, roomImage, roomDescription, value})
};

////WATHCHERS////
watch(storeState, (newVal,oldVal) => {
    console.log(newVal, oldVal, 'nil')
     if(newVal === true){
         router.push('/admin/landingpage')
     }
});


</script>

<style src="@vueform/toggle/themes/default.css"></style>


A Simple room with a single bed

3000/pernight

An Air condition Room with a single bed for comfort