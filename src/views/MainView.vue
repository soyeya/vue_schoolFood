<template>
 <div class="main">
   <Slider :options="swiperOption" />
   <Banner :bigTitle="bannerTxt" :subTxt="bannerSub" :bannerImg="bannerStuff" />
   <Footer/>
  </div>
</template>


<style>

.main{

    width:100%;
    height:100%;
    margin:0 auto;

 }



</style>

<script>

import Banner from "@/components/Banner.vue";
import Slider from "@/components/Slider.vue";
import Footer from "@/components/Footer.vue";

  // Import Swiper Vue.js components
 import { Swiper, SwiperSlide } from "vue-awesome-swiper";

  // Import Swiper styles
  import '../swiper/swiper.css';

export default {

  name: "MainView",
  components : {
  
    Slider,
    Banner,
    Footer

   },


   data(){

    return{
    
       bannerTxt : "맛있는 요리는 좋은 재료로 만들어지기에",
       bannerSub : "비싸더라도 스쿨푸드는 프리미엄 식자재로 만듭니다.",
       bannerStuff : [
       
        {  txt_1 : "95.7% 흰살", txt_2 : "함유된 최고급 어묵" },
        {  txt_1 : "명인명촌 문순천", txt_2 : "제주 어간장" },
        {  txt_1 : "60년 전통방식 그대로", txt_2 : "생산된 구포국수" },
        {  txt_1 : "정성으로 짓는 밥으로", txt_2 : "만든 마리" },
        {  txt_1 : "완도에서", txt_2 : "채취한 김" }
  
       ],

    swiperOption : [
        
        {
        
            slidesPerView: 1, 
            spaceBetween: 30, 
            loop: true
              
              }
        ]

       
     }
      

   }

}


</script>