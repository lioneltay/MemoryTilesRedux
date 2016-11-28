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
export const TICK_LENGTH = 50


// LEVELS
export const ARCADE_LEVELS = [
	{
		areaNum: 1,
		levels: [
			{ levelNum: 1, height: 3, width: 3, numInPattern: 3, time: 25 },
			{ levelNum: 2, height: 3, width: 3, numInPattern: 4, time: 25 },
			{ levelNum: 3, height: 3, width: 3, numInPattern: 5, time: 25 },

			{ levelNum: 4, height: 4, width: 4, numInPattern: 4, time: 26 },
			{ levelNum: 5, height: 4, width: 4, numInPattern: 5, time: 28 },
			{ levelNum: 6, height: 4, width: 4, numInPattern: 6, time: 30 },
			{ levelNum: 7, height: 4, width: 4, numInPattern: 7, time: 32 },
			{ levelNum: 8, height: 4, width: 4, numInPattern: 8, time: 34 },
			{ levelNum: 9, height: 4, width: 4, numInPattern: 9, time: 36 }
		]
	},
	
	{
		areaNum: 2,
		levels: [
			{ levelNum: 1, height: 5, width: 5, numInPattern: 4, time: 27 },
			{ levelNum: 2, height: 5, width: 5, numInPattern: 5, time: 30 },
			{ levelNum: 3, height: 5, width: 5, numInPattern: 6, time: 33 },
			{ levelNum: 4, height: 5, width: 5, numInPattern: 7, time: 36 },
			{ levelNum: 5, height: 5, width: 5, numInPattern: 8, time: 39 },
			{ levelNum: 6, height: 5, width: 5, numInPattern: 9, time: 42 },
			{ levelNum: 7, height: 5, width: 5, numInPattern: 10, time: 45 },
			{ levelNum: 8, height: 5, width: 5, numInPattern: 11, time: 48 },
			{ levelNum: 9, height: 5, width: 5, numInPattern: 12, time: 51 },
			{ levelNum: 10, height: 5, width: 5, numInPattern: 13, time: 54 },
			{ levelNum: 11, height: 5, width: 5, numInPattern: 14, time: 57 },
			{ levelNum: 12, height: 5, width: 5, numInPattern: 15, time: 60 }
		]
	},
	
	{
		areaNum: 3,
		levels: [
			{ levelNum: 1, height: 6, width: 6, numInPattern: 5, time: 30 },
			{ levelNum: 2, height: 6, width: 6, numInPattern: 6, time: 34 },
			{ levelNum: 3, height: 6, width: 6, numInPattern: 7, time: 38 },
			{ levelNum: 4, height: 6, width: 6, numInPattern: 8, time: 42 },
			{ levelNum: 5, height: 6, width: 6, numInPattern: 9, time: 46 },
			{ levelNum: 6, height: 6, width: 6, numInPattern: 10, time: 50 },
			{ levelNum: 7, height: 6, width: 6, numInPattern: 11, time: 54 },
			{ levelNum: 8, height: 6, width: 6, numInPattern: 12, time: 58 },
			{ levelNum: 9, height: 6, width: 6, numInPattern: 13, time: 62 },
			{ levelNum: 10, height: 6, width: 6, numInPattern: 14, time: 66 },
			{ levelNum: 11, height: 6, width: 6, numInPattern: 15, time: 70 },
			{ levelNum: 12, height: 6, width: 6, numInPattern: 16, time: 74 },
			{ levelNum: 13, height: 6, width: 6, numInPattern: 17, time: 78 },
			{ levelNum: 14, height: 6, width: 6, numInPattern: 18, time: 82 },
			{ levelNum: 15, height: 6, width: 6, numInPattern: 19, time: 86 },
			{ levelNum: 16, height: 6, width: 6, numInPattern: 20, time: 90 }
		]
	}
]






