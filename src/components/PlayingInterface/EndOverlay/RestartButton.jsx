import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'



import { restart } from 'utils'



function ProgressButton({ children, restart }) {
	
	function buttonClickHandler() {
		if (gameStatus === VIEWING) return begin
		else if (gameStatus === INTERACTING) return checkAnswer
		else return restart
	}
	
	function buttonText() {
		if (gameStatus === VIEWING) return 'Go'
		else if (gameStatus === INTERACTING) return 'Check'
		else return 'Restart'
	}
	
	return (
		<a className='RestartButton'
			onClick={() => restart()} >
			{children}
		</a>
	)
}


ProgressButton.propTypes = {
	restart: PropTypes.func.isRequired
}



function mapDispatchToProps(dispatch) {
	return bindActionCreators({ restart	}, dispatch)
}


export default connect( null, mapDispatchToProps)(ProgressButton)





