import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


import {
	begin
} from 'actions'

import { checkAnswer } from 'utils'

import { INTERACTING, VIEWING } from 'constants/game'



class ProgressButton extends Component {
	
	buttonClickHandler() {
		const { gameStatus, checkAnswer, begin } = this.props
		if (gameStatus === VIEWING) return begin
		else if (gameStatus === INTERACTING) return checkAnswer
		else return null
	}
	
	buttonText() {
		const { gameStatus } = this.props
		if (gameStatus === VIEWING) return 'Go'
		else return 'Check'
	}
	
	render() {
		const { gameStatus } = this.props
		return (
			<a className='ProgressButton btn btn-primary'
				onClick={this.buttonClickHandler()}	>
				{this.buttonText()}
			</a>
		)		
	}
	
}


ProgressButton.propTypes = {
	checkAnswer: PropTypes.func.isRequired,
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
		begin
	}, dispatch)
}


export default connect(
	mapStateToProps, 
	mapDispatchToProps
)(ProgressButton)





