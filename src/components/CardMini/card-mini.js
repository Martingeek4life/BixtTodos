import CardDescription from '@/components/CardDescription/CardDescription.vue'
export default {
  name: 'MiniCard',
  props: {
    card: {type: Object, required: true}
  },
  components: {
    CardDescription
  },
  data () {
    return {
      showModal: false
    }
  },
  methods: {
    /*
    showModal () {
      var modal = document.getElementById('myModal')
      modal.style.display = 'block'
      console.log('cardMini: ' + this.card.title)
    },
    hideModal () {
      var modal = document.getElementById('myModal')
      modal.style.display = 'none'
    }
    */
  }
}
