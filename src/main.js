// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import routes from './router'
import VueRouter from 'vue-router'

Vue.config.productionTip = false

Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'hash',
  routes,
  scrollBehavior (to, from, savedPosition){
    if(savedPosition){
      return savedPosition
    }else{
      if(from.meta.keepAlive){
        return from.meta.savedPosition
      }
      return { x: 0, y: to.meta.savedPosition || 0 }
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
