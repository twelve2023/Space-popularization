# vue-project

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

```js
<script setup>
</script>

<template>
  <div class="app-header-sticky">
    <div class="container">
      <RouterLink class="logo" to="/" />
      <!-- 导航区域 -->
      <ul class="app-header-nav ">
        <li class="home">
          <RouterLink to="/">首页</RouterLink>
        </li>
        <li>
          <RouterLink to="/">中国航天</RouterLink>
        </li>
        <li>
          <RouterLink to="/">世界航天</RouterLink>
        </li>
        <li>
          <RouterLink to="/">航天人物</RouterLink>
        </li>
      </ul>

      <div class="search">
        <i class="iconfont icon-search"></i>
        <input type="text" placeholder="搜一搜">
      </div>
    </div>
  </div>
</template>


<style scoped lang='scss'>
.app-header-sticky {
  width: 100%;
  height: 70px;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
  background-color: #151414;
  border-bottom: 1px solid #141313;
  .container {
    display: flex;
    align-items: center;
  }

  .logo {
    width: 200px;
    height: 80px;
    background: url("@/assets/logo.png") no-repeat right 1px;
    background-size: 62px auto;
  }

  .search {
    width: 170px;
    height: 32px;
    position: relative;
    border-bottom: 1px solid #e7e7e7;
    line-height: 32px;

    .icon-search {
      font-size: 15px;
      margin-left: 5px;
      color: #666;

    }

    input {
      width: 140px;
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

.app-header-nav {
  width: 820px;
  display: flex;
  padding-left: 40px;
  position: relative;
  z-index: 998;

  li {
    margin-right: 40px;
    width: 65px;
    text-align: center;


    a {
      font-size: 16px;
      line-height: 32px;
      height: 32px;
      display: inline-block;
      color: #fff;

      &:hover {
        color: #8bfae2;
        // border-bottom: 1px solid #27ba9b;
        border-bottom: 1px solid #8bfae2;
      }
    }

    .active {
      color: red;
      border-bottom: 1px solid red;
    }
  }
}
</style>
```
