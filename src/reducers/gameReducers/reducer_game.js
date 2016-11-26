import gridReducer from './reducer_grid'

import {
	SET_STATUS, 
	SET_TIMER, 
	TICK_TIMER, 
	CHECK_ANSWER,
	RESTART,
	BEGIN,
	SHOW_HELP
} from 'actions'

import { 
	FILLED_CORRECTLY, 
	UNFILLED_CORRECTLY
} from './reducer_tile'


export const INTERACTING = 'INTERACTING'
export const VIEWING = 'VIEWING'
export const WON = 'WON'
export const LOST = 'LOST'


const INIT_STATE = {
	status: 'VIEWING',
	timeRemaining: 10,
	showHelp: false,
	grid: gridReducer(undefined, {}),
}


export default function(state = INIT_STATE, action) {
	if (action.type === SET_STATUS) {
		return { ...state, status: action.status }
	}
	
	else if (action.type === SET_TIMER) {
		return { ...state, timeRemaining: action.time }
	}
	
	else if (action.type === TICK_TIMER) {
		return { 
			...state, 
			timeRemaining: state.timeRemaining - 1
		}
	}
	
	else if (action.type === CHECK_ANSWER) {
		return {
			...state,
			status: checkAnswer(state)
		}
	}
	
	else if (action.type === RESTART) {
		return {
			...INIT_STATE,
			grid: gridReducer(state.grid, action)
		}
	}
	
	else if (action.type === BEGIN) {
		return {
			...state,
			status: INTERACTING,
			grid: gridReducer(state.grid, action)
		}
	}
	
	else if (action.type === SHOW_HELP) {
		return {
			...state,
			showHelp: action.show
		}
	}
	
	else {
		return {
			...state,
			grid: gridReducer(state.grid, action)
		}
	}
}

function checkAnswer(state) {
	// Can only check answer while interacting
	if (state.status !== INTERACTING) return state.status
	
	const won = state.grid.tiles.every((tile) => {
		return tile.status === FILLED_CORRECTLY || 
			tile.status === UNFILLED_CORRECTLY
	})
	return won ? 'WON' : INTERACTING
}


