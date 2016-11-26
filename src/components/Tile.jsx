import React, { PropTypes } from 'react'


function Tile({ 
	filled, 
	inPattern, 
	status, 
	showStatus,
	reveal,
	onClick, 
	size }) {
	
	function classString() {
		const filledStr = filled ? 'filled ' : 'unfilled '
		const inPatternStr = inPattern ? 'inPattern ' : ''
		const showStatusStr = showStatus ? 'show-status ' : ''
		const revealStr = reveal ? 'reveal' : ''
		return `tile ${filledStr}${inPatternStr}${showStatusStr}${status}
			${revealStr}`
	}
	
	function style() {
		return {
			width: `${size}%`,
			paddingTop: `${size}%`
		}
	}
	
	return (
		<div 
			className={classString()}
			onClick={onClick}
			style={style()}
			/>
	)
}

Tile.propTypes = {
	filled: PropTypes.bool.isRequired,
	inPattern: PropTypes.bool.isRequired,
	status: PropTypes.string.isRequired,
	showStatus: PropTypes.bool.isRequired,
	reveal: PropTypes.bool.isRequired,
	size: PropTypes.number.isRequired,
	onClick: PropTypes.func
}


export default Tile