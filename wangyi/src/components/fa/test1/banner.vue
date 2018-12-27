<template>
    <div class="banner">
        <div class="swiper-container swiper1">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(val,index) in items" :key="index">
                    <img :src="val.img" alt="">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Swiper from 'swiper'; 
import 'swiper/dist/css/swiper.min.css';
export default {
    name:'',
    data(){
        return{
            items:[{
                img:"http://p1.music.126.net/ZpfLYdaPgEtXVeqVS5S9oQ==/109951163747815128.jpg"
            },{
                img:"http://p1.music.126.net/53q6_ieEbkuvHbxMHZkQ0A==/109951163747821428.jpg"
            },{
                img:"http://p1.music.126.net/mlqWka1SwUrIHYQZ5iiivA==/109951163748935305.jpg"
            },{
                img:"http://p1.music.126.net/mo7HTD92MLdYiZr_9KXFCw==/109951163749129311.jpg"
            }]
        }
    },
    mounted(){
        var mySwiper = new Swiper('.swiper1', {
            autoplay:true,
            loop:true
        })
    },
}
</script>
<style>
    .banner{
        width:100%;
        height:190px;
    }
    .banner img{
        width:100%;
    }
</style>

