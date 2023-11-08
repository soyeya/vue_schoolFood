<template>
 <div class="bannerWrap">
   <img src="../assets/img/bannerTitle.png" class="bannerTitleImg">
   <p>{{ bigTitle }}</p>
   <span class="subtitle">{{ subTxt }}</span>
    <div class="imgBox">
       <ul>
        <li v-for="list in bannerImg">
            <img :src="'../assets/img/'+list.image"><span>{{list.txt_1}}</span>
            <span>{{list.txt_2}}</span>
        </li>
        </ul>
    </div>
  </div>
</template>


<style>

.bannerWrap{

  width:100%;
  height:800px;
  margin:0 auto;
  background-color: rgb(246, 242, 237);

  }

.bannerWrap .bannerTitleImg{

  height:150px;
  text-align:center;
  display:block;
  margin:0 auto;
  padding-top:100px;

  }


.bannerWrap p{

  color:#333;
  font-size:30px;
  padding:10px 0px;

  }


.bannerWrap .subtitle{

  color:#666;
  font-size:20px;
  font-weight:500;

  }

.bannerWrap .imgBox{

  width:100%;
  height:300px;
  margin:0 auto;

  }


.bannerWrap .imgBox ul{

 width:100%;
 height:100%;
 margin-top:50px;
 display:flex;
 align-items:center;
 justify-content:center;

 }


 .bannerWrap .imgBox ul li{
 
 width:17%;
 height: 90%;
 margin:3px;
 border-radius:5px;
 border:1px solid #eaeaea;
 display:flex;
 flex-direction:column;
 align-items:center;
 justify-content:center;
 position:relative;
 
 
 }

  .bannerWrap .imgBox ul li img{

  width:100%;
  height:100%;
  position:absoulte;

  }

  .bannerWrap .imgBox ul li span{

    margin:0 auto;
    position:absoulte;

  }




</style>

<script>



export default{

    name : "bannerWrap",
    props : { 
    
     bigTitle : String,
     subTxt : String,
     bannerImg : String

    }

}


</script>