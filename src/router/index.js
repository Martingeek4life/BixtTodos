import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import todolist from '@/components/todo'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/todolist',
      name: 'todolist',
      component: todolist
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
