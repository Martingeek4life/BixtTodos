import List from '@/classes/List'
import CardComponent from '@/components/Card/Card.vue'
import Card from '@/classes/Card'
import AddItem from '@/components/AddItem/AddItem.vue'
import { Container, Draggable } from 'vue-smooth-dnd'

export default {
  name: 'ListCard',
  components: {CardComponent, Container, Draggable, AddItem},
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
    }
  },
  methods: {
    addCard (event) {
      this.list.addCard(this.newCardTitle)
      this.isAddingCard = false
      this.newCardTitle = ''
    },
    onDrop (event) {
      console.log('drop card with event:', event)

      // where we remove
      if (event.removedIndex != null) {
        this.list.cards.splice(event.removedIndex, 1)
      }

      if (event.addedIndex != null) {
        this.list.cards.splice(event.addedIndex, 0, event.payload)
      }
    },
    getCard (index) {
      return new Card(this.list.cards[index])
    }
  },
  watched: {
    isAddingCard (n, o) {
      if (n) {
        this.newCardTitle = ''
        document.getElementById('add-card-textarea-title').focus()
      }
    }
  }
}
