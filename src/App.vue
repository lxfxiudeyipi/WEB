<template>
  <div id="app">

    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App',
    beforeCreate:function(){
      this.$router.push("/Home")
    },

  }
</script>

<style >
  * {
    margin: 0px;
    padding: 0px;
  }
  .el-rate__icon{
    font-size: 11px;
  }
. el-icon-star-on{
  font-size: 11px;
}
</style>
