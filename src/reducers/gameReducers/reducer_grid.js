import tileReducer from './reducer_tile'


import { 
	SET_GRID_HEIGHT, 
	SET_GRID_WIDTH, 
	RESTART,
	BEGIN,
	setInPattern
} from 'actions'


const INIT_HEIGHT = 6
const INIT_WIDTH = 6
const INIT_NUM_IN_PATTERN = 10

const INIT_STATE = {
	height: INIT_HEIGHT,
	width: INIT_WIDTH,
	numInPattern: INIT_NUM_IN_PATTERN,
	tiles: randomGrid(
		INIT_HEIGHT,
		INIT_WIDTH,
		INIT_NUM_IN_PATTERN
	)
}


export default function(state = INIT_STATE, action) {
	switch (action.type) {
		case SET_GRID_HEIGHT:
			return { ...state, height: action.height }		
		case SET_GRID_WIDTH:
			return { ...state, width: action.width }
		case RESTART:
			return {
				...INIT_STATE,
				tiles: randomGrid(INIT_STATE.height, INIT_STATE.width, INIT_STATE.numInPattern)
			}
		case BEGIN:
			return {
				...state,
				tiles: state.tiles.map((tile) => {
					return tileReducer(tile, action)
				})
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








