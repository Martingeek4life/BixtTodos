import Project from '@/classes/Project'
import ProjectMini from '@/components/ProjectMini/ProjectMini.vue'
import AddItem from '@/components/AddItem/AddItem.vue'

export default{
  name: 'ListProjects',
  props: {
    projects: {
      type: Array, required: false, default () { return [] }
    }
  },
  components: { ProjectMini, AddItem },
  data () {
    let data = {
      listProjects: [
        new Project(),
        new Project('Project created with title'),
        new Project({cover: 'cover-test', title: 'Project created with title and cover'})/**/
      ]
    }
    return data
  },
  methods: {
    loadWorkspace: () => {
      this.workspace = {

      }
    },
    addProject (title) {
      this.projects.push(new Project(title))
      console.log('addProject with title:', title, 'projects:', this.psrojects)
    }
  },
  created () {
    console.log('listProjects component created with listProjects:', this.listProjects, 'workspace:', this.workspace, this, 'data:', this.$data)
  }
}
