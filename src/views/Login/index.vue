<script setup>

</script>


<template>
  <div>
    <header class="login-header">
      <div class="container m-top-20">
        <h1 class="logo">
          <RouterLink to="/"></RouterLink>
        </h1>
        <RouterLink class="entry" to="/">
          进入网站首页
          <i class="iconfont icon-angle-right"></i>
          <i class="iconfont icon-angle-right"></i>
        </RouterLink>

      </div>
    </header>
    <RouterView />
    <footer class="login-footer">
      <div class="container">
        <p>
          <a href="javascript:;">机构职能</a>
          <a href="javascript:;">政策公告</a>
          <a href="javascript:;">国际合作</a>
          <a href="javascript:;">重大任务</a>
          <a href="javascript:;">访谈直播</a>
          <a href="javascript:;">意见征集</a>
          <a href="javascript:;">咨询建议</a>
        </p>
        <p>CopyRight © 中国航天</p>
      </div>
    </footer>
  </div>
</template>

<style scoped lang='scss'>
.login-header {
  background: #fff;
  border-bottom: 1px solid #e4e4e4;

  .container {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
  }

  .logo {
    width: 200px;

    a {
      display: block;
      height: 132px;
      width: 100%;
      text-indent: -9999px;
      background: url("@/assets/logo.png") no-repeat center 0px/contain;
      margin-left: 30px;
    }
  }


  .entry {
    width: 137px;
    font-size: 18px;
    padding-bottom: 40px;
    margin-right: 36px;
  }

  i {
    font-size: 14px;
    color: #3088ea;
    letter-spacing: -5px;
  }
}







.login-footer {
  padding: 30px 0 50px;
  background: #fff;

  p {
    text-align: center;
    color: #999;
    padding-top: 20px;

    a {
      line-height: 1;
      padding: 0 10px;
      color: #999;
      display: inline-block;

      ~a {
        border-left: 1px solid #ccc;
      }
    }
  }
}
</style>