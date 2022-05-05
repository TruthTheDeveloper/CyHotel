<template>
    <section class="my-8">
        <form class="xl:w-3/12 lg:w-5/12 md:w-6/12 w-10/12 border-2 mx-auto">
            <h1 class="text-center my-5 text-xl font-semibold">{{formTitle}}</h1>
            <div class="mx-3">
                <div class="my-6">
                    <h1>Title of room</h1>
                    <input class="border border-pink-500 py-2 w-full outline-none pl-2"/>
                </div>
                <div class="my-6">
                    <h1>Price</h1>
                    <input class="border border-pink-500 py-2 w-full outline-none pl-2"/>
                </div>
                <div class="my-6">
                    <h1>Description</h1>
                    <textarea class="border border-pink-500 py-2 h-32 w-full outline-none pl-2"/>
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
                <button class="bg-pink-500 flex mx-auto py-4 my-4 rounded-full text-white px-16 ">{{buttonText}}</button>
            </div>
        </form>
    </section>
</template>

<script setup>
import Toggle from '@vueform/toggle';
import {ref} from 'vue';
const value = ref(true)
    const props = defineProps({
        buttonText:String,
        formTitle:String
    })

    console.log(props.buttonText)

</script>

<style src="@vueform/toggle/themes/default.css"></style>