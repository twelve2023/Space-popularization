<script setup>
import { useUserStore } from '@/stores/user';
import { useRouter, useRoute } from 'vue-router';
import { useTimeStore } from '@/stores/getTime';
const useTime = useTimeStore()
const userStore = useUserStore()
const router = useRouter()
const route = useRoute()

const confirm = () => {
  // 清除数据
  userStore.clearUserInfo()
 
  // 页面跳转
  router.push('/login')
}
</script>

<template>
  <div class="app-header-sticky">
    <div class="container">
      <div class="time">
        <p>用户上次访问时间:</p>
        <p>{{ useTime.lastVisited}}</p>
      </div>
      <RouterLink class="logo" to="/" />
      <!-- 导航区域 -->
      <ul class="app-header-nav ">
        <li class="home">
          <RouterLink :class="{ active: route.path == '/' }" to="/">首页</RouterLink>
        </li>
        <li>
          <RouterLink :class="{ active: route.path == '/layout' }" to="/layout">航天成就</RouterLink>
        </li>
        <li>
          <RouterLink :class="{ active: route.path == '/dream' }" to="/dream">中国航天梦</RouterLink>
        </li>
        <li>
          <RouterLink :class="{ active: route.path == '/astronaut' }" to="/astronaut">航天领航人</RouterLink>
        </li>
      </ul>
      <div class="search">
        <i class="iconfont icon-search"></i>
        <input type="text" placeholder="搜一搜">
      </div>
      <div class="login">
        <ul>
          <template v-if="userStore.userInfo[0]">
            <li><a href="javascript:;"><i class="iconfont icon-user"></i>{{ userStore.userInfo[0].userName }}</a></li>
            <li>
              <el-popconfirm @confirm="confirm" title="确认退出吗?" confirm-button-text="确认" cancel-button-text="取消">
                <template #reference>
                  <a href="javascript:;">退出登录</a>
                </template>
              </el-popconfirm>
            </li>
          </template>
          <template v-else>
            <li><a @click="$router.push('/login')">请先登录</a></li>
            <li><a href="javascript:;">帮助中心</a></li>
          </template>
        </ul>
      </div>
    </div>
  </div>
</template>


<style scoped lang='scss'>
.app-header-sticky {
  width: 100%;
  height: 70px;
  // position: relative;

  background-color: #151414;
  border-bottom: 1px solid #141313;

  .container {
    display: flex;
    align-items: center;

    .time {
      color: #cdcdcd;
      font-size: 12px;
      padding-left: 20px;
      padding-top: 10px;

      &:hover {
        color: #8bfae2;

      }

    }

    .logo {
      width: 100px;
      height: 80px;
      margin-left: 70px;
      background: url("@/assets/logo.png") no-repeat right 1px;
      background-size: 62px auto;
    }

    .search {
      width: 170px;
      height: 32px;
      // position: relative;
      border-bottom: 1px solid #e7e7e7;
      line-height: 32px;

      .icon-search {
        font-size: 15px;
        margin-left: 5px;
        color: #666;

      }

      input {
        width: 80px;
        padding-left: 5px;
        color: #666;
        background-color: #151414;
      }

      &:hover {
        .icon-search {
          color: #8bfae2;

        }

        border-bottom: 1px solid #8bfae2;

      }
    }


  }
}

.login {
  position: absolute;
  top: 13px;
  right: 30px;

  ul {
    margin-left: 100px;
    display: flex;
    height: 53px;
    width: 200px;
    justify-content: flex-end;
    align-items: center;

    li {
      a {
        padding: 0 15px;
        color: #cdcdcd;
        line-height: 1;
        display: inline-block;

        i {
          font-size: 14px;
          margin-right: 2px;
        }

        &:hover {
          color: #8bfae2;
        }
      }

      ~li {
        a {
          border-left: 2px solid #666;
        }
      }
    }
  }
}

.app-header-nav {
  width: 820px;
  display: flex;
  padding-left: 40px;
  position: relative;
  z-index: 998;

  li {
    margin-right: 40px;
    width: 80px;
    text-align: center;


    a {
      font-size: 16px;
      line-height: 32px;
      height: 32px;
      display: inline-block;
      color: #fff;

      &:hover {
        color: #8bfae2;
        border-bottom: 1px solid #8bfae2;
      }
    }

    .active {
      color: #8bfae2;
      border-bottom: 1px solid #8bfae2;
    }
  }

}
</style>