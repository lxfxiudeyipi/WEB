<template>
  <div>
    <Nav></Nav>
    <Slider :shuju="MovieA" bigTitle="哈佛非虚构写作课"></Slider>
    <!--<Slider :shuju="books" bigTitle="哈佛非虚构写作课"></Slider>-->
    <!--<Slider :shuju="books" bigTitle="哈佛非虚构写作课"></Slider>-->
  </div>
</template>
<script>
  import Nav from "../components/nav"

  import Slider from "../components/movie/slider"

  export default {
    data: function () {
      return {
        books: []
      }

    },
    computed: {
      MovieA: function () {
        return this.books.slice(0, 8)
      },
      MovieB: function () {
        return this.books.slice(8, 16)
      },
      MovieC: function () {
        return this.books.slice(16, 24)
      }
    },
    beforeCreate: function () {
      this.axios.get("/api/someApi").then((val)=>{
        console.log(val.data.books);
        this.books = val.data.books;
      })
    },
    components: {
      Nav, Slider
    },

  }
</script>
