<template>
    <div class="login">
        <div class="input1">
            <img src="../../static/img/shou.png" alt=""><input type="text" placeholder="手机号">
        </div>
        <div class="input1">
            <img src="../../static/img/suo.png" alt=""><input type="text" placeholder="密码">
        </div>
        <div class="btn">
            <button>登录</button>
        </div>
    </div>
</template>
<script>
export default {
    name:"login"
}
</script>
<style>
    .login{
        width:100%;
        height:100%;
    }
    .input1{
        width:100%;
        height:40px;
        line-height: 50px;
        border-bottom: 1px solid #ccc;
    }
    .input1 img{
        width:20px;
        height:20px;
        color:#666;
    }
    .input1 input{
        border:none;
        width:80%;
        height:30px;
        font-size: 22px;
        padding-left:10px;
    }
    .btn{
        width:100%;
        height:100%;
    }
    .btn button{
        width:90%;
        height:40px;
        background: #000;
        color:#666;
        border-radius: 50px;
        margin:20px 14px;
    }
</style>
