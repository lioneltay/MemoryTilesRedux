import React, { PropTypes } from 'react'





function Timer({ timeAllowed, timeRemaining }) {
	const percent = timeRemaining/timeAllowed * 100
	return (
		<div className='Timer'>			
			<div 
				className='timeBar'
				style={{ background: `linear-gradient(to right, #AED7ED, #AED7ED ${percent}%, #B71E26 ${percent}%, #B71E26)` }}
				/>
			<h5 className='timeCounter'>Time Remaining: {Math.ceil(timeRemaining/1000)}</h5>
		</div>
		
	)
}




export default Timer