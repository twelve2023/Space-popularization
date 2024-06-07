<script setup>
import { ref, reactive } from 'vue';
import 'element-plus/theme-chalk/el-message.css'
import { ElMessage } from 'element-plus';
import { useRouter } from 'vue-router';
import { getRegister } from '@/api/login';

// 眼睛
import { View, Hide} from '@element-plus/icons-vue';
// const passFlag=ref(false)//输入框类型标识
const addPassFlag=ref(false)//图标显示标识
const checkPassFlag=ref(false)//图标显示标识

const validatePass = (rule, value, callback) => {
    if (value === '') {
        callback(new Error('请输入密码'))
    } else {
        if (ruleForm.checkPass !== '') {
            if (!ruleFormRef.value) return
            ruleFormRef.value.validateField('checkPass')
        }
        callback()
    }
}
const validatePass2 = (rule, value, callback) => {
    if (value === '') {
        callback(new Error('请再次输入密码'))
    } else if (value !== ruleForm.password) {
        callback(new Error("两次输入密码不一致!"))
    } else {
        callback()
    }
}

// 表单校验
const ruleForm = reactive({
    account: '',
    userName: '',
    password: '',
    checkPass: ''
})


// 重置表单
const resetForm = () => {
    ruleForm.account = ''
    ruleForm.userName = ''
    ruleForm.password = ''
    ruleForm.checkPass = ''
}


// 校验规则
const rules = {
    account: [
        { required: true, message: '账户不能为空！', trigger: 'blur' }
    ],
    userName: [
        { required: true, message: '用户名不能为空！', trigger: 'blur' }
    ],
    password: [{ validator: validatePass, trigger: 'blur' }],
    checkPass: [{ validator: validatePass2, trigger: 'blur' }],
}

// 统一表单校验
const router = useRouter()
const ruleFormRef = ref(null)
const doRegister = () => {
    const { account, userName, password } = ruleForm
    // const last_visited_time = new Date().toISOString();
    ruleFormRef.value.validate(async (valid) => {
        if (valid) {
            // 1.连接后端，获取数据库数据
            const res = await getRegister({ account: account, userName: userName, password: password })
            console.log(res.data.insertId, '555555555555555');
            if (res.data.insertId > 0) {
                // 2.登陆消息
                ElMessage({ type: 'success', message: '注册成功，请登录！' })
                // 3.页面跳转
                router.replace({ path: '/login' })
            } else {
                ElMessage({ type: 'error', message: '该账户已存在！' })
            }

        }
    })
}
</script>
<template>
    <div>
        <section class="login-section">
            <div class="wrapper">
                <nav>
                    <a href="javascript:;">用户注册</a>
                </nav>
                <div class="account-box">
                    <div class="form">
                        <el-form :model="ruleForm" :rules="rules" ref="ruleFormRef" label-position="right"
                            label-width="80px" status-icon>
                            <el-form-item prop="account" label="账户">
                                <el-input v-model="ruleForm.account" autocomplete="off" />
                            </el-form-item>
                            <el-form-item prop="userName" label="用户名">
                                <el-input v-model="ruleForm.userName" autocomplete="off" />
                            </el-form-item>
                            <el-form-item prop="password" label="密码">
                                <!-- <el-input v-model="ruleForm.password" autocomplete="off" /> -->

                                <el-input v-model="ruleForm.password" :type="addPassFlag ? 'text' : 'password'">
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
                            <el-form-item prop="checkPass" label="确认密码">
                                <!-- <el-input v-model="ruleForm.checkPass" autocomplete="off" /> -->
                                <el-input v-model="ruleForm.checkPass" :type="checkPassFlag ? 'text' : 'password'">
                                    <template #suffix>
                                        <span @click="checkPassFlag = !checkPassFlag">
                                            <el-icon v-if="checkPassFlag">
                                                <View />
                                            </el-icon>
                                            <el-icon v-else>
                                                <Hide />
                                            </el-icon>
                                        </span>
                                    </template>
                                </el-input>
                            </el-form-item>
                            <el-form-item>
                                <el-button class="subBtn" @click="doRegister">注册</el-button>
                                <el-button @click="resetForm">重置</el-button>
                            </el-form-item>
                            <p class="login" @click="$router.push('/login')">前往登录</p>
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
    color: #fff;
    margin-right: 30px;
    margin-left: 30px;
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

        .login {

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