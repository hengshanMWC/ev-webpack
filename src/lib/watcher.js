import Dep from './dep'
import { getAnalysisKey } from '~/mvvm'
export default class Watcher {
	constructor(vm, exp, cd){
		this.vm = vm;
		this.exp = exp;
		this.cd = cd;
		this.value = this.get()
	}
	//有的key是a.b.c
	get key(){
		return getAnalysisKey(this.vm,this.exp)
	}
	// value更新时触发
	update(){
		this.run()
	}
	// 触发函数
	run(){
		let oldValue = this.value
		let newValue = this.key
		if(oldValue === newValue) return
		this.value = newValue
		this.cd.call(this.vm)	
	}
	// dep收集this
	get(){
		Dep.target = this;
		let value = this.key
		Dep.target = null
		return value
	}
}