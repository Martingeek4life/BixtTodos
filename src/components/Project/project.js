// import Table from '@/classes/Table'
import Project from '@/classes/Project'
import List from '@/classes/List'
import ListCard from '@/components/ListCard/ListCard.vue'
import AddItem from '@/components/AddItem/AddItem'
import { Container, Draggable } from 'vue-smooth-dnd'

export default {
  name: 'Project',
  components: {ListCard, Container, Draggable, AddItem},
  props: {
    project: {
      type: Object,
      required: false,
      default () {
        return new Project()
      }
    }
  },
  data () {
    return {
      isAddingList: false,
      newListTitle: ''
    }
  },
  created () {
    console.log('Table component created, project:', this.project)
  },
  methods: {
    addList () {
      this.project.addList(this.newListTitle)
      this.isAddingList = false
      this.newListTitle = ''
    },
    acceptList (sourceContainerOptions, payload) {
      console.log('sourceContainerOptions:', sourceContainerOptions, 'payload:', payload)
      // return true
    },
    onDrop (event) {
      console.log('drop list with event:', event)
      if (event.removedIndex != null) {
        this.project.lists.splice(event.removedIndex, 1)
      }
      if (event.addedIndex != null) {
        this.project.lists.splice(event.addedIndex, 0, event.payload)
      }
    },
    getList (index) {
      return new List(this.project.lists[index])
    }
  }
}
