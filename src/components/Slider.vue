<template>
  <swiper 
  class="swiper-wrapper" :options="swiperOption">
    <swiper-slide class="slides slide1"></swiper-slide>
    <swiper-slide class="slides slide2"></swiper-slide>
    <swiper-slide class="slides slide3"></swiper-slide>
    <swiper-slide class="slides slide4"></swiper-slide>
    <div class="swiper-pagination"></div>
  </swiper>
</template>

<script>

import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import '../swiper/swiper.css';

export default{

    name : "Slider",
    components: {

      Swiper,
      SwiperSlide,

    },

  data() {
      return {


        swiperOption: {

          slidesPerView: 1,
          spaceBetween: 30,
          loop: true,
          slidesPerGroup: 1,
          
          autoplay : {

           delay : 2500

           }



        }

      }

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



