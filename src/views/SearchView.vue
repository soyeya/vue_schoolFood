<template>
   <div class="search">
    <input @input="changeQuery" type="text" class="menuSearch" name="query" placeholder="메뉴를 입력해주세요." />
     <i @click="onReset" class="fa-solid fa-circle-xmark"></i>
   </div>
</template>


<script>

export default{
  
  name : "Search",
  data(){
    
      return{
      
        query : ""

      }
    },

   methods : {
    
      changeQuery(e){ //검색어 입력 값을 전송하는 부분
       
        console.log(e);
        console.log(e.target.value);
        this.query = e.target.value;
        this.$emit("@change", this.query);
      
       },

       onReset(){ //검색어 삭제 

       } 
   }
}

</script>