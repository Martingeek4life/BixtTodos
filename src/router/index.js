import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import todolist from '@/components/todo'
import Accueil from '@/components/accueil/Accueil'
import ListTables from '@/components/ListTables/ListTables'
import TableComponent from '@/components/Table/Table.vue'

import Checklist from '@/components/Checlikst/Checklist.vue'
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
      path: '/',
      name: 'accueil',
      component: Accueil
    },
    {
      path: '/workspace/:workspace_id/tables',
      name: 'listTables',
      component: ListTables,
      props: true
    },
    {
      path: '/workspace/:workspace_id/tables/:table_id',
      name: 'table.show',
      component: TableComponent,
      props: true
    },
    {
      path: '/workspace',
      name: 'listTables',
      component: ListTables,
      props: true
    },
    {
      path: '/Checklist',
      name: 'Checklist',
      component: Checklist,
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
