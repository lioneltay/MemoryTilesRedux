import React, { PropTypes } from 'react'


import {
	Grid,
	Footer,	
} from 'components/PlayingInterface'

import {
	NextLevelButton,
	EndOverlay
} from 'components/PlayingInterface/EndOverlay'


function Survival({ params: { areaNum, levelNum } }) {
	return (
		<div className='game'>
			<h1>MemoryTiles</h1>
			<h6>{`Area ${areaNum} : ${levelNum}`}</h6>
			<Grid />
			<Footer />
			<EndOverlay>
				<NextLevelButton areaNum={areaNum} levelNum={levelNum} />
			</EndOverlay>
		</div>
	)
}

Survival.propTypes = {
	params: PropTypes.object.isRequired
}



export default Survival