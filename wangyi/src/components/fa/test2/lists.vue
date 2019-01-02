<template>
    <div class="bottoms">
        <dl v-for="(val,index) in data" :key="index">
            <dt>
                <img :src="val.img" alt="">
            </dt>
            <dd>
                <p class="p1">{{val.name}}</p>
                <p class="p2">{{val.tit}}</p>
                <p class="p3">{{val.tit2}}</p>
            </dd>
        </dl>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name:'',
    data(){
        return{
            data:[]
        }
    },
    mounted(){
        axios.get('/api/datas').then((res)=>{
            console.log(res.data.datas)
            this.data=res.data.datas
        })
    },
}
</script>
<style>
    .bottoms{
        width:100%;
        height:auto;
    }
    .bottoms dl{
        width:100%;
        height:130px;
        display: flex;
        margin-top:6px;
    }
    .bottoms dl dt{
        width:120px;
        height:120px;
    }
    .bottoms dl dt img{
        width:100%;
        height:100%;
    }
    .bottoms dl dd{
        padding-left:10px;
        line-height: 30px;
    }
    .p1{
        font-size: 16px;
        font-weight: bold;
    }
    .p2,.p3{
        font-size: 12px;
        color:#666;
    }
</style>
