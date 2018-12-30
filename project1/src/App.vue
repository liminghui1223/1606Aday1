<template>
  <div class="app">
    <Top></Top>
    <img src="http://picture.eclicks.cn/g2/img/r/2018/11/02/be03b0c984ccf854.jpg" alt="">
    <Nav></Nav>
    <Tit></Tit>
    <Bottom></Bottom>
  </div>
</template>

<script>
// const JSBridge = require('./utils/JSBridge.js');
import Top from './components/top';
import Nav from './components/nav';
import Tit from './components/tit';
import Bottom from './components/bottom';

export default {
  name: 'app',
  data () {
    return {}
  },
  // methods: {
  //   login(){
  //     JSBridge.invoke('app', 'login', {
  //       loginCallBackName: (res)=>{
  //         console.log('res...', res);
  //       }
  //     });
  //   }
  // }
  components:{
    Top,
    Nav,
    Tit,
    Bottom
  }
}
</script>

<style lang="scss">
    *{
      padding: 0;
      margin: 0;
      list-style: none;
    }
    body,html,.app{
      width:100%;
      height:100%;
    }
    .app{
      background: #eeeeee;
    }
    .app img{
      width:100%;
    }
</style>
