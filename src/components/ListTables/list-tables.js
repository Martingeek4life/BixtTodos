import Table from '@/classes/Table'
import MiniTable from '@/components/MiniTable/MiniTable.vue'

export default{
  name: 'ListTables',
  props: {
    workspace_id: {type: [String, Number], required: true}
  },
  components: {MiniTable},
  data () {
    let data = {
      listTables: [
        new Table(),
        new Table('Table created with title'),
        new Table({cover: 'cover-test', title: 'Table created with title and cover'})/**/
      ],
      workspace: {title: 'My workspace'}
    }
    return data
  },
  methods: {
    loadWorkspace: () => {
      this.workspace = {

      }
    }
  },
  created () {
    // this.loadWorkspace(this.workspace_id)
    // this.loadTables()

    console.log('listTables component created with listTables:', this.listTables, 'workspace:', this.workspace, this, 'data:', this.$data)
  }
}
