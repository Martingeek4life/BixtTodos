import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import todolist from '@/components/todo'
import Atterissage from '@/components/atterissage/Atterissage'
import Accueil from '@/components/accueil/Accueil.vue'
import Project from '@/components/Project/Project.vue'
import Workspace from '@/components/Workspace/Workspace.vue'
// import VueI18n from 'vue-i18n'

// Vue.use(VueI18n)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/todolist',
      name: 'todolist',
      component: todolist
    },
    {
      path: '/atterissage',
      name: 'atterissage',
      component: Atterissage
    },
    {
      path: '/',
      name: 'accueil',
      component: Accueil
    },
    {
      path: '/workspaces',
      name: 'workspaces',
      component: Workspace
    },
    {
      path: '/projects/:project_id',
      name: 'project.show',
      component: Project,
      props: true
    }
  ]
})
