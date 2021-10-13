import Checklists from '@/components/Checklists/Checklists.vue'
export default {
  data () {
    return {
      descriptionInput: '',
      showTextArea: true
    }
  },
  props: {
    card: {type: Object, required: true},
    checklist: {type: Object, required: true}
  },
  components: {
    Checklists
  },
  methods: {
    addDescription (descriptionInput) {
      if (this.descriptionInput.length > 0) {
        this.card.description = this.descriptionInput
        this.showTextArea = false
      } else {
        console.log('description vide')
      }
    }
  }
}
