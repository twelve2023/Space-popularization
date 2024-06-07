<script setup>
defineProps({
  bannerList: {
    type: Object,
    default: () => { }
  }
})
</script>
<template>
  <div class="banner">
    <div class="mask">
    </div>
    <el-carousel height="700px" motion-blur>
      <el-carousel-item v-for="item in bannerList" :key="item.pic">
        <img :src="item.pic" alt="">
        <div class="box">
          <h3>{{ item.title }}</h3>
          <p>{{ item.text }}</p>
        </div>
      </el-carousel-item>
    </el-carousel>

  </div>

</template>
<style scoped lang="scss">
.banner {
  position: relative;
  width: 100%;
  height: 700px;

  .mask {
    width: 100%;
    height: 700px;
    position: absolute;
    top: 0px;
    left: 0;
    background: linear-gradient(101.59deg, rgba(0, 0, 0) 0%, rgba(0, 0, 0, 0.1) 45%);
    /* 半透明遮罩层 */
    z-index: 9;
  }

  .el-carousel__item {
   

    img {
      width: 100%;
      height: 100%;
    }

    .box {
      position: absolute;
      top: 160px;
      left: 220px;
      width: 500px;
      height: 600px;
      z-index: 99;
      color: #fff;

      h3 {
        font-size: 63px;
        font-weight: 700;
      }


      p {
        margin-top: 30px;
        line-height: 1.65em;
        font-size: 17px;
        padding-bottom: 5px;
      }


    }
  }
}


  </style>