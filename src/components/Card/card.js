import Card from '@/classes/Card'
import CardMini from '@/components/CardMini/CardMini.vue'
import CardDetails from '@/components/CardDetails/CardDetails'

export default {
  name: 'Card',
  components: {CardMini, CardDetails},
  props: {
    card: {type: Object, required: false, default () { return new Card() }},
    list: {type: Object, required: true}
  },
  data () {
    return {}
  }
}
