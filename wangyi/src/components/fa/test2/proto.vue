<template>
    <div class="proto">
        <h4>精品推荐</h4>
        <p>你值得拥有的优质内容</p>
        <ul>
            <li v-for="(val,index) in imgList" :key="index">
                <img :src="val.img" alt="">
            </li>
        </ul>
        <span>全部精品电台</span>
    </div>
</template>
<script>
export default {
    name:"",
    data(){
        return{
            imgList:[{
                img:"../../../../static/img/1_03.gif"
            },{
                img:"../../../../static/img/2_03.gif"
            },{
                img:"../../../../static/img/3_03.gif"
            }]
        }
    }
}
</script>
<style>
    .proto{
        width:100%;
        height:340px;
        background:#734d2a;
        margin:20px 0;
        text-align: center;
        color:#fff;
    }
    .proto h4{
        font-size: 16px;
        padding-top:18px;
    }
    .proto p{
        font-size: 12px;
        color:#ac9e91;
    }
    .proto ul{
        width:100%;
        display: flex;
        margin:16px 0;
        padding-bottom: 10px;
    }
    .proto ul li{
        width:33.3%;
        padding:0 2px;
    }
    .proto ul li img{
        width:100%;
    }
    .proto span{
        width:50px;
        height:20px;
        padding:10px;
        margin:20px;
        border:1px solid #ccc;
        border-radius: 50px;
    }
</style>
