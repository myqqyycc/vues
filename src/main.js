import Vue from 'vue'
import VueRouter from 'vue-router'
import dataV from '@jiaminghi/data-view'
import p1 from '@/components/p1'

Vue.use(dataV)
Vue.use(VueRouter)

const NotFound = { template: '<p>Page not found</p>' }
const Home = { template: '<p>home page</p>' }
const About = { template: '<p>about page</p>' }
const routes = {
  '/': Home,
  '/about': About,
  '/about1': p1
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      return routes[this.currentRoute] || NotFound
    }
  },
  render (h) { return h(this.ViewComponent) }
})
