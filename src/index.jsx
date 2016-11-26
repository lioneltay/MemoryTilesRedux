import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux'


import { App } from 'components'
import { gameReducer } from 'reducers'


// my logger middleware
const logger = store => next => action => {
	console.group(action.type)
	console.log(action)
	const result = next(action)
	console.log(JSON.stringify(store.getState(), null, 2))
	console.groupEnd()
	return result
}

const reducer = combineReducers({ 
	game: gameReducer
})

const store = createStore(reducer, applyMiddleware(logger))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.querySelector('.container'))

// reducer tests
import { 
	SET_STATUS, 
	SET_TIMER, 
	TICK_TIMER, 
	SET_GRID_HEIGHT, 
	SET_GRID_WIDTH,
	setStatus,
	fillTile,
	setInPattern,
	checkAnswer
} from 'actions'

test()

function test() {
//	store.dispatch({
//		type: 'wtf'
//	})
//
//	store.dispatch({
//		type: SET_STATUS,
//		status: 'INTERACTING'
//	})
//	
//	console.log('XXXXXX', store.getState())
//
//	store.dispatch({
//		type: SET_STATUS,
//		status: 'wtf'
//	})
//	
//		store.dispatch({
//			type: SET_TIMER,
//			time: 5
//		})
////		
//		store.dispatch({
//			type: TICK_TIMER
//		})
	
	
//	store.dispatch(setInPattern(0,false))
//	store.dispatch(setInPattern(1,true))
//	
//	store.dispatch(setStatus('INTERACTING'))
//	
//	
//	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}



