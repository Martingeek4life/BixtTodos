import SuggestedArea from '@/components/SuggestedArea/SuggestedArea.vue'
export default {
  data () {
    return {
      checklistName: '',
      showChecklist: false
    }
  },
  props: {
    card: {type: Object, required: true}
  },
  components: {
    SuggestedArea
  },
  methods: {
    addChecklist () {
      alert('wanda')
      if (this.checklistName.length > 0) {
        this.card.addChecklist(this.checklistName)
        // alert(this.card.checklists.title)
      }
    }
  }
}
