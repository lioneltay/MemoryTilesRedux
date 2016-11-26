import {
	setStatus,
	setTimeAllowed,
	setTimeRemaining,
	setGridHeight,
	setGridWidth,
	setGridNumInPattern,
	showHelp,
	refreshTiles,
	tickTimer
} from 'actions'

import {
	VIEWING,
	INTERACTING,
	WON,
	LOST,
	
	FILLED_CORRECTLY,
	UNFILLED_CORRECTLY,
	
	TICK_LENGTH
} from 'constants'


// Compound Actions
export function checkAnswer() {
	return function(dispatch, getState) {
		const { tiles } = getState().game.grid
		// Check if the answer is correct
		const won = checkWin(tiles)
		// Set status to won if won
		if (won) return dispatch(setStatus(WON))
		
		// Otherwise show help briefly
		console.log(showHelp(true))
		dispatch(showHelp(true))		
		setTimeout(() => {
			dispatch(showHelp(false))
		}, 500)
	}
}

export function restart() {
	return function(dispatch, getState) {
		const { timeAllowed } = getState().game
		// Game Initialisation
		dispatch(setStatus(VIEWING))
		dispatch(setTimeRemaining(timeAllowed))
		dispatch(showHelp(false))
		
		// Grid Initialisation
		dispatch(refreshTiles())
		
		// beginTimer
		beginTimer(dispatch, getState)
	}
}

export function initialiseGame({ height, width, numInPattern, time }) {
	return function(dispatch, getState) {
		// Input in seconds, but game uses milliseconds
		time = time * 1000
		// Game Initialisation
		dispatch(setStatus(VIEWING))
		dispatch(setTimeAllowed(time))
		dispatch(setTimeRemaining(time))
		dispatch(showHelp(false))
		
		// Grid Initialisation
		dispatch(setGridHeight(height))
		dispatch(setGridWidth(width))
		dispatch(setGridNumInPattern(numInPattern))
		dispatch(refreshTiles())
		
		// beginTimer
		beginTimer(dispatch, getState)
	}
}


// Starts the timer countdown and cleans up after itself
function beginTimer(dispatch, getState) {
	const id = setInterval(() => {
		const { timeRemaining, status } = getState().game
		if (timeRemaining <= TICK_LENGTH) {
			clearInterval(id)
			dispatch(setStatus(LOST))
		}	else if (status !== VIEWING && status !== INTERACTING ) {
			clearInterval(id)
			dispatch(setStatus(WON))
		}
		dispatch(tickTimer(TICK_LENGTH))
	}, TICK_LENGTH)
}


function checkWin(tiles) {
	return tiles.every((tile) => {
			return tile.status === FILLED_CORRECTLY || 
				tile.status === UNFILLED_CORRECTLY
	})
}