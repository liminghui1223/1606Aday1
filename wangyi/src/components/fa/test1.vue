<template>
    <div class="test1">
        <Banner></Banner>
        <Nav></Nav>
        <h4 class="h4">推荐歌单</h4>
        <Bottom></Bottom>
        <Swipers></Swipers>
        <Box></Box>
    </div>
</template>
<script>
import Swipers from './test1/swiper';
import Box from './test1/box';
import Banner from './test1/banner';
import Nav from './test1/nav';
import Bottom from './test1/bottom';
export default {
    name:"test1",
    components:{
        Swipers,
        Box,
        Banner,
        Nav,
        Bottom
    }
}
</script>
<style>
    .test1{
        width:100%;
        height:100%;
        padding-bottom:50px;
    }
    .h4{
        padding:3px;
    }
</style>
