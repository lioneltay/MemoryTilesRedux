import { 
	VIEWING, 
	LOST, 
	INTERACTING, 
	WON,
	FILLED_CORRECTLY, 
	UNFILLED_CORRECTLY
} from 'constants/game'


import {
	SET_STATUS,
	TICK_TIMER,
	SET_TIME_REMAINING,
	SET_TIME_ALLOWED,
	CHECK_ANSWER,
	BEGIN,
	SHOW_HELP,
	SET_GRID_HEIGHT,
	SET_GRID_WIDTH,
	SET_NUM_IN_PATTERN,
	REFRESH_TILES,
	CLICK_TILE,
	SET_IN_PATTERN,
	SET_TIMER_ID
} from 'actions/types'


// ===============================

export function setStatus(status) {
	return {
		type: SET_STATUS,
		status
	}
}

export function tickTimer(tickLength) {
	return {
		type: TICK_TIMER,
		tickLength
	}
}

export function setTimeRemaining(time) {
	return {
		type: SET_TIME_REMAINING,
		time
	}
}

export function setTimeAllowed(time) {
	return {
		type: SET_TIME_ALLOWED,
		time
	}
}

export function showHelp(show) {
	return {
		type: SHOW_HELP,
		show
	}
}

export function begin() {
	return {
		type: BEGIN
	}
}

export function setTimerId(id) {
	return {
		type: SET_TIMER_ID,
		timerId: id
	}
}


// ===============================


export function setGridHeight(height) {
	return {
		type: SET_GRID_HEIGHT,
		height
	}
}

export function setGridWidth(width) {
	return {
		type: SET_GRID_WIDTH,
		width
	}
}

export function setGridNumInPattern(numInPattern) {
	return {
		type: SET_NUM_IN_PATTERN,
		numInPattern
	}
}

export function refreshTiles() {
	return {
		type: REFRESH_TILES
	}
}


// ===============================

export function fillTile(tileIndex) {
	return {
		type: CLICK_TILE,
		tileIndex
	}
}

export function setInPattern(tileIndex, inPattern) {
	return {
		type: SET_IN_PATTERN,
		tileIndex,
		inPattern
	}
}

