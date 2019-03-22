export default class Dep {
	constructor(){
		this.subs = []
	}
	addSub(watcher){
		this.subs.push(watcher)
	}
	notify(){
		this.subs.forEach( watcher => {
			watcher.update()
		})
	}
}
Dep.target = null
