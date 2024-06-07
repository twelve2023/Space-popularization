<script setup>
import LayoutFixed from './components/LayoutFixed.vue'
import Content from '@/views/Home/components/Content.vue'
import img1 from '@/assets/homeImg/1.webp'
import img4 from '@/assets/homeImg/3.webp'
import img3 from '@/assets/homeImg/4.webp'
import img5 from '@/assets/homeImg/5.jpg'
import { ref } from 'vue'


const contentList = ref([
  {
    pic:img1,
    title:"人类在太空的足迹",
    text:['人类的太空足迹始于1961年尤里·加加林的历史性太空飞行。',
    '此后，人类登上月球、构建了国际空间站，开展了数百次载人和无人航天任务。',
    '这些壮举展现了人类勇气与科技的辉煌结合，同时拓展了我们对宇宙的认识。'],
    count:0,
    path:'/'
  },
  {
    pic:img5,
    title:"中国航天事业的发展",
    text:['中国航天在过去几十年里取得了巨大的成就，包括成功发射了',
    '载人航天飞船、月球探测器、火星探测器等。中国航天的发展不仅对国家',
    '科技实力的提升有着重要意义，也为全球航天事业做出了积极贡献。'],
    count:1,
    path:'/layout'
  },
  {
    pic:img3,
    title:"中国航天梦",
    text:['一代代航天人仰望星空，勇攀高峰，',
    '将个人梦想融进祖国的航天事业，攻克一个又一个技术难关，',
    '在太空中不断刷新中国高度。'],
    count:2,
    path:'/dream'
  },
  {
    pic:img4,
    title:"那些跨越太空的航天英雄",
    text:['太空航天英雄是人类探索未知的先锋，他们勇敢无畏，承担着巨大的责任。',
    '他们的勇气和智慧让我们窥见宇宙的奥秘，为人类的进步开辟了新的可能性。',
    '他们是时代的英雄，值得我们永远的尊敬和纪念。'],
    count:3,
    path:'/astronaut'
  }
])
const carouselRef = ref(null);
let lastScrollTime = 0;


const handleWheel = (event) => {
  const currentTime = Date.now();
  const delta = Math.sign(event.deltaY);
  
  if (currentTime - lastScrollTime > 500) { // 500ms 的间隔
    if (delta > 0) {
      carouselRef.value.next();
    
    } else if (delta < 0) {
      carouselRef.value.prev();
      
     
    }
    lastScrollTime = currentTime;
  }
  
};

// 创建响应式的currentIndex变量
const currentIndex = ref(0);
 
// 处理轮播图的change事件
function handleCarouselChange(val) {
  // val是轮播图的新索引
  currentIndex.value = val;
  console.log(currentIndex.value,'33333333333');
}

</script>

<template>
  <div>
    <LayoutFixed />
    <div class="demonstration" @wheel="handleWheel">
      <el-carousel @change="handleCarouselChange" height="100vh" direction="vertical" :autoplay="false" ref="carouselRef" :loop="false"
        indicator-position="none">
        <el-carousel-item v-for="item in contentList" :key="item.pic">
          <img class="img" :src="item.pic" alt="">
          <div class="mask">
          <Content :content-list="item" :current-index="currentIndex"/>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<style scoped lang="scss">
/* 设置轮播图容器铺满整个页面 */
.demonstration {
  width: 100%;
  height: 100vh;

  img {
    width: 100%;
    height: 100%;

  }
}

.mask {
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  /* 半透明遮罩层 */
  z-index: 1;

 
 
}
</style>