<template>
    <div class="prototwo">
        <h3>有书声</h3>
        <div class="dlbox">
            <dl v-for="(val,index) in dlList" :key="index">
                <dt>
                    <img :src="val.img" alt="">
                </dt>
                <dd>
                    <span>{{val.text}}</span>
                </dd>
            </dl>
        </div>
        <h3>旅途|城市</h3>
        <div class="dlbox">
            <dl v-for="(val,index) in dlLists" :key="index">
                <dt>
                    <img :src="val.img" alt="">
                </dt>
                <dd>
                    <span>{{val.text}}</span>
                </dd>
            </dl>
        </div>
    </div>
</template>
<script>
export default {
    name:"",
    data(){
        return{
            dlList:[{
                img:"http://img3.imgtn.bdimg.com/it/u=635778272,3680172731&fm=26&gp=0.jpg",
                text:"几十块的施加到考结束就就飞快的"
            },{
                img:"http://img2.imgtn.bdimg.com/it/u=514283005,1191897403&fm=26&gp=0.jpg",
                text:"第三季度看是的紧身裤可计算但是看"
            },{
                img:"http://img2.imgtn.bdimg.com/it/u=2311267535,1938723297&fm=26&gp=0.jpg",
                text:"打火机时代诞生地上方式覅考试带手机"
            }],
            dlLists:[{
                img:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1405484968,929695855&fm=26&gp=0.jp",
                text:"分型最Local的玩法"
            },{
                img:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3282641822,1898367166&fm=26&gp=0.jpg",
                text:"耳朵怀孕的粤语旅游电台"
            },{
                img:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3653970309,2293437664&fm=26&gp=0.jpg",
                text:"巡城记事，最暖的旅行电台"
            }]
        }
    }
}
</script>
<style>
    .prototwo{
        width:100%;
        height:auto;
    }
    .prototwo h3{
        font-size: 18px;
        padding:8px 4px;
    }
    .dlbox{
        width:100%;
        height:200px;
        display: flex;
    }
    .dlbox dl{
        width:33.3%;
        height:200px;
        padding:0 3px;
    }
    .dlbox dl dt{
        width:100%;
        height:150px;
    }
    .dlbox dl dt img{
        width:100%;
        height:100%;
        display: block;
    }
    .dlbox dl dd{
        font-size: 12px;

    }
</style>
