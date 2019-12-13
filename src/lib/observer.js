import Dep from './dep.js'
import { isObject } from '~/common'
export default class Observer{
	constructor(vm, data){
		this.vm = vm
		this.walk(data)
	}
	walk(data){
		Object.keys(data).forEach( key => this.defineReactive(data, key, data[key]))
	}
	/**
	 * 数据劫持
	 * @param {Object} obj 
	 * @param {String} key
	 * @param {*} val 
	 */
	defineReactive(obj, key, val){
		this.observe(val)
		// 每个值都有对应的Dep来连接observer和watch
		let dep = new Dep()
		Object.defineProperty(obj, key, {
			enumerable: true,
    		configurable: true,
    		get(){
					// Dep纽扣
    			if(Dep.target){
    				dep.addSub(Dep.target)
    			}
    			return val
    		},
    		set(newVal){
    			if(val === newVal) return
					val = newVal
					dep.notify()
    		}
		})
	}
	/**
	 * 递归劫持
	 * @param {*} data 
	 */
	observe(data){
		if(!isObject(data)) return
		new Observer(this.vm, data)
	}
}

