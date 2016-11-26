import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


import { initialiseGame } from 'utils'

import { ARCADE_LEVELS } from 'constants'


function ArcadeLevel({ initialiseGame }) {
	
	function generatedLevels() {
		return ARCADE_LEVELS.map((level, levelNum) => {
			return (
				<div key={levelNum}>
					<Link
						to='/play'
						onClick={() => initialiseGame(level)}>
						{levelNum}
					</Link>
				</div>
			)
		})
	}
	
	console.log(ARCADE_LEVELS)
	console.log(generatedLevels())
	return (
		<div>
			Hello this is the ARCADE component
			
			<div>
				{generatedLevels()}
			</div>
			
		</div>
	)
}

ArcadeLevel.propTypes = {
	initialiseGame: PropTypes.func.isRequired
}


function mapDispatchToProps(dispatch) {
	return {bindActionCreators({ initialiseGame }, dispatch)}
}

export default connect(null, mapDispatchToProps)(ArcadeLevel)