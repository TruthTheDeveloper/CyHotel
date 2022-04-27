<template>
    <button v-for="(number, index in state.pageNumber)" :key="index" className="py-2 px-4 rounded-md mx-2"  @Click="paginate(number)">{{number}}</button> 
</template>

<script setup>
import { reactive } from 'vue';

defineProps({
  postsPerPage: Number,
  totalPosts: Number,
  paginate:Function
})



const state = reactive({pageNumber:[]})

onMounted(() => {

  for(let i = 1; i <= Math.ceil((props.totalPosts / props.postsPerPage)); i++){
        pageNumbers.push(i)
    }
})

</script>