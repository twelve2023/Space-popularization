import { defineStore } from "pinia";
import { ref } from "vue";
import { getLogin } from '@/api/login';

export const useUserStore=defineStore('user',()=>{
    // 定义管理用户数据的state
    const userInfo=ref([])

    // 定义获取接口数据的action函数
    const getUserInfo=async({account:account,password:password})=>{
        const res=await getLogin({account:account,password:password})
      console.log(res.data,'555555555555555');
      userInfo.value=res.data
    }

    // 退出登录，清除数据
    const clearUserInfo=()=>{
        userInfo.value=[]
    }

    return {
       
        userInfo,
        getUserInfo,
        clearUserInfo
       
    }
},{
    persist: true,
  })