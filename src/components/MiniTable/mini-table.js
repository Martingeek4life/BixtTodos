import Table from '@/classes/Table'

export default {
	name: 'MiniTable',
	props: {
		table: {type:Object, required: false, default () {return new Table()}}
	},
	data () {
		return {}
	},
	methods: {}
}