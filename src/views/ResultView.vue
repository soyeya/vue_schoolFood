<template>
 
 <div class="searchResult">
  <List v-for="v in lists" :alt="lists.title" :list="v" @@click="onClick"/>
 </div>


</template>


<script>

 import List from "./ListView.vue";

 
 export default{
 
  name : "Result",
  components : { List },
  props : ["lists"],
  methods : {
  
   onClick(v){
   
      this.$emit('@click' , v) //$emit -> 자식의 공간에 클릭을 시도할 수 있도록 구성 > 자식 컴포넌트에서 사용자지정 이벤트를 만들어 부모 컴포넌트에게 전달

    }
  } 
 
 
 }

</script>