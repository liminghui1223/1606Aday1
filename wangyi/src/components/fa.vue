<template>
    <div class="fa">
        <header class="header">
            <span><i class="iconfont icon-tongzhi"></i></span>
            <span class="span2"><input type="text" placeholder="猜你喜欢 浮生"></span>
            <span><i class="iconfont icon-zanting2"></i></span>
        </header>
        <div class="testNav">
            <div :class="{'selected':tab === 1,'testTitle':true}" @click="toTab(1)">个性推荐</div>
            <div :class="{'selected':tab === 2,'testTitle':true}"  @click="toTab(2)">主播电台</div>
        </div>
        <div class="container">
            <keep-alive>
                <Test1 v-if="tab === 1"></Test1>
                <Test2 v-else></Test2>
            </keep-alive>
        </div>
    </div>
</template>
<script>
import Test1 from './fa/test1';
import Test2 from './fa/test2';
export default {
    name:"fa",
    data() {
        return {
            tab: 1,
        };
    },
    components: {
        Test1,
        Test2,
    },
    methods: {
        toTab(index) {
            this.tab = index;
        },
    },
}

</script>
<style>
    .fa{
        width:100%;
        height:100%;
    }
    .header{
        width:100%;
        height:50px;
        line-height: 50px;
        display: flex;
        justify-content: space-between;
        background:rgb(20, 20, 20);
        /* position: fixed;
        top:0;
        left:0; */
    }
    .header span{
        padding:0 10px;
        color:#fff;
    }
    .header span i{
        font-size: 18px;
    }
    .span2{
        flex:1;
        margin:0 auto;
    }
    .span2 input{
        text-align: center;
        width:85%;
        height:26px;
        border-radius: 50px;
        padding:0 20px;
        background: #ccc;
    }
    .test {
        width: 100%;
    }
    .testNav {
        height: 60px;
        line-height: 60px;
        display: flex;
        border-bottom: 1px solid #e5e5e5;
    }
    .testTitle {
        flex: 1;
        text-align: center;
    }
    .selected {
        color: red;
    }
</style>
