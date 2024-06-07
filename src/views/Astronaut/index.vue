<script setup>
import { useUserStore } from '@/stores/user';
import 'element-plus/theme-chalk/el-message.css'
import { ElMessage } from 'element-plus';
import { useRouter } from 'vue-router';
const userStore=useUserStore()
const router=useRouter()
import { ref } from 'vue';
import p1 from '@/assets/peopleImg/1.webp'
import p2 from '@/assets/peopleImg/p2.jpg'
import p3 from '@/assets/peopleImg/p3.webp'
import p4 from '@/assets/peopleImg/p4.jpg'
import p5 from '@/assets/peopleImg/p5.jpg'
import p6 from '@/assets/peopleImg/p6.jpg'
import p7 from '@/assets/peopleImg/p7.jpg'
import p8 from '@/assets/peopleImg/p8.webp'
import p9 from '@/assets/peopleImg/p9.webp'
import p10 from '@/assets/peopleImg/p10.webp'
import p11 from '@/assets/peopleImg/p11.webp'
import p12 from '@/assets/peopleImg/p12.webp'

const list =ref([
    {
        pic:p1,
        name:'张陆',
        id:'6'
    },
    {
        pic:p2,
        name:'聂海胜 ',
        id:'7',
    },
    {
        pic:p3,
        name:'景海鹏',
        id:'8'
    },
    {
        pic:p4,
        name:'刘旺',
        id:'9'
    },
    {
        pic:p5,
        name:'张晓光',
        id:'9'
    },
    {
        pic:p6,
        name:'刘洋',
        id:'9'
    },
    {
        pic:p7,
        name:'王亚平',
        id:'9'
    },
    {
        pic:p8,
        name:'杨利伟',
        id:'9'
    },
    {
        pic:p9,
        name:'翟志刚',
        id:'9'
    },
    {
        pic:p10,
        name:'景海鹏',
        id:'9'
    },
    {
        pic:p11,
        name:'张晓光',
        id:'9'
    },
    {
        pic:p12,
        name:'陈东',
        id:'9'
    },
    {
        pic:p10,
        name:'景海鹏1',
        id:'9'
    },
    {
        pic:p11,
        name:'张晓光2',
        id:'9'
    },
    {
        pic:p12,
        name:'陈东3',
        id:'9'
    }
])

const clickRouter=(path)=>{
  if(userStore.userInfo.length>0){
    router.push(path)
  }else{
    ElMessage({type:'warning',message:'用户未登录，请先登录！'})
    router.push('/login')
  }
}
</script>
<template>
    <div>
        <!-- <LayoutHeader /> -->
        <div class="main">
            <h3 class="title">中国航天英雄</h3>
            <div class="line"></div>
            <div class="content">
                <div class="picture" v-for="item in list" :key="item.name" @click="clickRouter(`/detail/${item.id}`)">
                    <img :src="item.pic" alt="">
                    <p>{{ item.name }}</p>
                </div>
            </div>
        </div>
        <!-- <LayoutFooter /> -->
    </div>

</template>
<style lang="scss" scoped>
.main {
    width: 1280px;
    // height: 950px;
    margin: 0 auto;
    margin-top: 90px;
    padding: 0 50px;
    background-color: #fff;
    border-radius: 30px;
    box-shadow: 5px 5px 10px 0 rgba(0, 0, 0, 0.5);

    .title {
        font-size: 35px;
        width: 100%;
        text-align: center;
        margin-bottom: 30px;
        padding-top: 20px;
    }

    .line {
        width: 60px;
        height: 3px;
        background-color: #ff6600;
        margin: 0 auto;
    }

    .content {
        width: 100%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        .picture{
            width: 200px;
            height: 300px;
            margin-bottom: 30px;
            margin-top: 50px;
            background-color: #f3f3f3;
            img{
                width: 100%;
                height: 260px;
            }
            p{
                width: 100%;
                height: 40px;
                line-height: 40px;
                text-align: center;
              
              
            }
        }
    }

}
</style>