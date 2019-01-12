<template>
  <div>
    <div class="tgcon" v-for="(v,i) in shuju">
      <div class="Tleft">
        <h3>{{v.title}}</h3>

        <p>{{con[i]}}</p>
        <br/>

        <p>{{v.category_name}}</p>
      </div>
      <div class="Tright" @click="fun()">
        <img :src="v.image_lmobile" width="100px" height="90px"/>

        <p>本活动来自 戏剧</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        con: [],
      }
    },
    props: ["shuju"],

    methods: {
      fun: function () {
        console.log(this.shuju);
        for (var i = 0; i < this.shuju.length; i++) {
          var str = this.shuju[i].content.substr(0, 25);
          this.con.push(str);
        }
      }
    },
//    beforeCreate: function () {
//     this.fun()
//
//    },
    created:function(){

    },
    mounted:function(){
      fun()
  },

  }
</script>


<style>
  h3 {
    font-size: 15px;
    font-weight: 300;
  }

  .tgcon p {
    font-size: 13px;
    color: #aaaaab;
  }

  .tgcon {

    height: 140px;
    margin: 30px 30px 14px 30px;
    border-bottom: 1px solid #aaaaab;
  }

  .Tleft {
    width: 60%;
    float: left;
    margin-right: 10px;
  }

  .Tright {
    float: right;
  }
</style>
