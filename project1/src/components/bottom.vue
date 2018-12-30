<template>
    <div class="bottom">
        <ul>
            <li>
                <span class="span1">优惠</span>
                <span class="span5">登录后查看就加考</span>
            </li>
            <li>
                <span class="span1">实付：<b>￥399</b></span>
                <button>立即支付</button>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name:''
}
</script>
<style>
    .bottom{
        width:100%;
        height:100px;
        background: #fff;
    }
    .bottom ul{
        width:100%;
        height:100%;
    }
    .bottom ul li{
        width:100%;
        height:50px;
        line-height: 50px;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #ccc;
    }
    .bottom ul li span{
        padding:0 8px;
    }
    .bottom ul li span b{
        font-weight: normal;
        font-size: 18px;
        color:#ee7b78;
    }
    .bottom ul li button{
        width:100px;
        background: #999999;
        font-size: 18px;
        color:#fff;
    }
    .span5{
        color:#afb0b5;
    }
    .span1{
        color:#505155;
        font-size: 17px;
    }
</style>
