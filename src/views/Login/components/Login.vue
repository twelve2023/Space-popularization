<script setup>
import ValidCode from '@/components/ValidCode.vue';
import 'element-plus/theme-chalk/el-message.css'
import { ElMessage } from 'element-plus';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/stores/user';
import { useTimeStore } from '@/stores/getTime';

// 眼睛
import { View, Hide} from '@element-plus/icons-vue';
// const passFlag=ref(false)//输入框类型标识
const addPassFlag=ref(false)//图标显示标识

const useTime = useTimeStore()
const userStore = useUserStore()
const validate = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请输入验证码'))
  } else if (value != code.value) {
    callback(new Error("验证码输入错误！"))
  } else {
    callback()
  }

}
// 表单校验
const form = ref({
  account: '',
  password: '',
  validCode: ''
})

// 存储验证码
const code = ref(null)
// 校验规则
const rules = {
  account: [
    { required: true, message: '用户名不能为空！', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '密码不能为空！', trigger: 'blur' }
  ],
  validCode: [{ validator: validate, trigger: 'blur' }]
}

// 统一表单校验
const router = useRouter()
const formRef = ref(null)
const doLogin = () => {
  const { account, password } = form.value
  formRef.value.validate(async (valid) => {
    if (valid) {
      await userStore.getUserInfo({ account: account, password: password })
      const res = userStore.userInfo
      if (res.length > 0) {
        // 2.登陆消息
        ElMessage({ type: 'success', message: '登陆成功！' })
        useTime.updateLastVisited()

        // 3.页面跳转
        router.replace({ path: '/' })
      } else {
        ElMessage({ type: 'error', message: '账户或密码错误！' })
      }

    }
  })
}

// 获取验证码
const getCode = (c) => {
  code.value = c
}

</script>
<template>
  <div>
    <section class="login-section">
      <div class="wrapper">
        <nav>
          <a href="javascript:;">用户登录</a>
        </nav>
        <div class="account-box">
          <div class="form">
            <el-form :model="form" :rules="rules" ref="formRef" label-position="right" label-width="60px" status-icon>
              <el-form-item prop="account" label="账户">
                <el-input v-model="form.account" autocomplete="off" />
              </el-form-item>
              <el-form-item prop="password" label="密码">
                <!-- <el-input v-model="form.password" type="password" autocomplete="off" /> -->

                <el-input v-model="form.password" :type="addPassFlag ? 'text' : 'password'">
                  <template #suffix>
                    <span @click="addPassFlag = !addPassFlag">
                      <el-icon v-if="addPassFlag">
                        <View />
                      </el-icon>
                      <el-icon v-else>
                        <Hide />
                      </el-icon>
                    </span>
                  </template>
                </el-input>


              </el-form-item>
              <el-form-item prop="validCode" label="验证码">
                <el-input v-model="form.validCode" autocomplete="off" style="width: 100px;margin-right:20px;flex:1" />
                <div style="flex:1">
                  <ValidCode @update:value="getCode" />
                </div>
              </el-form-item>
              <el-form-item label-width="22px">
                <el-checkbox size="large">
                  我已同意隐私条款和服务条款
                </el-checkbox>
              </el-form-item>
              <el-button size="large" class="subBtn" @click="doLogin">点击登录</el-button>
              <p class="register" @click="$router.push('/register')">免费注册</p>
            </el-form>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>
<style lang="scss" scoped>
.login-section {
  background: url('@/assets/worldImg/BannerImg/1.jpg') no-repeat center / cover;
  height: 488px;
  position: relative;

  .wrapper {
    width: 380px;
    background: #fff;
    position: absolute;
    left: 50%;
    top: 54px;
    transform: translate3d(100px, 0, 0);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);

    nav {
      font-size: 14px;
      height: 55px;
      margin-bottom: 20px;
      border-bottom: 1px solid #f5f5f5;
      display: flex;
      padding: 0 40px;
      text-align: right;
      align-items: center;

      a {
        flex: 1;
        line-height: 1;
        display: inline-block;
        font-size: 18px;
        position: relative;
        text-align: center;
      }
    }
  }
}

.subBtn {
  // background: #8bfae2;
  background: #3088ea;
  width: 100%;
  color: #fff;
}

.account-box {
  .toggle {
    padding: 15px 40px;
    text-align: right;

    a {
      color: #8bfae2;

      i {
        font-size: 14px;
      }
    }
  }

  .form {
    padding: 0 20px 20px 20px;

    .register {
      padding-top: 20px;
      padding-left: 10px;
      color: #3088ea;
    }

    &-item {
      margin-bottom: 28px;

      .input {
        position: relative;
        height: 36px;

        >i {
          width: 34px;
          height: 34px;
          background: #cfcdcd;
          color: #fff;
          position: absolute;
          left: 1px;
          top: 1px;
          text-align: center;
          line-height: 34px;
          font-size: 18px;
        }

        input {
          padding-left: 44px;
          border: 1px solid #cfcdcd;
          height: 36px;
          line-height: 36px;
          width: 100%;

          &.error {
            border-color: rgb(243, 97, 97);
          }

          &.active,
          &:focus {
            border-color: #8bfae2;
          }
        }

        .code {
          position: absolute;
          right: 1px;
          top: 1px;
          text-align: center;
          line-height: 34px;
          font-size: 14px;
          background: #f5f5f5;
          color: #666;
          width: 90px;
          height: 34px;
          cursor: pointer;
        }
      }

      >.error {
        position: absolute;
        font-size: 12px;
        line-height: 28px;
        color: rgb(243, 97, 97);

        i {
          font-size: 14px;
          margin-right: 2px;
        }
      }
    }

    .agree {
      a {
        color: #069;
      }
    }

    .btn {
      display: block;
      width: 100%;
      height: 40px;
      color: #fff;
      text-align: center;
      line-height: 40px;
      background: #3088ea;

      &.disabled {
        background: #cfcdcd;
      }
    }
  }

  .action {
    padding: 20px 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .url {
      a {
        color: #999;
        margin-left: 10px;
      }
    }
  }
}
</style>