import tileReducer from './reducer_tile'


import { 
	SET_GRID_HEIGHT, 
	SET_GRID_WIDTH,
	BEGIN,
	SET_NUM_IN_PATTERN,
	REFRESH_TILES
} from 'constants'

import { setInPattern } from 'actions'


export default function(state = { tiles: [] }, action) {
	switch (action.type) {
		case SET_GRID_HEIGHT:
			return { ...state, height: action.height }		
		case SET_GRID_WIDTH:
			return { ...state, width: action.width }
		case SET_NUM_IN_PATTERN:
			return { ...state, numInPattern: action.numInPattern }
		case BEGIN:
			return {
				...state,
				tiles: state.tiles.map((tile) => {
					return tileReducer(tile, action)
				})
			}
		case REFRESH_TILES:
			return {
				...state,
				tiles: randomGrid(state.height, state.width, state.numInPattern)
			}
		default:
			return {
				...state,
				tiles: state.tiles.map((tile, i) => {
					return action.tileIndex === i ?
						tileReducer(tile, action) :
						tile
				})
			}
	}
}

function randomGrid(height, width, numInPattern) {
	let tiles = []
	for (let i = 0; i < height * width; i++) {
		tiles[i] = tileReducer(undefined, {})
	}
	
	let inPattern = 0
	while(inPattern < numInPattern) {
		let pos = randInt(0, tiles.length)
		if (!tiles[pos].inPattern) {
			tiles[pos] = tileReducer(tiles[pos], setInPattern(pos, true))
			inPattern++
		}
	}
	
	return tiles
}

// returns random integer in [min, max)
function randInt(min, max) {
	return min + Math.floor((max - min) * Math.random())
}








