<template>
  <div>
    <button @click="changeNum('+')">+</button>
    <span>{{this.$store.state.app.num}}</span>
    <button @click="changeNum('-')">-</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted(){
    console.log(this.$store)
  },
  methods:{
    changeNum(type){
      // this.$store.commit('changeNum',{payload:type});
      this.$store.commit({
        type:'changeNum',
        payload:type
      })
    }
  }
}
</script>

<style>

</style>
