<template>
    <div class="one">
        <p class="left">{{bigTitle}}</p>  <p class="right">更多》</p>
        <div class="sliderdiv">
            <Item :itemData="shuju"></Item>
        </div>
    </div>
</template>


<script>
    import Item from"./item"
    export default {
        data: function () {
            return {}
        },
        props: ["shuju", "bigTitle"],
        components: {
            Item
        },
        mouthods: {},
        computed: {}
        ,
        beforeCreate: function () {
//            console.log(shuju)
        }

    }
</script>
<style>
    p{
        margin: 5px 5px 7px 5px;
    }
    .one {
        margin: 10px 20px 0px 20px;
    }

    .sliderdiv {
        width: 100%;
        overflow: auto;
    }
    .left{
        float: left;
    }
    .right{
        float: right;
        color: #42bd56;
    }
</style>
