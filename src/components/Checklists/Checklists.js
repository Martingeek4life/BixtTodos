import ChecklistItem from '@/components/ChecklistItem/ChecklistItem.vue'
export default {
  data () {
    return {
      checklistItem: '',
      showInput: false
    }
  },
  props: {
    card: {type: Object, required: true},
    checklist: {type: Object, required: true}
  },
  components: {
    ChecklistItem
  },
  methods: {
    addItem () {
      if (this.checklistItem.length > 0) {
        this.checklist.addTask(this.checklistItem)
        this.showInput = false
        console.log(this.card.checklists)
        // this.card.addChecklist(this.checklistName)
      }
    }
  }
}
