import Vue from 'vue'
import App from './App.vue'

import dataV from '@jiaminghi/data-view'

Vue.config.productionTip = false

Vue.use(dataV)
const NotFound = { template: '<p>Page not found</p>' }
const routes = {
  '/': App
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
