// import Suggested from '@/components/Suggested/Suggested.vue'
export default {
  data () {
    return {
      descriptionInput: ''
    }
  },
  props: {
    card: {type: Object, required: true}
  },
  components: {
    // Suggested
  },
  methods: {
    /*
      addDescription (evvent) {
        this.list.addCard(this.newCardTitle)
        this.isAddingCard = false
        this.newCardTitle = ''
      }
      */
    addDescription (descriptionInput) {
      alert(this.descriptionInput)
      alert(this.card.description)
      if (this.descriptionInput.length > 0) {
        this.card.description = this.descriptionInput
        alert('description mise à jour')
      } else {
        alert('description vide')
      }
    }
  }
}
