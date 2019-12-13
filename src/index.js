import VE from '@/lib/index'
import ajax from '~/ajax'
import SERVER from './config'
import '@/assets/style/css/index.css'
import '@/assets/style/scss/index.scss'
export default new VE({
	el: '#app',
	data: {
		title: '',
		name: '',
		sex: '',
		url: '',
		born: 1996,
		year: 2019,
		study: {
			chinese: 100,
			english: 100,
			math: 100,
		}
	},
	computed: {
		age(){
			return this.year - this.born
		},
		score(){
			let study = this.study
			return Object.keys(study).reduce((val, newKey) => val + Number(study[newKey]),0)
		},
		gender(){
			let sex = this.sex
			let map = {
				'女': sex === 0,
				'男': sex === 1,
				'双性人': !isNaN(sex) && sex !== 0 && sex !== 1,
				'外星人': isNaN(sex),
			}
			return Object.keys(map).find( key => map[key])
		}
	},
	methods: {
		editTitle(){
			this.title = '随机数：' + Math.random() 
		},
		toGithub(){
			location.href = this.url
		}
	},
	beforeCreate(){
		document.title = 'beforeCreate'
		console.log(this)
	},
	async created(){
		// let res = await ajax(SERVER.URL + SERVER.GET_USERINFO)
		// console.log(res)
		// res = JSON.parse(res)
		// this.name = res.name
		// this.sex = res.sex
		
		console.log(this)
	},
	async beforeMount(){
		let res = await ajax(SERVER.URL + SERVER.GET_GITHUBURL)
		this.url = res
		console.log(this)
	},
	mounted(){
		console.log(this)
	},
})