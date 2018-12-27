<template>
  <div id="box">
    <router-view/>
    <footer class="footer">
      <dl v-for="(val,index) in title" :key="index">
        <dt>
          <img :src="val.icon" alt="">
        </dt>
        <dd>
          <router-link :to="val.url">{{val.name}}</router-link>
        </dd>
      </dl>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      title:[{
        url:'/box/fa',
        name:"发现",
        icon:"../static/img/yinyue.png"
      },{
        url:'/box/shi',
        name:"视频",
        icon:"../static/img/zan.png"
      },{
        url:'/box/mine',
        name:"我的",
        icon:"../static/img/yinfu.png"
      },{
        url:'/box/peng',
        name:"朋友",
        icon:"../static/img/peng.png"
      },{
        url:'/box/zhang',
        name:"账号",
        icon:"../static/img/mine.png"
      }]
    }
  }
}
</script>

<style>
    #box{
    width:100%;
    height:100%;
  }
  .footer{
    position: fixed;
    bottom: 0;
    left:0;
    width:100%;
    height:50px;
    background:#ccc;
    display: flex;
    justify-content: space-around;
  }
  .footer dl{
    width:25%;
    height:100%;
  }
  .footer dl dt{
    width:20px;
    height:20px;
    margin:0 auto;
    padding-top:5px;
  }
  .footer dl dt img{
    width:100%;
    height:100%;
    display: block;
  }
  .footer dl dd{
    text-align: center;
  }
  .footer dl dd a{
    text-decoration: none;
    color:#666;
    font-size: 12px;
  }
  /* .footer ul{
    display: flex;
    justify-content: space-around;
  }
  .footer ul li a{
    text-decoration: none;
    color:#666;
  } */

</style>
