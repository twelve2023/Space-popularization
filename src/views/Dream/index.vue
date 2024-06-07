<script setup>
import GradePanel from '@/components/GradePanel.vue';
import BannerView from '@/components/BannerView.vue';
import NewsPanel from '@/components/NewsPanel.vue';

import { ref } from 'vue'
import b1 from '@/assets/worldImg/BannerImg/1.jpg'
import b2 from '@/assets/worldImg/BannerImg/2.jpg'
import b3 from '@/assets/worldImg/BannerImg/3.jpg'
import b4 from '@/assets/worldImg/BannerImg/4.jpg'


import l_img from '@/assets/worldImg/newsImg/1.jpg'
import b_img from '@/assets/worldImg/newsImg/2.jpg'

import t1 from '@/assets/taskImg/1.jpg'
import t2 from '@/assets/taskImg/2.jpg'
import t3 from '@/assets/taskImg/3.jpg'
import t4 from '@/assets/taskImg/4.jpg'
const gradeList = ref([
    [
        {
            pic: t1,
            id: '13',
            title: '探索浩瀚宇宙：中国航天发展迈上新台阶',
            text1: '从“两弹一星”到“载人航天”，从“北斗组网”到“嫦娥探月...',
            text2: '2018年，北斗导航卫星全年成功发射18颗，全球...',
            text3: '风云二号H星及风云三号D星正式交付，8颗风云气象...'
        },
        {
            pic: t2,
            id: '13',
            title: '传承航天精神：“越奋斗才会越强大”',
            text1: '“中国航天事业正是梦想、创新与实干的结合，是传承和...',
            text2: '亿万颗心，牵挂航天；千万双手，托举航天。',
            text3: '从“两弹一星”到“载人航天”再到“北斗、探月”，中国...'
        }
    ],
    [
        {
            pic: t3,
            id: '13',
            title: '共享发展成果：航天创造人类更加美好的未来',
            text1: '璀璨的烟花绽放在湘江之滨，古老中国...',
            text2: '国家航天局主持发布《中国航天助力联合国2030...',
            text3: '中国航天的大门再次向世界敞开，航天国际合作的步...'
        },
        {
            pic: t4,
            id: '13',
            title: '北斗导航系统',
            text1: '我国成功发射两颗北斗三号全球组网卫星',
            text2: '优化总设计师团队——确保2020年北斗三号工程圆满收官',
            text3: '我国成功发射两颗北斗三号卫星 北斗系统“一箭双星”'
        }
    ]
])
const gradeTitle = ref({
    title: '航天梦建设',
    id: '2'
})


const bannerList = ref([
    {
        pic: b1,
        title: '神州',
        text: '中国载人航天飞船的命名。寓意“神奇的天河之舟”,也是神州的谐音,象征飞船研制是四面八方、各行业大协作的产物，承载着中华民族的飞天梦'
    },
    {
        pic: b2,
        title: '天宫',
        text: '中国载人航空站的命名。又名紫薇宫，是传说中天帝居住的宫殿。以此命名中国载人航空站，一方面寓意对未知天空的探索，另一方面也有让宇航员“在太空中生活得舒服”之意'
    },
    {
        pic: b3,
        title: '天问',
        text: '中国行星探测任务的命名。出自屈原的长诗《天问》，屈原在诗中一共提出了170多个问题，对太阳月亮升起落下、日月星辰形态位置都发出了追问。命名为天问，有让古人的追寻与惊人的探索遥相呼应之意'
    },
    {
        pic: b4,
        title: '天问',
        text: '中国行星探测任务的命名。出自屈原的长诗《天问》，屈原在诗中一共提出了170多个问题，对太阳月亮升起落下、日月星辰形态位置都发出了追问。命名为天问，有让古人的追寻与惊人的探索遥相呼应之意'
    }
])

