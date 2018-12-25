<template>
    <div class="HelloWorld">
        <div class="top">
            <img src="../../static/img/2.png" alt="">
        </div>
        <div class="box">
            <button @click="btn">手机号登录</button>
            <button>注册</button>
            <u>游客试用</u>
        </div>
        <div class="bottom">
            <!-- <p>其他登录方式</p> -->
            <dl v-for="(val,index) in list" :key="index">
                <dt>
                    <img :src="val.icon" alt="">
                </dt>
                <dd>
                    <span>{{val.name}}</span>
                </dd>
            </dl>
        </div>
    </div>
</template>
<script>
export default {
    name:"HelloWorld",
    data(){
        return{
            list:[{
                name:"微信",
                icon:"../../static/img/xin.png"
            },{
                name:"QQ",
                icon:"../../static/img/qq.png"
            },{
                name:"微博",
                icon:"../../static/img/bo.png"
            },{
                name:"网易",
                icon:"../../static/img/yi.png"
            }]
        }
    },
    methods:{
        btn(){
            this.$router.push('/login')
        }
    }
}
</script>
<style>
    .HelloWorld{
        width:100%;
        height:100%;
    }
    .top{
        width:100%;
        height:260px;
    }
    .top img{
        width:100%;
        height:100%;
    }
    .box{
        width:100%;
        height:240px;
        text-align: center;
    }
    .box button{
        width:80%;
        height:40px;
        margin:15px 38px;
        border:1px solid #f00;
        border-radius: 50px;
        color:#f00;
        background: #fff;
    }
    .box u{
        color:#666;
    }
    .bottom{
        width:100%;
        height:120px;
        display: flex;
        justify-content: space-around;
    }
    .bottom dl{
        width:25%;
        height:100%;
        text-align: center;
    }
    .bottom dl dt{
        width:30px;
        height:30px;
    }
    .bottom dl dt img{
        width:100%;
        height:100%;
        display: block;
        margin:10px auto;
    }
    /* .bottom p{
        color:#666;
    } */
</style>
