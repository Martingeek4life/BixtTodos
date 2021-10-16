// import Checklists from '@/components/Checklists/Checklists.vue'
export default {
  data () {
    return {
    }
  },
  props: {
    card: {type: Object, required: true}
  },
  components: {
  },
  methods: {
    deleteMember (member) {
      for (let i = 0; i < this.card.members.length; i++) {
        if (this.card.members[i] === member) {
          this.card.deleteMember(i)
        }
      }
    }
  }
}
