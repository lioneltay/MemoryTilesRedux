import React, { PropTypes } from 'react'
import { Link } from 'react-router'


import { ARCADE_LEVELS } from 'constants'


function Area({ params: { areaNum } }) {
	const area = ARCADE_LEVELS[areaNum-1]
	const levels = area.levels
	
	function generatedLevels(levels) {
		return levels.map((level) => {
			const levelNum = level.levelNum
			return (
				<div key={levelNum} className='arcadeSquare'>
					<Link
						className='arcadeLevelButton btn btn-primary'
						to={`/arcade/play/${area.areaNum}/${levelNum}`} >
						{levelNum}
					</Link>
				</div>
			)
		})
	}
		
	return (
		<div className='arcadeLevelsContainer area1'>
			<div className='arcadeLevelsContainerTitle'>Area {area.areaNum}:</div>
			{generatedLevels(levels)}
		</div>
	)
}

Area.propTypes = {
	params: PropTypes.object.isRequired
}



export default Area






