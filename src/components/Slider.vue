<template>
  <swiper class="mySwiper mainSwiper" >
    <swiper-slide class="slides slide1"></swiper-slide>
    <swiper-slide class="slides slide2"></swiper-slide>
    <swiper-slide class="slides slide3"></swiper-slide>
    <swiper-slide class="slides slide4"></swiper-slide>
  </swiper>
</template>

<script>

  // Import Swiper Vue.js components
 import { Swiper, SwiperSlide } from "vue-awesome-swiper";

  // Import Swiper styles
  import '../swiper/swiper.css';

  export default {

    name : "Slider",
    components: {

      Swiper,
      SwiperSlide,

    },

    props : {

     options : Array

    }


  };
</script>


<style>

.mainSwiper{

    position:relative;
    top:80px;
    height:600px;
    background-color:#333;
  
    }
  
  
.slides{
  
   width:100%;
   height:100%;
   background-size:cover;
   background-position: 50% 50%;
   background-repeat : no-repeat;
  
   }
  
.slide1 { background-image:url(../assets/img/main1.jpeg);}

.slide2 { background-image:url(../assets/img/main2.jpeg);}

.slide3 { background-image:url(../assets/img/main3.jpeg);}

.slide4 { background-image:url(../assets/img/main4.jpeg);}


</style>



