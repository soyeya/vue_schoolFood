<template>
        <ul class="listCont" >
            <li><img @click=onClick :src="require(`@/assets/img/${list.src}`)"></li>
            <li><p>{{list.title}}</p>
            <span>{{list.info}}</span></li>
        </ul>

</template>

<script>

export default{

 name : "List",
 props : ["list"],

 methods : {
   
    onClick(e){
      
         this.$emit("@click", {src : e.target.src, title:e.target.alt});

         }
 
 }



}


</script>