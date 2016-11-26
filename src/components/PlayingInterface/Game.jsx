// External Libraries
import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router'

// Constants
import { INTERACTING, VIEWING } from 'constants'


// Action Creators
import { initialiseGame } from 'utils'

// Components
import Grid from './Grid'
import ProgressButton from './ProgressButton'


// App Component
class App extends Component {	
	render() {
		const { timeRemaining, gameStatus } = this.props
		return (
			<div className='app'>
				<h1>MemoryTiles</h1>
				<Grid />
				<div>Time Remaining: {timeRemaining / 1000}</div>
				<div>Game Status: {gameStatus}</div>
				<ProgressButton />
				<Link className='btn btn-primary' to='/'>Select Level</Link>
			</div>
		)
	}
}

App.propTypes = {
	gameStatus: PropTypes.string.isRequired,
	timeRemaining: PropTypes.number.isRequired,
	initialiseGame: PropTypes.func.isRequired
}


// Container
function mapStateToProps(state) {
	return {
		gameStatus: state.game.status,
		timeRemaining: state.game.timeRemaining
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ initialiseGame }, dispatch)
}

export default connect(
	mapStateToProps, 
	mapDispatchToProps
)(App)









