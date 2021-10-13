import Checklist from '@/classes/Checklist'
import SuggestedArea from '@/components/SuggestedArea/SuggestedArea.vue'
export default {
  data () {
    return {
      checklistName: '',
      showChecklist: false,
      checklist: {type: Object, required: true}
    }
  },
  props: {
    card: {type: Object, required: true}
    // checklist: { type: Object, required: false, default () { return new Checklist() } }
  },
  components: {
    SuggestedArea
  },
  methods: {
    createChecklist () {
      if (this.checklistName.length > 0) {
        this.checklist = new Checklist(this.checklistName)
        this.card.addChecklists(this.checklist)
        this.checklistName = ''
        console.log('ma checklist: ' + this.checklist.title)
      }
    }
  }
}
