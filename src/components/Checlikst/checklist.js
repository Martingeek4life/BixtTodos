import Checklist rom '@/classes/Checklist'

export default {
	name: 'Checklist',
	props: {
		checklist:{type: Object, required: false, default () {return new Checklist()}}
	},
	data () {
		return {
			hideTasksDone: false
		}
	},
	methods: {
		deleteChecklist () {
			this.$emit('delete')
		}
	}
}
