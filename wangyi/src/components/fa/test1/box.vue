<template>
    <div class="box">
        <div class="box-dl1">
            <dl>
                <dt>
                    <img src="http://www.mobanwang.com/mb/UploadSoftPic/201711/2017112412101902.jpg" alt="">
                </dt>
                <dd>
                    <h3>三万英尺</h3>
                    <span>8471</span>
                </dd>
            </dl>
        </div>
        <div class="box-tit">
            <p>当爱你成为一种坏习惯</p>
            <img src="http://www.mobanwang.com/mb/UploadSoftPic/201811/2018111716071202.jpg" alt="">
        </div>
        <div class="box-dl2">
            <dl>
                <dt>
                    <img src="https://img04.sogoucdn.com/app/a/100520093/e18d20c94006dfe0-feec70b0eb485633-e7e784240dab719c6e65117bcc3abd7a.jpg" alt="">
                </dt>
                <dd>
                    <span>甜美可爱妹子翻唱《Stay with me》，一开口就爱上你了</span>
                </dd>
            </dl>
        </div>
        <div class="box-img">
            <img src="https://i04picsos.sogoucdn.com/e37ffb60cc039a6e" alt="">
            <p>国风极乐夜音乐盛典</p>
            <img src="https://i04picsos.sogoucdn.com/9bc1c6382353be73" alt="" class="img2">
            <h4>买票去看演唱会，和偶像近距离接触</h4>
        </div>
        <div class="box-dl3">
            <dl>
                <dt>
                    <img src="https://img04.sogoucdn.com/app/a/100520024/a8aa6ff30cc053fbf42f6e8535bde67f" alt="">
                </dt>
                <dd>
                    <h3>哥 只是个传说</h3>
                    <span>25668</span>
                </dd>
            </dl>
        </div>
        <div class="box-img2">
            <img src="http://pic68.nipic.com/file/20150530/21147232_014507645906_2.jpg" alt="">
        </div>
        <div class="box-dl4">
            <dl v-for="(val,index) in lists" :key="index">
                <dt>
                    <img :src="val.img" alt="">
                </dt>
                <dd>
                    <h4>{{val.name}}</h4>
                    <span>{{val.num}}{{val.num2}}</span>
                    <p>{{val.tit}}</p>
                </dd>
            </dl>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name:"",
    data(){
        return{
            lists:[]
        }
    },
    mounted(){
        axios.get('/api/lists').then((res)=>{
            console.log(res.data.lists)
            this.lists=res.data.lists
        })
    }
}
</script>
<style>
    .box{
        width:100%;
        height:auto;
        margin-top:30px;
    }
    .box-dl1,.box-dl2,.box-dl3,.box-dl4{
        width:100%;
        height:150px;
    }
    .box-dl1 dl,.box-dl2 dl,.box-dl3 dl,.box-dl4 dl{
        width:100%;
        height:100%;
        display: flex;
    }
    .box-dl1 dl dt,.box-dl2 dl dt,.box-dl3 dl dt,.box-dl4 dl dt{
        width:130px;
        height:130px;
    }
    .box-dl1 dl dt img,.box-dl2 dl dt img,.box-dl3 dl dt img,.box-dl4 dl dt img{
        width:100%;
        height:100%;
        padding:10px;
    }
    .box-dl1 dl dd,.box-dl2 dl dd,.box-dl3 dl dd,.box-dl4 dl dd{
        padding:10px;
        line-height: 30px;
        margin-left:10px;
    }
    .box-dl1 dl dd span,.box-dl2 dl dd span,.box-dl3 dl dd span,.box-dl4 dl dd span{
        font-size: 12px;
        color:#666;
    }
    .box-tit{
        width:100%;
        height:auto;
    }
    .box-tit p{
        padding:5px;
    }
    .box-tit img{
        width:100%;
    }
    .box-img{
        width:100%;
        height:auto;
    }
    .box-img img{
        width:100%;
    }
    .box-img p{
        padding:6px 0 15px 5px;
    }
    .box-img h4{
        padding:5px 0 18px 5px;
    }
    .img2{
        height:140px;
    }
    .box-img2{
        width:100%;
        height:auto;
    }
    .box-img2 img{
        width:100%;
        margin:10px 0;
    }
</style>
