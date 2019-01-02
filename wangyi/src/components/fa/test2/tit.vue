<template>
    <div class="tit">
        <h3>热门分类</h3>
        <div class="tit-one">
            <dl v-for="(val,index) in titList" :key="index">
                <dt>
                    <img :src="val.icon" alt="">
                </dt>
                <dd>
                    <span>{{val.name}}</span>
                </dd>
            </dl>
        </div>
        <h3>更多分类</h3>
        <div class="tit-two">
            <dl v-for="(val,index) in titLists" :key="index">
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
    name:'',
    data(){
        return{
            titList:[{
                icon:'../../../../static/img/shu.png',
                name:'有声书'
            },{
                icon:'../../../../static/img/deng.png',
                name:'知识技能'
            },{
                icon:'../../../../static/img/fang.png',
                name:'商业财经'
            },{
                icon:'../../../../static/img/renwen.png',
                name:'人文历史'
            },{
                icon:'../../../../static/img/waiyu.png',
                name:'外语世界'
            },{
                icon:'../../../../static/img/nai.png',
                name:'亲子宝贝'
            }],
            titLists:[{
                icon:'../../../../static/img/mai.png',
                name:'创作|翻唱'
            },{
                icon:'../../../../static/img/yinfu.png',
                name:'音乐故事'
            },{
                icon:'../../../../static/img/shuju.png',
                name:'数据数据'
            },{
                icon:'../../../../static/img/yun.png',
                name:'云端云端'
            },{
                icon:'../../../../static/img/feng.png',
                name:'风车风车'
            },{
                icon:'../../../../static/img/zan.png',
                name:'暂停暂停'
            }]
        }
    }
}
</script>
<style>
    .tit{
        width:100%;
        height:auto;
    }
    .tit-one,.tit-two{
        width:100%;
        height:200px;
        display: flex;
        flex-wrap: wrap;
        margin:10px 0;
    }
    .tit-one dl,.tit-two dl{
        width:50%;
        height:60px;
        /* margin:10px auto; */
        margin-top:10px;
        display: flex;
    }
    .tit-one dl dt,.tit-two dl dt{
        width:30px;
        height:30px;
        /* margin:10px auto; */
        margin:10px 10px 10px 40px;
    }
    .tit-one dl dt img,.tit-two dl dt img{
        width:100%;
        height:100%;
    }
    .tit-one dl dd,.tit-two dl dd{
        height:100%;
        line-height: 50px;
    }
    .tit h3{
        margin:15px 0;
        margin-left:5px;
    }
</style>
