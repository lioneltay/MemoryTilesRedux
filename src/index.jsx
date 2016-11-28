import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'


import { Game, App, Arcade, Area, InvalidRoute } from 'components'
import { gameReducer } from 'reducers'


import { loadLevel, logger } from 'utils'


const reducer = combineReducers({ 
	game: gameReducer
})

const store = createStore(reducer, applyMiddleware(thunk))

// initialisation which will go in level selection later
import { initialiseGame } from 'utils'
import { ARCADE_LEVELS } from 'constants'

store.dispatch(initialiseGame(ARCADE_LEVELS[0].levels[0]))



ReactDOM.render(
  <Provider store={store}>
  	<Router history={browserHistory}>
  		<Route path='/' component={App} />
  		
  		<Route path='/arcade' component={Arcade}  />
			<Route path='/arcade/area/:areaNum' component={Area} />
			
  		<Route path='/arcade/play/:areaNum/:levelNum' component={Game} onEnter={loadLevel(store)} />
  		
  		<Route path='*' component={InvalidRoute} />
  	</Router>
  </Provider>
  , document.querySelector('.container'))






