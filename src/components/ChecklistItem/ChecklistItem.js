// import Suggested from '@/components/Suggested/Suggested.vue'
export default {
  data () {
    return {
      task: '',
      showInput: false,
      size: {type: Number, required: true},
      percent: 0,
      tasksSize: 0,
      tasksDone: 0
    }
  },
  props: {
    card: {type: Object, required: true},
    checklist: {type: Object, required: true},
    checklistElement: {type: Object, required: true}
  },
  components: {
    // Suggested
  },
  methods: {
    addItem () {
      if (this.task.length > 0) {
        for (let i = 0; i < this.card.checklists.length; i++) {
          // console.log('if bsr: ' + i + '  checklistElement: ' + this.checklistElement.title + '  checklist: ' + this.checklist.title + '  checklist de la carte' + this.card.checklists[i].title)
          if (this.checklistElement.title === this.card.checklists[i].title) {
            this.card.checklists[i].addTask(this.task)

            /* calcul de la valeur de la progress bar */
            this.tasksSize = this.card.checklists[i].tasks.length
            this.tasksDone = 0

            for (let k = 0; k < this.card.checklists[i].tasks.length; k++) {
              if (this.card.checklists[i].tasks[k].done) {
                this.tasksDone = this.tasksDone + 1
              }
            }
            this.percent = (this.tasksDone * 100) / this.tasksSize
            // alert('size:  ' + this.tasksSize + 'done:   ' + this.tasksDone)
            this.$emit('changePercent', this.tasksSize, this.tasksDone)
          }
        }
        this.showInput = false
        this.task = ''
      }
    }
  }
}
