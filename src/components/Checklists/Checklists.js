// import Suggested from '@/components/Suggested/Suggested.vue'
export default {
  data () {
    return {
      checklistItem: '',
      showInput: false
    }
  },
  props: {
    card: {type: Object, required: true}
  },
  components: {
    // Suggested
  },
  methods: {
    addItem () {
      if (this.checklistItem.length > 0) {
        this.showInput = false
        console.log(this.card.checklists)
        // this.card.addChecklist(this.checklistName)
      }
    }
  }
}
