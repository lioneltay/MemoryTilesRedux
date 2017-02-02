import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


import { initialiseGame } from 'utils'

import { ARCADE_LEVELS } from 'constants'


function Arcade({ initialiseGame, children }) {
	
	function generateLinks(areas) {
		return areas.map((area) => {
			return (
				<Link 
					className='btn btn-primary'
					key={area.areaNum}
					to={`/arcade/area/${area.areaNum}`} >
					{area.areaNum}
				</Link>
			)
		})
	}
	
	// TODO make a new component
	return (
		<div className='Arcade'>
			<h1>Areas</h1>
			<div className='arcade-buttons'>
				{generateLinks(ARCADE_LEVELS)}
			</div>			
		</div>
	)
}

Arcade.propTypes = {
	initialiseGame: PropTypes.func.isRequired
}


function mapDispatchToProps(dispatch) {
	return bindActionCreators({ initialiseGame }, dispatch)
}

export default connect(null, mapDispatchToProps)(Arcade)