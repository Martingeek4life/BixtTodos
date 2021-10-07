import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import todolist from '@/components/todo'
import Accueil from '@/components/accueil/Accueil'
import ListTables from '@/components/ListTables/ListTables'
import TableComponent from '@/components/Table/Table.vue'
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
    }
  ]
})
