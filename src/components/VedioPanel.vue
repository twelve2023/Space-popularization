<script setup>
defineProps({
    vedioList:{
        type:Array,
        default:()=>[]
    }
})
</script>
<template>
     <div class="vedio">
        <div class="vedio-item" v-for="item in vedioList" :key="item.pic">
          <img :src="item.pic" alt="">
          <h3>{{ item.title }}</h3>
        </div>
      </div>
</template>
<style lang="scss" scoped>
@media screen and (max-width: 768px) {
  .vedio {
    flex-direction: column;
  }
 
  .vedio-item {
    width: 100%;
    order: 1;
  }
 
  
}
 .vedio{
    display: flex;
    justify-content: space-between;
    flex-wrap:wrap;
    .vedio-item{
     width: 330px;
    height: 250px;
    background-color: #f3f3f3;
    margin-bottom: 20px;
    img{
      width: 100%;
      height: 200px;
    }
    h3{

      height: 50px;
      line-height: 50px;
      padding-left: 15px;
      font-weight: normal;
      font-size: 18px;
    }
    }
   
  }
</style>