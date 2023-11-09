<template>
 <div id="brand">
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
        <li v-for="list in iconBox1"><img :src="'../assets/img/'+list.image"><p>{{list.txt}}</p></li>
       </ul>
       <ul class="infoBox subBoxs">
        <li v-for="list in infoBox1"><p>{{list}}</p></li>
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
        <li v-for="list in iconBox2"><img :src="'../assets/img/'+list.image"><p>{{list.txt}}</p></li>
       </ul>
       <ul class="infoBox subBoxs">
        <li v-for="list in infoBox2"><p>{{list}}</p></li>
       </ul>
     </div>
     </section>
  
  </div>

</template>

<script>

 export default{
   
   name : "Brand",
   data() {

      return{

       title : "브랜드 소개",
       intro : "since 2002 스쿨푸드",
       subIntro : "당신의 입속에 꿈을 담아드립니다",
       iconBox1 : [
         
         { image : "icon1.png" , txt : "delicious"},
         { image : "icon2.png" , txt : "new menu"},
         { image : "icon3.png" , txt : "variety" },
         { image : "icon4.png" , txt : "cleanliness" }
       
       ],

       infoBox1 : [
       
        "사실 스쿨푸드는 ‘맛’이 다예요." ,  
        "맛있는 음식이 아니면 드리지 않겠다는 스쿨푸드의 철학!" , 
        "새로운 맛, 다양한 맛을 제공하기 위해 스쿨푸드는 365일 내내 ‘맛’에 대한 고민을 멈추지 않습니다."

       ],

       iconBox2 : [
         
         { image : "icon5.png" , txt : "passion"},
         { image : "icon6.png" , txt : "R&D center"},
         { image : "icon7.png" , txt : "store owner" },
         { image : "icon8.png" , txt : "q.c" }
       
       ],

       infoBox2 : [
       
        "저희만 믿고 따라오세요." ,  
        "점주님은 열심히 장사만 하세요. 나머지는 저희가 하겠습니다!" , 
        "메뉴 개발, 서비스 관리, 브랜드 홍보 등등 혼자는 어려운 부분은 스쿨푸드 본사가 함께 나누며 같이 잘 먹고 잘 사는 법을 찾고자 노력합니다."

       ],
   
   }

   }
 
 
  }



</script>