const newsList = ref({
    title: "精选新闻",
    subTitle: '精彩点播',
    list: {
        l_pic: l_img,
        l_title: '中国空间站未来可期',
        l_id: '10',
        l_content: '畅想空间站的无限可能，太空旅游、太空教育研发中心、太空绿色循环生态系统、太空国际合作站、中国太空站历史演变馆、太空中式古典建筑群。冲太空漫步到星辰探索，中国航天事业一直不断创造奇迹。',
        b_pic: b_img,
        b_id: '11',
        b_title: '中国梦·航天梦',
        b_content: '极目楚天，共镶汉星。2023年4月24日，第八个航天日主题:“格物致知，叩问苍穹”。中国空间站未来可期。',
        r_t_pic: b1,
        r_t_id: '3',
        r_t_title: '中国航天日 | 极目楚天，共镶汉星，格物致知，叩问苍穹！',
        r_b_pic: b2,
        r_b_id: '4',
        r_b_title: '冲太空漫步到星辰探索，中国航天事业一直不断创造奇迹。'
    }
})
</script>
<template>
    <div>
        <!-- <LayoutHeader /> -->
        <div class="product">
            <div class="pro_container">
                <div class="title">
                    <h3>中国梦闪耀太空</h3>
                    <p>嫦娥探月、北斗组网，火箭飞天、卫星遨游……太空探索永无止境！
                        探索浩瀚宇宙，发展航天事业，建设航天强国，是我们不懈追求的航天梦。
                        4月24日是第四个中国航天日，当前，中国航天事业蓬勃发展，探索浩瀚宇宙的伟大事业更加行稳致远，航天梦想实现的脚步越来越近。</p>
                </div>
                <GradePanel :grade-list="gradeList" :grade-title="gradeTitle" />
            </div>
        </div>
        <NewsPanel :title="newsList.title" :sub-title="newsList.subTitle" :news-list="newsList.list" />
        <BannerView :banner-list="bannerList" style="margin-top: 90px;" />
        <div class="dream">
            <h3 class="title">中国梦·新征程</h3>
            <div class="line"></div>
            <div class="collect-intro">
                <p>每个人的心中都有一个宇航梦，在你心里，太空是什么样子的？</p>
                <p>是少年派里的璀璨荧光，还是奥特曼星球的幼儿园？</p>
                <p>你心里可能有一万个答案，可是却没有地方诉说，机会来了！</p>
                <p>中国航天局发出中国梦·新征程征集令，
                    向你征集关于航天梦的多媒体奇趣作品，
                    不仅有丰厚奖品等着你，
                    你还有机会成为我们的特约科普作者，
                    还等什么？马上参加吧！
                </p>

            </div>
            <div class="text">
                <h5>活动时间</h5>
                <p>2024.4.11-2024.5.31</p>
            </div>
            <div class="text">
                <h5>征集内容</h5>
                <p> 你的原创作品可以涉及太空旅游、太空教育研发中心、太空绿色循环生态系统、太空国际合作站、中国太空站历史演变馆、太空中式古典建筑群等方方面面，只要符合我们“奇”与“趣”的主题，都欢迎你把作品砸过来！
                </p>
                <p>1．文字。你可以写一本科普书籍的书评，也可以写航空小文章，还可以写你对于太空的所思所想，字数在500~1000字，奇趣为准。</p>
                <p>2．图片。你可以画一幅航空相关的画作，可以是航天相关的摄影作品，也可以是公益航天科普主题海报设计作品，但是你需要图配一段奇趣航天科普文字，语言简约，字数100字以内。</p>
                <p>3．视频。可以是旅行途中拍的视频，也可以是精心拍摄的微电影，只要是与奇趣航天科普主题相关，都欢迎投稿。</p>
            </div>
            <div class="text">
                <h5>参与方式</h5>
                <p>请发送作品到征集邮箱：haiyangkepu6666666@126.com</p>
            </div>
            <div class="text">
                <h5>活动奖品</h5>
                <p> 文字组、图片组、视频组分别评奖，诱人大奖等着你，只要参与就有希望得到我们的纪念品明信片或精美书签。如果你的作品足够出色，不但会获得我们专门颁发的特约
                    科普作者种子选手荣誉勋章，还会获得以下物质奖品作为奖励，另外还会有各种神秘礼物随时降临到你的头上。</p>
                <p>一等奖：总价值398元的优质图书；</p>
                <p>二等奖：总价值260元的优质图书；</p>
                <p>三等奖：总价值80元的优质图书；</p>
            </div>
            <div class="text">
                <h5>评奖方式</h5>
                <p>1．我们将会陆续在中国航天局网站、微信和微博上刊登你的作品，请关注中国航天局微博与微信，转发量、点赞数、评论数等将是我们评选的重要参考指标。</p>
                <p>2. 我们将在中国航天网站、微博和微信上公布获奖名单，并同步展示您的优秀作品。</p>
            </div>
        </div>
        <!-- <LayoutFooter /> -->
    </div>
</template>
<style lang="scss" scoped>
.product {
    position: relative;
    //margin-top: 90px;
    width: 100%;
    height: 800px;
    background: linear-gradient(101.59deg, rgba(0, 0, 0) 0%, rgba(0, 0, 0, 0.3) 58.51%), url('@/assets/worldImg/BannerImg/1.jpg');
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

.dream {
    width: 1280px;
    height: 950px;
    margin: 0 auto;
    margin-top: 90px;
    background-color: #fff;
    border-radius: 30px;
    box-shadow: 5px 5px 10px 0 rgba(0, 0, 0, 0.5);

    .title {
        font-size: 35px;
        width: 100%;
        text-align: center;
        margin-bottom: 30px;
        padding-top: 20px;
    }

    .line {
        width: 60px;
        height: 3px;
        background-color: #ff6600;
        margin: 0 auto;
    }

    padding: 0 50px;

    p {
        color: #595959;
        font-size: 14px;
    }

    h5 {
        font-size: 16px;
        color: #595959;
        font-weight: 600;
        padding-bottom: 5px
    }

    .collect-intro {
        margin-top: 50px;
    }

    .text {
        margin-top: 20px;
    }

    .collect-banner {
        width: 100%;
        height: 150px;
        position: relative;
        overflow: hidden;
        margin-top: 35px;

        .collect-swiper {
            width: 100%;
            height: 100%;

            .swiper-slide {
                text-align: center;
                font-size: 18px;
                background: #fff;
                display: flex;
                justify-content: center;
                align-items: center;

                img {
                    display: block;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }
        }




    }
}
</style>