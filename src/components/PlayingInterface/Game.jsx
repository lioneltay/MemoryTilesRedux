// External Libraries
import React, { PropTypes } from 'react'
import { Link } from 'react-router'

// Components
import Grid from './Grid'
import Footer from './Footer'
import EndOverlay from './EndOverlay'

// App Component
function Game({ params: { areaNum, levelNum } }) {
	return (
		<div className='app'>
			<h1>MemoryTiles</h1>
			<Grid />
			<Footer />
			<EndOverlay areaNum={areaNum} levelNum={levelNum} />
		</div>
	)
}

Game.propTypes = {
	params: PropTypes.object.isRequired
}

export default Game









