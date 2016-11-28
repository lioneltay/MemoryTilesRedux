// External Libraries
import React, { PropTypes } from 'react'
import { connect } from 'react-redux'


// Components
import ProgressButton from './ProgressButton'
import Timer from './Timer'


// App Component
function Footer({ timeRemaining, gameStatus, timeAllowed }) {	
	return (
		<div className='Footer'>
			<Timer 
				timeAllowed={timeAllowed} 
				timeRemaining={timeRemaining} />
			<h6>Game Status: {gameStatus}</h6>
			<ProgressButton />
		</div>
	)
}

Footer.propTypes = {
	gameStatus: PropTypes.string.isRequired,
	timeRemaining: PropTypes.number.isRequired
}


// Container
function mapStateToProps(state) {
	return {
		gameStatus: state.game.status,
		timeRemaining: state.game.timeRemaining,
		timeAllowed: state.game.timeAllowed
	}
}


export default connect(mapStateToProps)(Footer)









