import Table from '@/classes/Table'
import ListCard from '@/components/ListCard/ListCard.vue'
import { Container, Draggable } from 'vue-smooth-dnd'

export default {
  name: 'TableComponent',
  components: {ListCard, Container, Draggable},
  props: {
    table: {
      type: Object,
      required: false,
      default () {
        return new Table()
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
    console.log('Table component created, table:', this.table)
  },
  methods: {
    addList () {
      this.table.addList(this.newListTitle)
      this.isAddingList = false
      this.newListTitle = ''
    }
  }
}
