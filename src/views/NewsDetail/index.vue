<script setup>
import { useRoute } from 'vue-router';
import { getDetailData } from './useDetails'
const route = useRoute()
const { lists } = getDetailData(route.params.id)
</script>
<template>
  
    <div class="detail">
        <h3>{{ lists.title }}</h3>
        <img :src="lists.pic" alt="">
        <p class="content">{{ lists.text }}</p>
    </div>
 
</template>
<style lang="scss" scoped>
.detail{
    width: 1280px;
    height: 800px;
    margin: 30px auto;
    border: 1px solid #a8a8a8;
    h3{
        width: 100%;
        height: 50px;
        line-height: 50px;
        text-align: center;
        font-size: 30px;
        margin-top: 20px;
    }
    img{
        display: block;
        width: 500px;
        height: 500px;
        margin: 30px auto;
    }
    .content{
        width: 950px;
        height: 30px;
        line-height: 30px;
        font-size: 16px;
        margin: 0 auto;
        text-indent: 2em;
    }
}
</style>