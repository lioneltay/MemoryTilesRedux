export const SET_STATUS = 'SET_STATUS'
export const TICK_TIMER = 'TICK_TIMER'
export const SET_TIMER = 'SET_TIMER'
export const CHECK_ANSWER = 'CHECK_ANSWER'
export const RESTART = 'RESTART'
export const BEGIN = 'BEGIN'
export const SHOW_HELP = 'SHOW_HELP'

export const SET_GRID_HEIGHT = 'SET_GRID_HEIGHT'
export const SET_GRID_WIDTH = 'SET_GRID_WIDTH'

export const CLICK_TILE = 'CLICK_TILE'
export const SET_IN_PATTERN = 'SET_IN_PATTERN'



// ===============================

export function setStatus(status) {
	return {
		type: SET_STATUS,
		status
	}
}

export function tickTimer() {
	return {
		type: TICK_TIMER
	}
}

export function setTimer(time) {
	return {
		type: SET_TIMER,
		time
	}
}

export function checkAnswer() {
	return {
		type: CHECK_ANSWER
	}
}

export function restart() {
	return {
		type: RESTART
	}
}

export function begin() {
	return {
		type: BEGIN
	}
}

export function showHelp(show) {
	return {
		type: SHOW_HELP,
		show
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







