<script setup>
import { useUserStore } from '@/stores/user';
import 'element-plus/theme-chalk/el-message.css'
import { ElMessage } from 'element-plus';
import { useRouter } from 'vue-router';
const userStore=useUserStore()
const router=useRouter()
// 面板封装
defineProps({
  title: {
    type: String,
    default: ''
  },
  subTitle: {
    type: String,
    default: ''
  },
  newsList:{
    type:Object,
    default:()=>{}
  }
})

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
  <div class="home-panel">
    <div class="container">
      <div class="head">
        <!-- 主标题和副标题 -->
        <h3>
          {{ title }}<small>{{ subTitle }}</small>
        </h3>
      </div>
      <!-- 主体内容区域 -->
      <div class="news">
        <div class="right" @click="clickRouter(`/detail/${newsList.l_id}`)">
          <img :src="newsList.l_pic" alt="">
          <div class="news-title">
            <small>5分钟阅读</small>
            <h3>{{ newsList.l_title }}</h3>
            <p>{{ newsList.l_content }}</p>
          </div>
        </div>
        <div class="left">
          <div class="left-l" @click="clickRouter(`/detail/${newsList.b_id}`)">
            <img :src="newsList.b_pic" alt="">
            <div class="l-title">
              <small>4分钟阅读</small>
              <h3>{{ newsList.b_title }}</h3>
              <p>{{ newsList.b_content }}</p>
            </div>
          </div>
          <div class="left-r">
            <div class="r-top" @click="clickRouter(`/detail/${newsList.r_t_id}`)">
              <img :src="newsList.r_t_pic" alt="">
              <div class="r-top-title">
                <small>3分钟阅读</small>
                <h3>{{ newsList.r_t_title }}</h3> 
              </div>
            </div>
            <div class="r-bot" @click="clickRouter(`/detail/${newsList.r_b_id}`)">
              <img :src="newsList.r_b_pic" alt="">
              <div class="r-bot-title">
                <small>3分钟阅读</small>
                <h3>{{ newsList.r_b_title }}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped lang='scss'>

@media screen and (max-width: 768px) {
  .news {
    flex-direction: column;
  }
 
  .right, .left {
    width: 100%;
    order: 1;
  }
 
  .left {
    order: 2;
  }
}

.home-panel {
  background-color: #fff;
  padding-top: 70px;

  .container {
    width: 1280px;
    

    .head {
      padding: 40px 0;
      display: flex;
      align-items: flex-end;

      h3 {
        flex: 1;
        font-size: 35px;
        font-weight: 700;
        margin-left: 6px;
        height: 35px;
        line-height: 35px;

        small {
          font-size: 16px;
          color: #999;
          margin-left: 20px;
          font-weight: normal;
        }
      }
    }

    .news {
      display: flex;
      justify-content: space-between;
      width: 100%;
      height: 450px;
      color: #fff;

      .right {
        position: relative;
        width: 49%;
        height: 100%;
        overflow: hidden;

        img {
          width: 100%;
          height: 100%;

        }

        .news-title {
          position: absolute;
          // bottom: 10px;
          bottom: -55px;
          left: 15px;
          transition: all 1s;

          h3 {
            font-size: 20px;
            padding-bottom: 25px;
          }
        }

        &:hover {
          .news-title {
            bottom: 10px;
          }
        }

      }

      .left {
        width: 49%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        overflow: hidden;

        .left-l {
          position: relative;
          width: 49%;
          height: 100%;

          img {
            width: 100%;
            height: 100%;
          }

          .l-title {
            transition: all 1s;
            position: absolute;
            left: 20px;
            bottom: -57px;

            h3 {
              font-size: 20px;
              padding-bottom: 25px;
            }
          }

          &:hover {
            .l-title {
              bottom: 10px;
            }
          }
        }

        .left-r {
          width: 49%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;

          .r-top {
            position: relative;
            width: 100%;
            height: 49%;

            .r-top-title {
              position: absolute;
              left: 20px;
              bottom: 10px;
              h3{
                font-size: 20px;
              }
            }

            img {
              width: 100%;
              height: 100%;
            }

          }

          .r-bot {
            position: relative;
            width: 100%;
            height: 49%;
            .r-bot-title {
              position: absolute;
              left: 20px;
              bottom: 10px;
              h3{
                font-size: 20px;
              }
            }

            img {
              width: 100%;
              height: 100%;
            }
          }
        }
      }
    }
  }


}
</style>