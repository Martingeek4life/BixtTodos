import Project from '@/classes/Project'

export default {
  name: 'MiniProject',
  props: {
    project: { type: Object, required: false, default () { return new Project() } }
  },
  data () {
    return {}
  },
  methods: {}
}
