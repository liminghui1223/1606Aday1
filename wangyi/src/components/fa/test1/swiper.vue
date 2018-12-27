<template>
    <div class="swiper">
        <swiper :options="swiperOption">
            <swiper-slide v-for="(item, index) in slides" :key="index"><img :src="item"></swiper-slide>
        </swiper>
    </div>
</template>
<script>

import { swiper, swiperSlide } from 'vue-awesome-swiper';

export default{
    name: 'test2',
    data(){
        return {
            slides: [

            'http://img1.imgtn.bdimg.com/it/u=1233278727,1565848090&fm=26&gp=0.jpg',

            'http://img1.imgtn.bdimg.com/it/u=4093836031,238568020&fm=200&gp=0.jpg',

            'http://img2.imgtn.bdimg.com/it/u=764423621,74291205&fm=26&gp=0.jpg',

            'http://img3.imgtn.bdimg.com/it/u=4209056395,909912966&fm=26&gp=0.jpg',

            'http://img0.imgtn.bdimg.com/it/u=1431399751,3494425341&fm=200&gp=0.jpg',

            'http://img4.imgtn.bdimg.com/it/u=2291382945,2489252111&fm=200&gp=0.jpg'

            ],

        //轮播config

            swiperOption: {

                // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger

                // debugger: true,

                initialSlide :1,

                autoplay: {

                delay: 3000,

                stopOnLastSlide: false,

                disableOnInteraction: false,

                },

                autoplayDisableOnInteraction : false,

                slidesPerView: "auto",//设置slider容器能够同时显示的slides数量(carousel模式)。可以设置为数字（可为小数，小数不可loop），或者 'auto'则自动根据slides的宽度来设定数量。loop模式下如果设置为'auto'还需要设置另外一个参数loopedSlides。

                centeredSlides: true//<span style="color:rgb(68,68,68);font-family:'microsoft yahei';font-size:13px;">设定为true时，活动块会居中，而不是默认状态下的居左。</span>

            }

        }

    },

    components: {

    swiper,

    swiperSlide

    }

}

</script>
<style>
    @import url('../../../assets/index');
</style>


