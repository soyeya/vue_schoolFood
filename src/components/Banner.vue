<template>
 <div class="bannerWrap">
   <img src="../assets/img/bannerTitle.png" class="bannerTitleImg">
   <p>{{ bigTitle }}</p>
   <span class="subtitle">{{ subTxt }}</span>
    <div class="imgBox">
       <ul>
        <li v-for="list in bannerImg" class="bannerList" >
            <span>{{list.txt_1}}</span>
            <span>{{list.txt_2}}</span>
        </li>
        </ul>
    </div>
  </div>
</template>


<script>


export default{

    name : "bannerWrap",
    props : { 
    
     bigTitle : String,
     subTxt : String,
     bannerImg : Array

    }

}


</script>