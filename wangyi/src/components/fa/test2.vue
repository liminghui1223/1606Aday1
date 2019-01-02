<template>
    <div class="test2">
        <Banner></Banner>
        <Nav></Nav>
        <h4 class="h4">今日优选</h4>
        <Lists></Lists>
        <Proto></Proto>
        <Prototwo></Prototwo>
        <Tit></Tit>
    </div>
</template>
<script>
import Nav from './test2/nav';
import Banner from './test2/banner';
import Lists from './test2/lists';
import Proto from './test2/proto';
import Prototwo from './test2/protottwo';
import Tit from './test2/tit';

export default {
    name:"test2",
    components:{
        Banner,
        Nav,
        Lists,
        Proto,
        Prototwo,
        Tit
    }
}
</script>
<style>
    .test2{
        width:100%;
        height:100%;
        padding-bottom:50px;
    }
    .h4{
        padding:3px;
    }
</style>
