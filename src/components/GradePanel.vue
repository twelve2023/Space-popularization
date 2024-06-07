<script setup>
import { useUserStore } from '@/stores/user';
import 'element-plus/theme-chalk/el-message.css'
import { ElMessage } from 'element-plus';
import { useRouter } from 'vue-router';
const userStore = useUserStore()
const router = useRouter()
// 面板封装
defineProps({
    gradeList: {
        type: Array,
        default: () => []
    },
    gradeTitle: {
        type: Object,
        default: ()=>{}
    }
})

const clickRouter = (path) => {

    if (userStore.userInfo.length > 0) {
        router.push(path)
    } else {
        ElMessage({ type: 'warning', message: '用户未登录，请先登录！' })
        router.push('/login')
    }
}
</script>
<template>
    <div class="grade">
        <h3 class="task" @click="$router.push(`/news/${gradeTitle.id}`)">{{ gradeTitle.title }}</h3>
        <div class="grade-content">
            <div class="grade-wrapper" v-for="item in gradeList" :key="item">
                <div class="grade-item" v-for="i in item" :key="i.pic" @click="clickRouter(`/detail/${i.id}`)">
                    <img :src="i.pic" alt="">
                    <div class="text">
                        <h3>{{ i.title }}</h3>
                        <ul>
                            <li><i></i>{{ i.text1 }}</li>
                            <li><i></i>{{ i.text2 }}</li>
                            <li><i></i>{{ i.text3 }}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.grade {
    width: 100%;
    height: 450px;


    .task {
        width: 1280px;
        font-size: 22px;
        margin: 0 auto;
        color: #fff;

        &:hover {
            color: #8bfae2;
        }
    }

    .grade-content {
        display: flex;
        justify-content: space-between;
        width: 1280px;
        height: 400px;
        margin: 0 auto;

        .grade-wrapper {
            color: #fff;
            width: 630px;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            .grade-item {
                width: 100%;
                height: 47%;

                display: flex;
                justify-content: space-between;

                img {
                    width: 150px;
                    height: 150px;
                    margin-right: 10px;
                    margin-top: 17px;
                }

                .text {
                    width: 455px;
                    font-weight: normal;
                    margin-left: 10px;
                    margin-top: 20px;

                    h3 {
                        font-size: 20px;
                        padding-bottom: 10px;

                        &:hover {
                            color: #8bfae2;
                        }
                    }

                    li {
                        padding: 7px 0px;
                        &:hover {
                            color: #8bfae2;
                        }

                        i {
                            margin-right: 6px;
                            display: inline-block;
                            width: 10px;
                            height: 10px;
                            line-height: 10px;
                            border-radius: 50%;
                            background-color: #b8b8b8;


                        }
                    }
                }

            }
        }

    }
}
</style>