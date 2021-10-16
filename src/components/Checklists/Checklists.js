import ChecklistItem from '@/components/ChecklistItem/ChecklistItem.vue'
// import ProgressBar from '@/components/ProgressBar/ProgressBar.vue'
import ProgressBar from 'vue-simple-progress'
export default {
  data () {
    return {
      checklistItem: '',
      showInput: false
      // isChecked: false
    }
  },
  props: {
    card: {type: Object, required: true}
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
              this.card.checklists[i].deleteTask(j)
            }
          }
        }
      }
    },
    deleteChecklist (checklistElement) {
      for (let i = 0; i < this.card.checklists.length; i++) {
        console.log('i: ' + i + 'checklistElement:  ' + checklistElement.title + '  this.card.checklists[i].title: ' + this.card.checklists[i].title)
        if (checklistElement.title === this.card.checklists[i].title) {
          this.card.deleteChecklist(i)
        }
      }
      // alert('key:  ' + (checklistElement).indexOf)
    },
    cheched (checklistElement, task) {
      for (let i = 0; i < this.card.checklists.length; i++) {
        if (checklistElement.title === this.card.checklists[i].title) {
          for (let j = 0; j < checklistElement.tasks.length; j++) {
            if (checklistElement.tasks[j] === task) {
              this.card.checklists[i].tasks[j].done = !this.card.checklists[i].tasks[j].done
            }
          }
        }
      }
    }
  }
}
