import Checklists from '@/components/Checklists/Checklists.vue'
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
    Checklists
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
