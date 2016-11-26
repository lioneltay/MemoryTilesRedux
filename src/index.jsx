import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'


import { Game, App, Arcade } from 'components'
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

const store = createStore(reducer, applyMiddleware(thunk))

// initialisation which will go in level selection later
import { initialiseGame } from 'utils'

store.dispatch(initialiseGame({
	height: 3,
	width: 3,
	numInPattern: 3,
	time: 10
}))


ReactDOM.render(
  <Provider store={store}>
  	<Router history={browserHistory}>
  		<Route path='/' component={App} />
  		<Route path='/play' component={Game} />
  		<Route path='/arcade' component={Arcade} />
  		<Route path='/arcade/play/:level' component={Game} />
  	</Router>
  </Provider>
  , document.querySelector('.container'))







