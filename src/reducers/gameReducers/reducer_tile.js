import { 
	CLICK_TILE, 
	SET_IN_PATTERN,
	BEGIN
} from 'actions/types'

import {
	FILLED_CORRECTLY,
	FILLED_INCORRECTLY,
	UNFILLED_CORRECTLY,
	UNFILLED_INCORRECTLY
} from 'constants/game'



const INIT_FILLED = false
const INIT_IN_PATTERN = false
const INIT_REVEAL = true

const INIT_STATE = {
	filled: INIT_FILLED,
	inPattern: INIT_IN_PATTERN,
	status: getStatus(INIT_FILLED, INIT_IN_PATTERN),
	reveal: INIT_REVEAL
}


export default function(state = {...INIT_STATE}, action) {
	switch (action.type) {
		case CLICK_TILE:
			return fillTile(state)
		case SET_IN_PATTERN:
			return setInPattern(state, action.inPattern)
		case BEGIN:
			return { ...state, filled: false, reveal: false }
		default:
			return state
	}
}

function fillTile(state) {
	const newState = {
		...state,
		filled: !state.filled
	}
	return {
		...newState,
		status: getStatus(newState)
	}
}

function setInPattern(state, inPattern) {
	const newState = {
		...state,
		inPattern
	}
	return {
		...newState,
		status: getStatus(newState)
	}
}

function getStatus({ filled, inPattern }) {
	if (filled && inPattern) return FILLED_CORRECTLY
	if (filled && !inPattern) return FILLED_INCORRECTLY
	if (!filled && !inPattern) return UNFILLED_CORRECTLY
	if (!filled && inPattern) return UNFILLED_INCORRECTLY
}




