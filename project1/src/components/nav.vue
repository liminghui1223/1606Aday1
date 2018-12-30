<template>
    <div class="nav">
        <dl v-for="(val,index) in navList" :key="index">
            <dt>
                <span>+</span>
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
            navList:[{
                text:'身份证正面'
            },{
                text:'身份证反面'
            },{
                text:'驾驶证正页'
            },{
                text:'驾驶证副页'
            },{
                text:'白底半身照'
            }]
        }
    }
}
</script>
<style>
    .nav{
        width:100%;
        height:120px;
        display: flex;
        background: #fff;
    }
    .nav dl{
        width:20%;
        height:100%;
        text-align: center;
        margin-top:10px;
    }
    .nav dl dt{
        width:50px;
        height:40px;
        line-height: 40px;
        margin:0 auto;
        border:1px solid #ccc;
    }
    .nav dl dt span{
        width:30px;
        height:30px;
        line-height: 30px;
        display: inline-block;
        border-radius: 50%;
        border:1px solid #ccc;
        margin: 0 auto;
    }
    .nav dl dd{
        margin-top:5px;
        color:#ababab;
        font-size: 16px;
    }
</style>
