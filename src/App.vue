<template>
  <div id="app">
    <nav class="nav">
      <div class="logo">
        <router-link to="/"><img src="./assets/img/logo.png"></router-link>
      </div>
      <div class="menu">
        <router-link to="/brand">브랜드소개</router-link>
        <router-link to="/menu">메뉴</router-link>
        <a href="https://smartstore.naver.com/sfinnovation">스쿨푸드몰</a>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>


<style>

@import url(./css/common.css);

#app {

  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

}

nav{ 
  
   width:100%;
   padding: 10px 0px;
   display:flex;
   align-items:center;
   justify-content: space-between;
   position:fixed;
   left:0;
   top:0;
   z-index:10;
   background-color:rgba(225,225,225,0.9);
   }

nav .logo{

   height:100%;
   margin-left:10px;
   

}

nav .logo img{

  height:100%;
  text-align:center;

}


nav .menu{

  display:flex;
  align-items:center;
  justify-content:center;
  margin-right:40px;


}

nav .menu a{

  color: #2c3e50;
  font-size:16px;
  margin:20px;

}

nav .menu a:hover{

  color:#ccc;
  
  
  }

</style>



<script>

import axios from 'axios';
import Main from './views/MainView.vue';
import Brand from './views/BrandView.vue';
import Menu from './views/MenuView.vue';
import ListMenu from './views/ListView.vue';

export default{

 name: "App",
 components : {
 
   Main,
   Brand,
   Menu,
   ListMenu
 
 }

}

</script>
