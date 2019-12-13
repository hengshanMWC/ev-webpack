export default class Dep {
	constructor(){
		this.subs = []
	}
	/**
	 * 添加watcher
	 * @param {Watcher} watcher 
	 */
	addSub(watcher){
		this.subs.push(watcher)
	}
	// 触发所有的watcher
	notify(){
		this.subs.forEach( watcher => {
			watcher.update()
		})
	}
}
Dep.target = null
