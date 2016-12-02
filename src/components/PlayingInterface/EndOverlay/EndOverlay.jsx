/*
An overlay which appears only after a game has ended (Either WON or LOST)
Components are placed in EndOverlay as children
*/
import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

import { WON, LOST } from 'constants/game'


class EndOverlay extends Component {
	
	render() {
		const { gameStatus, children } = this.props
		if (gameStatus === WON || gameStatus === LOST) {
			return (		
				<div className='EndOverlay' >
					{children}
				</div>
			)	
		} else {
			return null
		}	
	}
	
}

EndOverlay.propTypes = {
	gameStatus: PropTypes.string.isRequired
}

function mapStateToProps(state) {
	return {
		gameStatus: state.game.status
	}
}


export default connect(mapStateToProps)(EndOverlay)