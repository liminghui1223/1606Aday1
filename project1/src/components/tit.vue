<template>
    <div class="tit">
        <div class="top1">
            <ul>
                <li>
                    <span class="span1">服务类型</span>
                    <span>换驾照</span>
                </li>
                <li>
                    <span class="span1">当前驾照签发城市</span>
                    <span class="span2">请选择签发地</span>
                </li>
                <li>
                    <span class="span1">可补换的签发城市</span>
                    <span class="span2">请选择补换地</span>
                </li>
                <li>
                    <span class="span1">服务费</span>
                    <span class="span3">￥399</span>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name:''
}
</script>
<style>
    .tit{
        width:100%;
        height:auto;
        background:#fff;
    }
    .top1{
        width:100%;
        height:210px;
        margin-top:10px;
    }
    .top1 ul{
        width:100%;
        height:100%;
    }
    .top1 ul li{
        width:100%;
        height:50px;
        line-height: 50px;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #ccc;
    }
    .top1 ul li span{
        padding:0 8px;
    }
    .span1{
        color:#505155;
        font-size: 17px;
    }
    .span2{
        color:#b6b6b6;
    }
    .span3{
        color:#ff3c36;
    }
    .bottom{
        width:100%;
        height:100px;
        margin-top:10px;
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
</style>
