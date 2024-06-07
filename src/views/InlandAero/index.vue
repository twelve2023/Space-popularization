<script setup>
import BannerView from '@/components/BannerView.vue'

import NewsPanel from '@/components/NewsPanel.vue'
import TitlePanel from '@/components/TitlePanel.vue'
import VedioPanel from '@/components/VedioPanel.vue'
import GradePanel from '@/components/GradePanel.vue'

import { ref } from 'vue';
import img1 from '@/assets/inlandImg/1.jpg'
import img2 from '@/assets/inlandImg/2.jpg'
import img3 from '@/assets/inlandImg/3.jpg'
import img4 from '@/assets/inlandImg/4.jpg'
import img5 from '@/assets/inlandImg/5.jpg'
import b_img from '@/assets/inlandImg/7.jpg'
import new2 from '@/assets/inlandImg/new2.webp'
import new2_b from '@/assets/inlandImg/new2_b.webp'
import new2_r_t from '@/assets/inlandImg/new2_r_t.jpeg'
import new2_r_b from '@/assets/inlandImg/new2_r_b.webp'
import t1 from '@/assets/taskImg/1.jpg'
import t2 from '@/assets/taskImg/2.jpg'
import t3 from '@/assets/taskImg/3.jpg'
import t4 from '@/assets/taskImg/4.jpg'
import v1 from '@/assets/vedioImg/1.png'
import v2 from '@/assets/vedioImg/2.jpg'
import v3 from '@/assets/vedioImg/3.png'
import v4 from '@/assets/vedioImg/4.png'
import v5 from '@/assets/vedioImg/5.png'
import v6 from '@/assets/vedioImg/6.png'

const gradeTitle=ref({
   title:'重大成就',
   id:'1'
})

const bannerList = ref([
   {
      pic: img1,
      title:'神州',
      text:'中国载人航天飞船的命名。寓意“神奇的天河之舟”,也是神州的谐音,象征飞船研制是四面八方、各行业大协作的产物，承载着中华民族的飞天梦'
   },
   {
      pic: img2,
      title:'天宫',
      text:'中国载人航空站的命名。又名紫薇宫，是传说中天帝居住的宫殿。以此命名中国载人航空站，一方面寓意对未知天空的探索，另一方面也有让宇航员“在太空中生活得舒服”之意'
   },
   {
      pic: img3,
      title:'天问',
      text:'中国行星探测任务的命名。出自屈原的长诗《天问》，屈原在诗中一共提出了170多个问题，对太阳月亮升起落下、日月星辰形态位置都发出了追问。命名为天问，有让古人的追寻与惊人的探索遥相呼应之意'
   },
   {
      pic: img4,
      title:'祝融',
      text:'天问一号任务火星车的命名。祝融在中国传统文化中被称为最早的火神，首辆火星车命名为祝融，寓意点燃我国星际探索的火种，指引人类对浩瀚星空、宇宙未知的接续探索和自我超越'
   },
   {
      pic: img5,
      title:'嫦娥',
      text:'来源于著名的神话故事嫦娥奔月，它有着古人对于星辰的崇拜与向往。2004年2月25日，绕月探测工程被命名为“嫦娥工程”。嫦娥工程分三期实施，俗称“绕落”“回”探月工程“三步走”'
   },
])

