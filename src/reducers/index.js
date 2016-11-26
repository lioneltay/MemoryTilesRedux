export gameReducer from './gameReducers/reducer_game'
export gridReducer from './gameReducers/reducer_grid'
export tileReducer from './gameReducers/reducer_tile'

export { 
	INTERACTING, 
	VIEWING,
	WON,
	LOST
} from './gameReducers/reducer_game'

export {
	FILLED_CORRECTLY,
	FILLED_INCORRECTLY,
	UNFILLED_CORRECTLY,
	UNFILLED_INCORRECTLY
} from './gameReducers/reducer_tile'
