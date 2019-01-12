<template>
    <div class="com">
        <div class="item" v-for="(v,i) in itemData">
            <img :src="v.images.small" height="170px" width="120px" />

            <p class="cen">{{v.title}}</p>
            <div >
                <el-rate
                        v-model="v.rating.average"
                        disabled
                        show-score
                        text-color="#ff9900"
                        score-template="{value}">
                </el-rate>
            </div>

        </div>
        <div class="clear"></div>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {

            }
        },
        props:["itemData"],
    }
</script>

<style scoped>
    .com{
        width: 1100px;

    }
    .item{
        float: left;
        margin-right: 9px;

    }
    .clear{
        clear: both;
    }
    .cen{
        text-align: center;
    }

</style>