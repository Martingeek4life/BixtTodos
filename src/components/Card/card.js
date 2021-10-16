import Card from '@/classes/Card'
import CardMini from '@/components/CardMini/CardMini.vue'
import CardDetails from '@/components/CardDetails/CardDetails'
import CardDescription from '@/components/CardDescription/CardDescription.vue'

export default {
  name: 'CardComponent',
  components: {CardMini, CardDetails, CardDescription},
  props: {
    card: { type: Object, required: false, default () { return new Card() } },
    list: { type: Object, required: true }
  },
  data () {
    return {}
  }
}
