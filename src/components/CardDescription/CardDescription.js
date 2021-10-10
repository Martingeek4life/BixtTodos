import Suggested from '@/components/Suggested/Suggested.vue'
export default {
  name: 'CardDescription',
  data () {
    return {
    }
  },
  props: {
    card: {type: Object, required: true}
  },
  components: {
    Suggested
  },
  methods: {
  }
}
