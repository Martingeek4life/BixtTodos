import ChecklistItem from '@/components/ChecklistItem/ChecklistItem.vue'
import ProgressBar from '@/components/ChecklistItem/ProgressBar.vue'
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
    ChecklistItem,
    ProgressBar
  },
  methods: {
    deleteTask (checklistElement, task) {
      for (let i = 0; i < this.card.checklists.length; i++) {
        if (checklistElement.title === this.card.checklists[i].title) {
          for (let j = 0; j < checklistElement.tasks.length; j++) {
            if (checklistElement.tasks[j] === task) {
              alert('wanda')
              this.card.checklists[i].deleteTask(j)
            }
          }
        }
      }
    },
    deleteChecklist (checklistElement) {
      this.card.deleteChecklist(checklistElement)
    }
  }
}
