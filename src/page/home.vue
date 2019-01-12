<template>
<div>
  <Nav></Nav>
  <Butt></Butt>
  <Texta :shuju="homedata"></Texta>

</div>


</template>

<script>
  import Nav from "../components/nav"
  import Butt from "../components/home/bttonfu"
  import Texta from "../components/home/textAndimg"
  export default {
    data:function(){
      return{
        homedata:[]
      }
    },
    components: {
      Nav,Butt,Texta
    },
    beforeCreate: function () {
      this.axios.get("/api/someApi").then((val)=>{
        console.log(val.data.shouye)
        this.homedata = val.data.shouye;
      })
    },
  }
</script>
