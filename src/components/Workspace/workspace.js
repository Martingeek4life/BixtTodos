import Workspace from '@/classes/Workspace'
import AddItem from '@/components/AddItem/AddItem.vue'
import ListProjects from '@/components/ListProjects/ListProjects.vue'

export default {
  name: 'Workspace',
  components: { AddItem, ListProjects },
  data () {
    return {
      workspaces: [new Workspace('petit kevin'), new Workspace({title: 'bixterprise'})]
    }
  },
  created () {
    console.log('Workspace component created with workspaces:', this.workspaces)
  },
  methods: {
    addWorkspace (title) {
      console.log('adding workspace with title:', title)
      this.workspaces.push(new Workspace(title))
    },
    addProject (title, index) {
      console.log('addProject event', title)
      this.workspaces.projects[index].addProject(title)
    }
  }
}