const newsList = ref([
   {
      title: "精选新闻",
      subTitle: '精彩点播',
      list: {
         l_pic: img3,
         l_id:'1',
         l_title: '一箭四星！长征六号丙运载火箭首飞成功',
         l_content: '北京时间2024年5月7日11时21分，我国在太原卫星发射中心成功发射长征六号丙运载火箭，搭载发射的海王星01星、智星一号C星、宽幅光学卫星和高分视频卫星顺利进入预定轨道，飞行试验任务获得圆满成功。',
         b_pic: b_img,
         b_id:'2',
         b_title: '嫦娥六号探测器成功实施近月制动顺利进入环月轨道飞行',
         b_content: '北京时间5月8日10时12分，在北京航天飞行控制中心的精确控制下，嫦娥六号探测器成功实施近月制动，顺利进入环月轨道飞行。',
         r_t_pic: img1,
         r_t_id:'3',
         r_t_title: '嫦娥六号发射任务圆满成功 开启月球背面采样返回之旅',
         r_b_pic: img2,
         r_b_id:'4',
         r_b_title: '中国向巴基斯坦交接嫦娥六号任务巴基斯坦立方星数据'
      }
   },
   {
      title: "最新新闻",
      subTitle: '要闻动态',
      list: {
         l_pic: new2,
         l_id:'5',
         l_title: '亚洲最大、我国首个！火箭发动机试验台上新了',
         l_content: '5月15日，由航天科技集团六院101所研制建设的，亚洲最大、我国首个发动机垂直高空模拟试验台考台点火试验取得圆满成功。本次点火试验的圆满成功，标志着试验台完全建成并具备试验能力,将为我国重大航天工程提供重要保障条件和重要技术支持。',
         b_pic: new2_b,
         b_id:'2',
         b_title: '从神舟一号到十八号，见证中国驾辇游天之旅',
         b_content: '2024年4月25日20时59分，长征二号F遥十八运载火箭搭载神舟十八号载人飞船从酒泉卫星发射中心成功升空。',
         r_t_pic: new2_r_t,
         r_t_id:'3',
         r_t_title: '研报新知| 航天新质生产力赋能数字地球，这家中科院下属企业业绩强势增长',
         r_b_pic: new2_r_b,
         r_b_id:'4',
         r_b_title: '向100冲刺！长三乙火箭进入新一轮高密度发射阶段'
      }
   }
]
)
const gradeList = ref([
   [
      {
         pic: t1,
         id:'12',
         title: '探月与深空探索',
         text1: '嫦娥四号着陆器和“玉兔二号”巡视器完成自主唤醒，开始第十...',
         text2: '我国科研人员成功实现对月球表面月尘累积质量的测量',
         text3: '嫦娥四号探测器完成第九月昼科学探测工作 进入第九月夜'
      },
      {
         pic: t2,
         id:'12',
         title: '载人航天工程',
         text1: '新飞船试验船、长五B发射场工作有序推进',
         text2: '载人月球探测工作稳步推进——有望在月面建设科学考察站',
         text3: '永远的“天宫” 不朽的传奇'
      }
   ],
   [
      {
         pic: t3,
         id:'12',
         title: '高分辨率对地观测系统',
         text1: '高分卫星运行与数据分发报告-2020年8月',
         text2: '高分多模卫星的“朋友圈”',
         text3: '高分卫星说：山川异域，风月同天'
      },
      {
         pic: t4,
         id:'12',
         title: '北斗导航系统',
         text1: '我国成功发射两颗北斗三号全球组网卫星',
         text2: '优化总设计师团队——确保2020年北斗三号工程圆满收官',
         text3: '我国成功发射两颗北斗三号卫星 北斗系统“一箭双星”'
      }
   ]
])
const vedioList =ref([
   {
      pic:v1,
      title:'国际月球科研站'
   },
   {
      pic:v2,
      title:'以星辰为笔，书写浪漫传奇'
   },
   {
      pic:v3,
      title:'2024年“中国航天日”官方宣传片'
   },
   {
      pic:v4,
      title:'探月之旅'
   },
   {
      pic:v5,
      title:'嫦娥七号任务国际载荷遴选结果'
   },
   {
      pic:v6,
      title:'嫦娥六号任务宣传片'
   }
])

</script>
<template>
   <div>
      <!-- <LayoutHeader /> -->
      <div class="product">
         <div class="pro_container">
            <div class="title">
               <h3>中国举世瞩目的航天成就</h3>
               <p>中国航天成就举世瞩目，从东方红卫星的升空，
                  到嫦娥探月、天问探火，再到天和核心舱的成功发射，每一步都展现了国家科技实力与航天精神。
                  中国航天不仅为国家赢得了荣誉，更在推动全球航天科技发展方面发挥了重要作用。</p>
            </div>
            <GradePanel :grade-list="gradeList" :grade-title="gradeTitle"/>
         </div>
      </div>
      <NewsPanel v-for="item in newsList" :title="item.title" :sub-title="item.subTitle" :news-list="item.list"
         :key="item.title" />
       <BannerView :banner-list="bannerList" style="margin-top: 90px;"/>
      <TitlePanel  title="航天视频" sub-title="视频点映">
         <VedioPanel :vedio-list="vedioList"/>
      </TitlePanel>
      <!-- <LayoutFooter /> -->
   </div>
</template>
<style scoped lang="scss">
.product {
   position: relative;
   //margin-top: 90px;
   width: 100%;
   height: 800px;
   background: linear-gradient(101.59deg, rgba(0, 0, 0) 0%, rgba(0, 0, 0, 0.3) 58.51%), url('@/assets/inlandImg/produce.jpg');
   background-size: cover;
   background-repeat: no-repeat;
   background-position: center;
   overflow: hidden;

   &:hover {
      .pro_container {
         bottom: 0px;
      }
   }

   .pro_container {
      position: absolute;
      bottom: -445px;
      left: 0;
      width: 100%;
      height: 750px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      transition: all 1s;


      .title {
         width: 520px;
         height: 200px;
         margin-left: 200px;
         color: #fff;


         h3 {
            font-size: 42px;
            font-weight: 700;
            padding-bottom: 20px;
         }

         p {
            font-size: 18px;
         }
      }

     
   }
}


</style>