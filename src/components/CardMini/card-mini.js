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
    }
  },
  methods: {
    showModal () {
      var modal = document.getElementById('myModal')
      // var btn = document.getElementById('myBtn')
      modal.style.display = 'block'
    },
    hideModal () {
      var modal = document.getElementById('myModal')
      modal.style.display = 'none'
    }
  }
}
