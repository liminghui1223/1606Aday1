<template>
     <div class="nav">
        <dl v-for="(val,index) in navs" :key="index" @click="detail">
            <dt>
                <img :src="val.icon" alt="">
            </dt>
            <dd>
                <span>{{val.text}}</span>
            </dd>
        </dl>
    </div>
</template>
<script>
export default {
    name:"",
    data(){
        return{
            navs:[{
                icon:"../../../static/img/dian.png",
                text:"私人FM"
            },{
                icon:"../../../static/img/ri.png",
                text:"每日推荐"
            },{
                icon:"../../../static/img/yin.png",
                text:"歌单"
            },{
                icon:"../../../static/img/pai.png",
                text:"排行榜"
            }],
        }
    },
    methods:{
        detail(){
            this.$router.push('/detail')
        }
    }
}
</script>
<style>
    .nav{
        width:100%;
        height:100px;
        display: flex;
    }
    .nav dl{
        width:25%;
        height:100%;
        line-height: 40px;
    }
    .nav dl dt{
        width:50px;
        height:50px;
        background:rgb(26, 25, 25);
        border-radius: 50%;
        text-align: center;
        margin:0 auto;
    }
    .nav dl dt img{
        padding-top:10px;
        width:30px;
        height:30px;
        display: flex;
        margin:0 auto;
    }
    .nav dl dd{
        text-align: center;
    }
</style>
