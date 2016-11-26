import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


import Grid from './Grid'
import {
	fillTile,
	checkAnswer,
	restart,
	begin
} from 'actions'

import { INTERACTING, VIEWING } from 'reducers'


class App extends Component {
	
	onTileClick() {
		return this.props.game.status === INTERACTING ?
			this.props.fillTile :
			null
	}
	
	
	buttonClickHandler() {
		const props = this.props
		const status = this.props.game.status
		if (status === VIEWING) return props.begin
		else if (status === INTERACTING) return props.checkAnswer
		else return props.restart
	}
	
	buttonText() {
		const status = this.props.game.status
		if (status === VIEWING) return 'Begin'
		else if (status === INTERACTING) return 'Check'
		else return 'Restart'
	}
	
  render() {
		const props = this.props
		const game = props.game
		const grid = game.grid
		
    return (
      <div className='app'>
      	<h1>MemoryTiles</h1>
      	<Grid 
      		grid={grid}
      		onTileClick={this.onTileClick()}
      		/>
				<div>Time Remaining: {game.timeRemaining}</div>
				<div>Game Status: {game.status}</div>
    		<button className='btn btn-primary'
    			onClick={this.buttonClickHandler()}
    			>
    			{this.buttonText()}
				</button>
    		
      </div>
    )
  }
}


App.propTypes = {
	game: PropTypes.object.isRequired,
	fillTile: PropTypes.func.isRequired,
	checkAnswer: PropTypes.func.isRequired,
	restart: PropTypes.func.isRequired,
	begin: PropTypes.func.isRequired
}




function mapStateToProps(state) {
	return {
		game: state.game
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ 
		fillTile, 
		checkAnswer, 
		restart,
		begin
	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)