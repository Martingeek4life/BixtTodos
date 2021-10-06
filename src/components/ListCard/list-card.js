import List from '@/classes/List'
import Card from '@/components/Card/Card.vue'
import { Container, Draggable } from "vue-smooth-dnd"

export default {
  name: 'ListCard',
  components: {Card, Container, Draggable},
  props: {
    list: {
      type: Object,
      required: false,
      default () {
        return new List(
        )
      }
    }
  },
  data () {
    return {
      isAddingCard:false,
      newCardTitle:''
    }
  },
  methods: {
    addCard (evvent) {
      this.list.addCard(this.newCardTitle)
      this.isAddingCard = false
      this.newCardTitle = ''
    }
  },
  watched: {
    isAddingCard (n,o) {
      if(n){
        this.newCardTitle = ''
        document.getElementById('add-card-textarea-title').focus()
      }
    }
  }
}