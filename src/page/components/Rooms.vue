<template>
    <section id="rooms">
        <div class="m-8 my-12">
            <h1 class="my-4">OUR LIVING ROOM </h1>
            <p class="font-semibold text-4xl">The most memorable rest<br/> time starts here.</p>
        </div>
        <div class="flex justify-center">
            <swiper
            :modules="modules"
            :slides-per-view="isGreaterThan425x"
            :space-between="50"
            navigation
            :pagination="{ clickable: true }"
            :scrollbar="{ draggable: true }"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
            >
            <swiper-slide>
                <rooms-card
                roomImage="https://res.cloudinary.com/di8abd9yq/image/upload/v1651116475/room10_lijxtd.jpg" 
                roomType="Duplex Room" 
                roomDescription="Semi double bed 1 guest room 3 windows" roomPrice="#3000/night"
                />
             </swiper-slide>
            <swiper-slide>
                <rooms-card 
                roomImage="https://res.cloudinary.com/di8abd9yq/image/upload/v1651116472/room15_asuib2.jpg" roomType="Classic Room" 
                roomDescription="Double bed 2 window mountain view" roomPrice="#5000/night"/>
            </swiper-slide>
            <swiper-slide>
                <rooms-card 
                roomImage="https://res.cloudinary.com/di8abd9yq/image/upload/v1651116432/room8_e9wyhl.jpg" roomType="Double Room" 
                roomDescription="Semi double bed 3 widows mountai view" roomPrice="#3000/night"/>
            </swiper-slide>
            <swiper-slide>
                <rooms-card 
                roomImage="https://res.cloudinary.com/di8abd9yq/image/upload/v1651116427/room1_enlafx.jpg" roomType="Flat Room" 
                roomDescription="Sami double bed 1 guest room 3 windows" roomPrice="#10000/night"/>
            </swiper-slide>
            <swiper-slide>
                <rooms-card 
                roomImage="https://res.cloudinary.com/di8abd9yq/image/upload/v1651116460/room5_ycrpo0.jpg" roomType="Duplex Room" 
                roomDescription="Sami double bed 1 guest room 3 windows" roomPrice="#5000/night"/>
                </swiper-slide>
            <swiper-slide>
                <rooms-card 
                roomImage="https://res.cloudinary.com/di8abd9yq/image/upload/v1651116459/room13_hmtqtu.jpg" roomType="Classic Room" 
                roomDescription="Sami double bed 1 guest room 3 windows" roomPrice="#3000/night"/>
                </swiper-slide>
            </swiper>
        </div>
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

// vue import
import { onMounted, onUnmounted, ref } from 'vue';


const isGreaterThan425x = ref(1);

export default {
    components: {
      Swiper,
      SwiperSlide,
      RoomsCard
    },

setup() {
      const onSwiper = (swiper) => {
      };
      const onSlideChange = () => {
      };

      ///FUNCTION THAT WATHES FOR SCREEN RESIZE AND PERFORM LOGIC DEPENDING ON THE SCREEN SIZE//
      const onResize = () => {
        if (window.innerWidth < 650) {
            isGreaterThan425x.value = 1;
          } else if(window.innerWidth < 950){
            isGreaterThan425x.value = 2;
          } else if(window.innerWidth > 950 && window.innerWidth < 1400){
            isGreaterThan425x.value = 3;
          }else if(window.innerWidth > 1400){
            isGreaterThan425x.value = 4;
          }
      }

      onUnmounted(() => {
      window.removeEventListener('resize', onResize)
      })

      onMounted(() => {
          onResize()
      window.addEventListener('resize', onResize)
      })

      return {
        onSwiper,
        onSlideChange,
        isGreaterThan425x,
        modules: [Navigation, Pagination, Scrollbar, A11y],
      };
    },

    

}


// console.log(isGreaterThan425x.value, 'jdjd')


  


// created() {
//   window.addEventListener('resize', this.onResize)
// },

// beforeDestroy() {
//   window.removeEventListener('resize', this.onResize)
// },




</script>