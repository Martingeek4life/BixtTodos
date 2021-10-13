export default {
  name: 'AddItem',
  props: {
    type: {type: String, required: false, default: 'item'},
    add: {type: Function, required: true},
    isTextarea: {type: Boolean, required: false, default: false}
  },
  data () {
    return {
      isAdding: false,
      newItemTitle: ''
    }
  },
  methods: {
    addItem () {
      console.log('addItem function invoke with title:', this.newItemTitle)
      this.add(this.newItemTitle)
      this.isAdding = false
      this.$emit('add')
    }
  },
  watch: {
    isAdding (n, o) {
      if (n) {
        this.newItemTitle = ''
      }
    }
  }
}
