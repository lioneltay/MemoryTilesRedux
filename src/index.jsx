import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'


import { App, InvalidRoute } from 'components'

import { Arcade, Area } from 'components/LevelSelection'

import { 
	ArcadeGame,
	SurvivalGame
} from 'components/PlayingInterface/GameModes'

import { gameReducer } from 'reducers'


import { loadLevel, logger, loadSurvivalGame } from 'utils'


const reducer = combineReducers({ 
	game: gameReducer
})

const store = createStore(reducer, applyMiddleware(thunk))

// initialisation which will go in level selection later
import { initialiseGame } from 'utils'
import { ARCADE_LEVELS } from 'constants'

store.dispatch(initialiseGame(ARCADE_LEVELS[0].levels[0]))


console.log(SurvivalGame)
console.log(ArcadeGame)

ReactDOM.render(
  <Provider store={store}>
  	<Router history={browserHistory}>
  		<Route path='/' component={App} />
  		
  		<Route path='/arcade' component={Arcade}  />
			<Route path='/arcade/area/:areaNum' component={Area} />
			
  		<Route path='/arcade/play/:areaNum/:levelNum' component={ArcadeGame} onEnter={loadLevel(store)} />
  		
  		<Route path='/survival' component={SurvivalGame} onEnter={loadSurvivalGame} />
  		
  		<Route path='*' component={InvalidRoute} />
  	</Router>
  </Provider>
  , document.querySelector('.container'))






