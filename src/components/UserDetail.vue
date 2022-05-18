<template>
    <div v-for="details in reservationDetail" class="grid grid-cols-7 w-full mx-auto" :key="details.id">
            <div class="text-center border border-pink-500 p-2 text-sm">{{details.full_name}}</div>
            <div class="text-center border border-pink-500 p-2 text-sm">{{details.phone_number}}</div>
            <div class="text-center border border-pink-500 p-2 text-xs">{{details.email}}</div>
            <div class="text-center border border-pink-500 p-2 text-sm">{{details.check_in}}</div>
            <div class="text-center border border-pink-500 p-2 text-sm">{{details.check_out}}</div>
            <div class="text-center border border-pink-500 p-2 text-sm">{{details.payment_status}}</div>
            <div class="text-center border border-pink-500 p-2 text-sm"><button class="bg-pink-500 py-2 px-4 text-white rounded-md">confirm</button></div>
        </div>
</template>

<script setup>
const props = defineProps({
    reservationDetail:Array
})

</script>