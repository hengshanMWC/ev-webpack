//只能是object非array类型
export function isObject(data){
	return data && typeof data === 'object' && !Array.isArray(data)
}
// export function isY(val){
// 	return val !== '' && val !== undefined && val !== null
// }

