import Checklist from '@/classes/Checklist'
import SuggestedArea from '@/components/SuggestedArea/SuggestedArea.vue'
export default {
  data () {
    return {
      checklistName: '',
      name: '',
      member: '',
      showChecklist: false,
      showMembers: false,
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
      if (this.name.length > 0) {
        this.checklist = new Checklist(this.name)
        this.card.addChecklists(this.checklist)
        this.checklistName = this.name
        this.name = ''
        console.log('ma checklist: ' + this.checklist.title)
      }
    },
    addMember () {
      if (this.member.length > 0) {
        this.card.addMember(this.member)
        this.member = ''
      }
    }
  }
}
