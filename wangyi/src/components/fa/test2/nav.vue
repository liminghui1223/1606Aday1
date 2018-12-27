<template>
    <div class="nav">
        <dl v-for="(val,index) in navs" :key="index">
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
    name:'',
    data(){
        return{
            navs:[{
                icon:"../../../static/img/fen.png",
                text:"电台分类"
            },{
                icon:"../../../static/img/biao.png",
                text:"电台排行"
            },{
                icon:"../../../static/img/dji.png",
                text:"DJ电音"
            },{
                icon:"../../../static/img/bing.png",
                text:"小心电台"
            }]
        }
    },
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
