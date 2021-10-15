import SuggestedArea from '@/components/SuggestedArea/SuggestedArea.vue'
export default {
  data () {
    return {
      checklistName: ''
    }
  },
  props: {
    card: {type: Object, required: true}
  },
  components: {
    SuggestedArea
  },
  methods: {
    showModalCheck () {
      var modal = document.getElementById('myModalCheck')
      // var btn = document.getElementById('myBtn')
      modal.style.display = 'block'
    },
    hideModalCheck () {
      var modal = document.getElementById('myModalCheck')
      modal.style.display = 'none'
    },
    addChecklist () {
      if (this.checklistName.length > 0) {
        this.card.addChecklist(this.checklistName)
        alert('checklist mise à jour')
        alert(this.card.checklists.title)
      }
    }
  }
}
