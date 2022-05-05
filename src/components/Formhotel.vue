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
                    <input />
                </div>
                <button class="bg-pink-500 flex mx-auto py-4 my-4 rounded-full text-white px-16 ">{{buttonText}}</button>
            </div>
        </form>
    </section>
</template>

<script setup>
    const props = defineProps({
        buttonText:String,
        formTitle:String
    })

    console.log(props.buttonText)

</script>