// External Libraries
import React, { PropTypes } from 'react'
import { Link } from 'react-router'

// Components
import { 
	Grid,
	Footer,
} from 'components/PlayingInterface'

import {
	NextLevelButton,
	PreviousLevelButton,
	RestartButton,
	EndOverlay
} from 'components/PlayingInterface/EndOverlay'

// App Component
function ArcadeGame({ params: { areaNum, levelNum } }) {
	return (
		<div className='game'>
			<h1>MemoryTiles</h1>
			<h6>{`Area ${areaNum} : ${levelNum}`}</h6>
			<Grid />
			<Footer />
			<EndOverlay>
				<PreviousLevelButton areaNum={areaNum} levelNum={levelNum}>
					Previous Level
				</PreviousLevelButton>
				<Link to={`/arcade/area/${areaNum}`} >Select Level</Link>
				<RestartButton>Restart</RestartButton>
				<NextLevelButton areaNum={areaNum} levelNum={levelNum}>
					Next Level
				</NextLevelButton>
			</EndOverlay>
		</div>
	)
}

ArcadeGame.propTypes = {
	params: PropTypes.object.isRequired
}

export default ArcadeGame









