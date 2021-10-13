import ChecklistItem from '@/components/ChecklistItem/ChecklistItem.vue'
// import ProgressBar from '@/components/ProgressBar/ProgressBar.vue'
import ProgressBar from 'vue-simple-progress'
export default {
  data () {
    return {
      checklistItem: '',
      showInput: false,
      isChecked: false,
      increasing_pct: 0,
      tasksSize: 0,
      tasksDone: 0// {type: Number, required: true, default: 0}
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
              this.card.checklists[i].deleteTask(j)
            }
          }
        }
      }
    },
    deleteChecklist (checklistElement) {
      this.card.deleteChecklist(checklistElement)
    },
    changePercentValue (tasksSize, tasksDone) {
      this.tasksSize = tasksSize
      this.tasksDone = tasksDone
      this.increasing_pct = Math.floor((this.tasksDone * 100) / this.tasksSize)
    },
    cheched (checklistElement, task) {
      this.isChecked = !this.isChecked
      for (let i = 0; i < this.card.checklists.length; i++) {
        if (checklistElement.title === this.card.checklists[i].title) {
          for (let j = 0; j < checklistElement.tasks.length; j++) {
            if (checklistElement.tasks[j] === task) {
              this.card.checklists[i].tasks[j].done = !this.card.checklists[i].tasks[j].done
              if (this.card.checklists[i].tasks[j].done) {
                this.changePercentValue(this.tasksSize, this.tasksDone + 1)
              } else {
                this.changePercentValue(this.tasksSize, this.tasksDone - 1)
              }
            }
          }
        }
      }
    }
  }
}
