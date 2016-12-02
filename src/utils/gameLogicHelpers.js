import {
	setStatus,
	setTimeAllowed,
	setTimeRemaining,
	setGridHeight,
	setGridWidth,
	setGridNumInPattern,
	showHelp,
	refreshTiles,
	tickTimer,
	setTimerId
} from 'actions'

import {
	VIEWING,
	INTERACTING,
	WON,
	LOST,
	
	FILLED_CORRECTLY,
	UNFILLED_CORRECTLY,
	
	PUNCH_FACTOR
	
} from 'constants/game'

import { TICK_LENGTH } from 'constants'


// Compound Actions
export function checkAnswer() {
	return function(dispatch, getState) {
		const state = getState()
		const { tiles } = state.game.grid
		const { timeRemaining, timeAllowed } = state.game
		// Check if the answer is correct
		const won = checkWin(tiles)
		// Set status to won if won
		if (won) return dispatch(setStatus(WON))
		
		// Otherwise show help briefly
		dispatch(showHelp(true))		
		setTimeout(() => {
			dispatch(showHelp(false))
		}, 500)
		// And punch the player
		const punch = Math.min(timeRemaining, timeAllowed * PUNCH_FACTOR)
		dispatch(setTimeRemaining(timeRemaining - punch))
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
		dispatch(setStatus(LOST))
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
	clearInterval(getState().game.timerId)
	const id = setInterval(() => {
		const { timeRemaining, status, timerId } = getState().game
		if (timeRemaining <= TICK_LENGTH) {
			clearInterval(timerId)
			dispatch(setStatus(LOST))
		}	else if (status !== VIEWING && status !== INTERACTING ) {
			clearInterval(timerId)
			dispatch(setStatus(WON))
		}
		dispatch(tickTimer(TICK_LENGTH))
	}, TICK_LENGTH)
	
	dispatch(setTimerId(id))
}


function checkWin(tiles) {
	return tiles.every((tile) => {
			return tile.status === FILLED_CORRECTLY || 
				tile.status === UNFILLED_CORRECTLY
	})
}