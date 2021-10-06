import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import todolist from '@/components/todo'
import Accueil from '@/components/accueil/Accueil'
import Workspace from '@/components/WorkspaceBixt/Workspace'
import Login from '@/components/Login/Login'
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
      path: '/workspace',
      name: 'work',
      component: Workspace
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
