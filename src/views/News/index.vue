<script setup>
import { useRoute,useRouter } from 'vue-router';
import { getNewsData } from './useNews'
import { useUserStore } from '@/stores/user';
import 'element-plus/theme-chalk/el-message.css'
import { ElMessage } from 'element-plus';
const userStore=useUserStore()
const router = useRouter()
const route = useRoute()
const { newsList } = getNewsData(route.params.id)
const changeRoute=(id)=>{
    if (userStore.userInfo.length > 0) {
        router.push(`/detail/${id}`)
    } else {
        ElMessage({ type: 'warning', message: '用户未登录，请先登录！' })
        router.push('/login')
    }
}
</script>
<template>
    <div>
        <div class="news" v-for="item in newsList" @click="changeRoute(item.id)" :key="item.id">
            <h3 class="title">{{ item.title }}</h3>
            <div class="box">
                <img :src="item.pic" alt="">
                <div class="item">
                    <h3>{{ item.subtitle }}</h3>
                    <p>{{ item.text }}<span>详细>></span></p>
                </div>
            </div>
        </div>
    </div>


</template>
<style lang="scss" scoped>
.news {
    width: 1280px;
    margin: 0 auto;
    margin-top: 55px;

    .title {
        width: 100%;
        height: 50px;
        line-height: 50px;
        font-size: 25px;
        color: #139ff4;
        border-bottom: 2px solid #139ff4;
    }

    .box {
        width: 100%;
        margin-top: 10px;
        display: flex;

        img {
            width: 250px;
            height: 200px;
        }

        .item {
            padding: 15px;

            h3 {
                font-weight: normal;
                font-size: 20px;
                padding-bottom: 15px;
            }

            p {
                height: 30px;
                line-height: 30px;

                span {
                    color: #139ff4;
                }
            }
        }
    }
}
</style>