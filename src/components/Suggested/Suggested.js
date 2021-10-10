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
    createChecklist () {
      if (this.checklistName.length > 0) {
        this.card.addChecklist(this.checklistName)
      }
    }
  }
}
