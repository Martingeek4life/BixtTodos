import Vue from 'vue'
import Router from 'vue-router'
import todo from '@/components/todo'

import NewCard from '@/components/NewCard'
import AddCard from '@/components/AddCard'
import NewList from '@/components/NewList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/todo',
      name: 'todo',
      component: todo
    },
    {
      path: '/NewCard',
      name: 'NewCard',
      component: NewCard
    },
    {
      path: '/AddCard',
      name: 'AddCard',
      component: AddCard
    },
    {
      path: '/NewList',
      name: 'NewList',
      component: NewList
    }
  ]
})
