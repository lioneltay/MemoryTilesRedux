import { 
	CLICK_TILE, 
	SET_IN_PATTERN,
	BEGIN
} from 'actions'


export const FILLED_CORRECTLY = 'FILLED_CORRECTLY'
export const FILLED_INCORRECTLY = 'FILLED_INCORRECTLY'
export const UNFILLED_CORRECTLY = 'UNFILLED_CORRECTLY'
export const UNFILLED_INCORRECTLY = 'UNFILLED_INCORRECTLY'


const INIT_FILLED = false
const INIT_IN_PATTERN = false
const INIT_SHOW_STATUS = false
const INIT_REVEAL = true

const INIT_STATE = {
	filled: INIT_FILLED,
	inPattern: INIT_IN_PATTERN,
	status: getStatus(INIT_FILLED, INIT_IN_PATTERN),
	showStatus: INIT_SHOW_STATUS,
	reveal: INIT_REVEAL
}


export default function(state = {...INIT_STATE}, action) {
	switch (action.type) {
		case CLICK_TILE:
			return fillTile(state)
		case SET_IN_PATTERN:
			return setInPattern(state, action.inPattern)
		case BEGIN:
			return { ...state, filled: false, showStatus: false, reveal: false }
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




