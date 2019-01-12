<template>
    <div>
        <Nav></Nav>
        <Slider :shuju="MovieA" bigTitle="影院热映"></Slider>
        <Slider :shuju="MovieB" bigTitle="免费在线观影"></Slider>
        <Slider :shuju="MovieC" bigTitle="新片速递"></Slider>
    </div>
</template>
<script>
    import Nav from "../components/nav"
    import Slider from "../components/movie/slider"
    export default {
        data: function () {
            return {
                moviedata: []
            }
        },

        computed: {
            MovieA:function(){
                return this.moviedata.slice(0,8)
            },
            MovieB:function(){
                return this.moviedata.slice(8,16)
            },
            MovieC:function(){
                return this.moviedata.slice(16,24)
            }
        },

        components: {
            Nav,Slider
        },
        beforeCreate: function () {
            this.axios.get("/api/someApi").then((val)=>{
                console.log(val.data.movie)
                this.moviedata = val.data.movie;
            })
        },

    }
</script>
<style>

</style>
