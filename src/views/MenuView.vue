<template>
 <section id="menuWrap">
   <div class="menuTitle">
     <h3>{{title}}</h3>
   </div>
   <Search @@change ="onChangeQuery"/>
   <Result @@click ="onChangeList" :lists="searchFoods" />
  </section> 
</template>

<script>

import axios from "axios"
import Result from './ResultView.vue';
import Search from './SearchView.vue';

export default{
 
 name : "schoolMenu",

 components : {
 
  Search,
  Result
 
 },

 data() {
 
   return{ 

     title : "메뉴",
     foods : [],
     searchFoods : []
    }
 
  },
  
   async created(){

        const {data} = await axios.get("/json/List.json");
        this.foods = data;
        this.searchFoods = data;
        
      },


   methods : {

     onChangeQuery(query){
       
        this.searchFoods = this.foods.filter((v) => {
          const result = v.title.toLowerCase().includes(query.toLowerCase());

           return result;

        })

      },

      onChangeList(w){
      
         this.food = w.title;
         this.isSelected = true;

      }
  
  }

}

</script>