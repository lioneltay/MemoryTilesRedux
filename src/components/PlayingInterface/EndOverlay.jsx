import React, { PropTypes } from 'react'
import { Link } from 'react-router'


import { nextLevel, prevLevel } from 'utils'

function EndOverlay({ areaNum, levelNum }) {
	levelNum = Number(levelNum)
	
	function nextLevelButton() {
		const next = nextLevel(areaNum, levelNum)
		if (!next) return null
		return (
			<Link className='btn btn-primary' to={`/arcade/play/${next.area}/${next.level}`}>
				Next Level
			</Link>
		)
	}
	
	function prevLevelButton() {
		console.log(areaNum,levelNum)
		console.log(prevLevel(areaNum, levelNum))
		const prev = prevLevel(areaNum, levelNum)
		if (!prev) return null
		return (
			<Link className='btn btn-primary' to={`/arcade/play/${prev.area}/${prev.level}`}>
				Previous Level
			</Link>
		)
	}
	
	return ( 
		<div className='EndOverlay' >
			{prevLevelButton()}
			<Link className='btn btn-primary' to='/arcade'>Select Level</Link>
			{nextLevelButton()}
		</div>
	)	
}

EndOverlay.propTypes = {
	areaNum: PropTypes.string.isRequired,
	levelNum: PropTypes.string.isRequired
}


export default EndOverlay