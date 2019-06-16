import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/HelloWorld.vue'
import Page2 from '@/components/Page2.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/page2',
      name: 'page2',
      component: Page2
    }
    
  ]
})
