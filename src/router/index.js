import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import todolist from '@/components/todo'
import Accueil from '@/components/accueil/Accueil'
import Inscription from '@/components/inscription/Inscription'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'todolist',
      component: todolist
    },
    {
      path: '/accueil',
      name: 'accueil',
      component: Accueil
    },
    {
      path: '/inscription',
      name: 'inscription',
      component: Inscription
    }
  ]
})
