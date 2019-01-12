import Vue from 'vue'
import Router from 'vue-router'

import Home from "../page/home"
import Book from "../page/book"
import Gb from "../page/gb"
import Xiaozu from "../page/xiaozu"
import Movie from "../page/movie"


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Home',
      name: 'Home',
      component: Home
    }, {
      path: '/Book',
      name: 'Book',
      component: Book
    }, {
      path: '/Gb',
      name: 'Gb',
      component: Gb
    }, {
      path: '/Xiaozu',
      name: 'Xiaozu',
      component: Xiaozu
    }, {
      path: '/Movie',
      name: 'Movie',
      component: Movie
    },
  ]
})
