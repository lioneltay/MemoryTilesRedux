import gridReducer from './reducer_grid'

import {
	SET_STATUS, 
	SET_TIME_REMAINING,
	SET_TIME_ALLOWED,
	TICK_TIMER, 
	CHECK_ANSWER,
	BEGIN,
	SHOW_HELP,
	
	INTERACTING,
	VIEWING,
	WON,
	LOST
} from 'constants'

import { 
	FILLED_CORRECTLY, 
	UNFILLED_CORRECTLY
} from 'constants'


/*
STRUCTURE
game: {
	status: bool
	timeAllowed:
	timeRemaining: bool
	showHelp: bool
	grid: array
}
*/



export default function(state = {}, action) {
	if (action.type === SET_STATUS) {
		return { ...state, status: action.status }
	}
	
	else if (action.type === SET_TIME_REMAINING) {
		return { ...state, timeRemaining: action.time }
	}
	
	else if (action.type === SET_TIME_ALLOWED) {
		return { ...state, timeAllowed: action.time }
	}
	
	else if (action.type === TICK_TIMER) {
		return { 
			...state, 
			timeRemaining: state.timeRemaining - action.tickLength
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


