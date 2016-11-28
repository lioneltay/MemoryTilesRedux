// my logger middleware
export const logger = store => next => action => {
	console.group(action.type)
	console.log(action)
	const result = next(action)
	console.log(JSON.stringify(store.getState(), null, 2))
	console.groupEnd()
	return result
}