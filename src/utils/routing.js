import { initialiseGame } from 'utils'
import { ARCADE_LEVELS } from 'constants'


export function loadSurvivalGame(store) {
	return function(nextState, replace) {
		store.dispatch(initialiseGame(ARCADE_LEVELS[0].levels[0]))
	}
}

export function loadLevel(store) {
	return function(nextState, replace) {
		const { areaNum, levelNum } = nextState.params
		
		if (validLevel(areaNum, levelNum)) {
			store.dispatch(initialiseGame(ARCADE_LEVELS[areaNum-1].levels[levelNum-1]))
		} else {
			replace('/invalid-route')
		}
	}
}

export function validLevel(area, level) {
	area = Number(area)
	level = Number(level)
	const data = ARCADE_LEVELS
	const areaInd = area - 1
	const levelInd = level - 1
	
	return data[areaInd] && data[areaInd].levels[levelInd]
}

// Returns next level if it exists, otherwise return null
export function nextLevel(area, level) {
	if (!validLevel(area,level)) return null
	
	area = Number(area)
	level = Number(level)
	const data = ARCADE_LEVELS
	const areaInd = area - 1
	const levelInd = level - 1	
	
	
	// There is a next level in this area
	if (data[areaInd].levels[levelInd+1]) {
		return { area, level: level + 1 }
	} 
	// Else return first level of next area
	else if (data[areaInd + 1]) {
		return { area: area + 1, level: 1 }
	}
	
	return null
}


export function prevLevel(area, level) {
	if (!validLevel(area,level)) return null
	
	area = Number(area)
	level = Number(level)
	const data = ARCADE_LEVELS
	const areaInd = area - 1
	const levelInd = level - 1	
	
	
	// There is a previous level in this area
	if (data[areaInd].levels[levelInd-1]) {
		return { area, level: level - 1 }
	} 
	// Else return last level of previous area
	else if (data[areaInd - 1]) {
		return { area: area - 1, level: data[areaInd - 1].levels.length }
	}
	
	return null
}







