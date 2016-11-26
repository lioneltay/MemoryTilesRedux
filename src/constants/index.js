// ACTIONS
export const SET_STATUS = 'SET_STATUS'
export const TICK_TIMER = 'TICK_TIMER'
export const SET_TIME_REMAINING = 'SET_TIME_REMAINING'
export const SET_TIME_ALLOWED = 'SET_TIME_ALLOWED'
export const CHECK_ANSWER = 'CHECK_ANSWER'
export const BEGIN = 'BEGIN'
export const SHOW_HELP = 'SHOW_HELP'

export const SET_GRID_HEIGHT = 'SET_GRID_HEIGHT'
export const SET_GRID_WIDTH = 'SET_GRID_WIDTH'
export const SET_NUM_IN_PATTERN = 'SET_NUM_IN_PATTERN'
export const REFRESH_TILES = 'REFRESH_TILES'

export const CLICK_TILE = 'CLICK_TILE'
export const SET_IN_PATTERN = 'SET_IN_PATTERN'


// GAME STATUS
export const INTERACTING = 'INTERACTING'
export const VIEWING = 'VIEWING'
export const WON = 'WON'
export const LOST = 'LOST'


// TILE STATUS
export const FILLED_CORRECTLY = 'FILLED_CORRECTLY'
export const FILLED_INCORRECTLY = 'FILLED_INCORRECTLY'
export const UNFILLED_CORRECTLY = 'UNFILLED_CORRECTLY'
export const UNFILLED_INCORRECTLY = 'UNFILLED_INCORRECTLY'


// 
export const TICK_LENGTH = 300


// LEVELS
export const ARCADE_LEVELS = [
	{ levelNum: 1, height: 3, width: 3, numInPattern: 3, time: 10 },
	{ levelNum: 2, height: 3, width: 3, numInPattern: 4, time: 12 },
	{ levelNum: 3, height: 3, width: 3, numInPattern: 5, time: 14 },
	{ levelNum: 4, height: 4, width: 4, numInPattern: 3, time: 16 }
]






