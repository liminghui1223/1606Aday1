<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      title:[{
        url:'/fa',
        name:"发现",
        icon:"../static/img/yinyue.png"
      },{
        url:'/shi',
        name:"视频",
        icon:"../static/img/zan.png"
      },{
        url:'/mine',
        name:"我的",
        icon:"../static/img/yinfu.png"
      },{
        url:'/peng',
        name:"朋友",
        icon:"../static/img/peng.png"
      },{
        url:'/zhang',
        name:"账号",
        icon:"../static/img/mine.png"
      }]
    }
  }
}
</script>

<style>
@import url("./fonts2/iconfont.css");
  *{
    padding: 0;
    margin:0;
    list-style: none;
  }
  body,html,#app{
    width:100%;
    height:100%;
  }
</style>
