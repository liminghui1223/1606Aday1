<template>
    <div class="bottom">
        <dl v-for="(item,index) in data" :key="index">
            <dt>
                <img :src="item.img" alt="">
            </dt>
            <dd>
                <span>{{item.text}}</span>
            </dd>
        </dl>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name:"",
    data(){
        return{
            data:[]
        }
    },
    mounted(){
        axios.get('/api/data').then((res)=>{
            this.data=res.data.data
        })
    },
}
</script>
<style>
    .bottom{
        width:100%;
        height:auto;
        display: flex;
        flex-wrap: wrap;
    }
    .bottom dl{
        width:32%;
        height: 190px;
        margin:2px;
    }
    .bottom dl dt{
        width:100%;
        height:130px;
    }
    .bottom dl dt img{
        width:100%;
        height:100%;
        display: block;
    }
</style>
