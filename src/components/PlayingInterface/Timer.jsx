import React, { PropTypes } from 'react'





function Timer({ timeAllowed, timeRemaining }) {
	const percent = timeRemaining/timeAllowed * 100
	const style = { 
		background: `linear-gradient(to right, #c2ecff, #36a6d8 ${percent}%, #b27d80 ${percent}%, #B71E26)` 
	}
	return (
		<div className='Timer'>			
			<div 
				className='timeBar'
				style={style}
				/>
			<h6 className='timeCounter'>Time Remaining: {Math.ceil(timeRemaining/1000)}</h6>
		</div>
		
	)
}




export default Timer