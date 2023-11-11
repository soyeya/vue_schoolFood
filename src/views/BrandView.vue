<template>
 <div id="brand" v-scroll="movingSpace">
  <section class="brand_page1 brandPage">
    <h3>{{title}}</h3>
   </section>
  <section class="brand_page2 brandPage">
    <p>{{intro}}</p>
    <p>{{subIntro}}</p>
   </section>
  <section class="brand_page3 brandPage">
      <div class="Box1 boxs">
        <ul class="iconBox subBoxs">
          <li v-for="list in iconbox1"><img :src="require(`@/assets/img/${list.image}`)"><p>{{list.txt}}</p></li>
          <span class="number">01</span>
        </ul>
        <ul class="infoBox subBoxs">
          <li v-for="list in infobox1"><p>{{list}}</p></li>
        </ul>
      </div>
    <div class="Box2 boxs">
        <img src="../assets/img/brand02.jpeg">
    </div>
   </section>

  <section class="brand_page4 brandPage">
     <div class="Box2 boxs">
        <img src="../assets/img/brand03.jpeg">
      </div>
     <div class="Box1 boxs">
        <ul class="iconBox subBoxs">
           <li v-for="list in iconbox2"><img :src="require(`@/assets/img/${list.image}`)"><p>{{list.txt}}</p></li>
           <span class="number">02</span>
        </ul>
        <ul class="infoBox subBoxs">
           <li v-for="list in infobox2"><p>{{list}}</p></li>
        </ul>
     </div>
     </section>

   <section class="brand_page5 brandPage">
      <div class="Box1 boxs">
          <ul class="iconBox subBoxs">
            <li v-for="list in iconbox3"><img :src="require(`@/assets/img/${list.image}`)"><p>{{list.txt}}</p></li>
            <span class="number">03</span>
          </ul>
          <ul class="infoBox subBoxs">
            <li v-for="list in infobox3"><p>{{list}}</p></li>
          </ul>
      </div>
      <div class="Box2 boxs">
        <img src="../assets/img/brand04.jpeg">
      </div>
    </section>

   <section class="brand_page6 brandPage">
      <div class="Box2 boxs">
        <img src="../assets/img/brand05.jpeg">
      </div>
      <div class="Box1 boxs">
          <ul class="iconBox subBoxs">
            <li v-for="list in iconbox4"><img :src="require(`@/assets/img/${list.image}`)"><p>{{list.txt}}</p></li>
            <span class="number">04</span>
          </ul>
          <ul class="infoBox subBoxs">
            <li v-for="list in infobox4"><p>{{list}}</p></li>
          </ul>
      </div>
    </section>
  
  </div>

</template>

<script>

import axios from 'axios';
import Vuetify from 'vue'

 export default{
   
   name : "brand",
   data() {

      return{

       title : "브랜드 소개",
       intro : "since 2002 스쿨푸드",
       subIntro : "당신의 입속에 꿈을 담아드립니다",
       iconbox1 : [],
       infobox1 : [],
       iconbox2 : [],
       infobox2 : [],
       iconbox3 : [],
       infobox3 : [],
       iconbox4 : [],
       infobox4 : [],

   }

   },

     async created() {
        
         const {data} = await axios.get("/json/Brand.json"); //json영역은 public에 둘 것
         this.iconbox1 = data.iconBox1;
         this.infobox1 = data.infoBox1;
         this.iconbox2 = data.iconBox2;
         this.infobox2 = data.infoBox2;
         this.iconbox3 = data.iconBox3;
         this.infobox3 = data.infoBox3;
         this.iconbox4 = data.iconBox4;
         this.infobox4 = data.infoBox4;

       },


      methods : {
      
        movingSpace(e){
        
           const brandList = document.querySelector(".brand_page3");
           const brandBox = document.querySelectorAll(".Box2");
           const textBox = document.querySelectorAll(".Box1");
           const brandHeight = 700;

           const scrollY = window.scrollY;

           if(scrollY > brandHeight * 2){

                   brandBox[0].classList.add("moving");
                   textBox[0].classList.add("moving");

           }else{

                   brandBox[0].classList.remove("moving");
                   textBox[0].classList.remove("moving");
  
           
           }if(scrollY > brandHeight * 3){

                   brandBox[1].classList.add("moving");
                   textBox[1].classList.add("moving");
           
           }else{

                   brandBox[1].classList.remove("moving");
                   textBox[1].classList.remove("moving");
  
           }if(scrollY > brandHeight * 4){

                   brandBox[2].classList.add("moving");
                   textBox[2].classList.add("moving");
           
           }else{

                   brandBox[2].classList.remove("moving");
                   textBox[2].classList.remove("moving");
  
           }if(scrollY > brandHeight * 5){

                   brandBox[3].classList.add("moving");
                   textBox[3].classList.add("moving");
           
           }else{

                   brandBox[3].classList.remove("moving");
                   textBox[3].classList.remove("moving");
  
           }
           
         }
      
      }

   
 
 
  }



</script>