<template>
    <div class="banner">
        <div class="swiper-container">
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
                img:"http://p1.music.126.net/8L1C4PL7QAT1Gav9L6LWVQ==/109951163747817794.jpg"
            },{
                img:"http://p1.music.126.net/_D4aUTl9DJbDe8PEiLxZaQ==/109951163747832164.jpg"
            },{
                img:"http://p1.music.126.net/Jp6yvwYLiY_1NaaY-bmgiQ==/109951163747807381.jpg"
            },{
                img:"http://p1.music.126.net/mlqWka1SwUrIHYQZ5iiivA==/109951163748935305.jpg"
            }]
        }
    },
    mounted(){
        var mySwiper = new Swiper('.swiper-container', {
            autoplay:true,
            loop:true
        })
    }
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
