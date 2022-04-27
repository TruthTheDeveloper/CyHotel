<template>
    <section class="flex justify-center">
        <swiper
        :modules="modules"
        :slides-per-view="4"
        :space-between="50"
        navigation
        :pagination="{ clickable: true }"
        :scrollbar="{ draggable: true }"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        >
        <swiper-slide><rooms-card/></swiper-slide>
        <swiper-slide><rooms-card/></swiper-slide>
        <swiper-slide><rooms-card/></swiper-slide>
        <swiper-slide><rooms-card/></swiper-slide>
        <swiper-slide><rooms-card/></swiper-slide>
        <swiper-slide><rooms-card/></swiper-slide>
    </swiper>
    </section>
</template>

<script>
import RoomsCard from '../../components/RoomsCard.vue';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default {
    components: {
      Swiper,
      SwiperSlide,
      RoomsCard
    },

setup() {
      const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };
      return {
        onSwiper,
        onSlideChange,
        modules: [Navigation, Pagination, Scrollbar, A11y],
      };
    },
}


</script>