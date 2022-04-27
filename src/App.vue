<template>
  <Navbar/>
  <LandingPage/>
  <Footer/>
</template>



<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import LandingPage from './page/LandingPage.vue';
export default {
    components:{
      Navbar,
      Footer,
      LandingPage
  
  },
}
</script>

