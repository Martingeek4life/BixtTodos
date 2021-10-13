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
    addDescription (descriptionInput) {
      if (this.descriptionInput.length > 0) {
        this.card.description = this.descriptionInput
        alert('description mise à jour')
      } else {
        alert('description vide')
      }
    }
  }
}
