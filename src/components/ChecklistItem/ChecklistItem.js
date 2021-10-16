// import Suggested from '@/components/Suggested/Suggested.vue'
export default {
  data () {
    return {
      task: '',
      showInput: false
    }
  },
  props: {
    card: {type: Object, required: true},
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
          }
        }
        this.showInput = false
        this.task = ''
      }
    }
  }
}
