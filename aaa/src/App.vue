<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Helloword from "./components/HelloWorld";
export default {
  name: 'App',
  components:{
    Helloword
  }
}
</script>

<style>

</style>
