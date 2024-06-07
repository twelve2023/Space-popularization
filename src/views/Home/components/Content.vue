<script setup>

defineProps({
  contentList: {
    type: Object,
    default: () => { }
  },
  currentIndex: Number
})

</script>

<template>

  <div class="content animate__animated" :class="{ animate__bounceInUp: contentList.count === currentIndex }">
    <h3>{{ contentList.title }}</h3>
    <div class="text">
      <p>{{ contentList.text[0] }}</p>
      <p>{{ contentList.text[1] }}</p>
      <p>{{ contentList.text[2] }}</p>
    </div>
    <el-button class="btn" @click="$router.push(contentList.path)">了解更多 +</el-button>
  </div>
</template>

<style scoped lang="scss">
.content {
  position: absolute;
  top: 250px;
  left: 170px;
  width: 600px;
  height: 600px;
  z-index: 2;
  color: #fff;

  h3 {
    font-size: 63px;
    font-weight: 700;
  }

  .text {
    margin-top: 30px;

    p {
      line-height: 1.65em;
      font-size: 17px;
      padding-bottom: 5px;
    }
  }

  .btn {
    background-color: #d83933;
    color: #fff;
    border: #d83933;
    margin-top: 50px;
    width: 180px;
    height: 50px;
    font-size: 20px;

  }
}
</style>