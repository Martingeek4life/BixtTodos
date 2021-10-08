
export default {
  name: 'CardDetails',
  props: {
    card: {type: Object, required: true},
    list: {type:Object, required: true}
  },
  data () {
    return {
      newChecklistTitle: '',
      isAddingChecklist: false
    }
  },
  methods: {
    deleteChecklist (event, i) {
      this.card.deleteChecklist(i)
    },
    addChecklist () {
      this.card.addChecklist(this.newChecklistTitle)
    }
  },
  watch: {
    isAddingChecklist (n, o) {
      if (n) {
        this.newChecklistTitle = ''
      }
    }
  }
}
