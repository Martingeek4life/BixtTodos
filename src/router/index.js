import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import todolist from '@/components/todo'
import Atterissage from '@/components/atterissage/Atterissage'
import Atterissage1 from '@/components/atterissage/Atterissage1'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'todolist',
      component: todolist
    },
    {
      path: '/atterissage',
      name: 'atterissage',
      component: Atterissage
    },
    {
      path: '/atterissage1',
      name: 'atterissage1',
      component: Atterissage1
    }
  ]
})
