import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


import {
	begin
} from 'actions'

import { restart, checkAnswer } from 'utils'

import { INTERACTING, VIEWING } from 'constants'



function ProgressButton({ 
	gameStatus, 
	checkAnswer, 
	restart, 
	begin }) {
	
	function buttonClickHandler() {
		if (gameStatus === VIEWING) return begin
		else if (gameStatus === INTERACTING) return checkAnswer
		else return restart
	}
	
	function buttonText() {
		if (gameStatus === VIEWING) return 'Begin'
		else if (gameStatus === INTERACTING) return 'Check'
		else return 'Restart'
	}
	
	return (
		<button className='progressButton btn btn-primary'
			onClick={buttonClickHandler()}
			>
			{buttonText()}
		</button>
	)
}


ProgressButton.propTypes = {
	checkAnswer: PropTypes.func.isRequired,
	restart: PropTypes.func.isRequired,
	begin: PropTypes.func.isRequired,
	
	gameStatus: PropTypes.string.isRequired
}



function mapStateToProps(state) {
	return {
		gameStatus: state.game.status
	}	
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		checkAnswer, 
		restart,
		begin
	}, dispatch)
}


export default connect(
	mapStateToProps, 
	mapDispatchToProps
)(ProgressButton)





