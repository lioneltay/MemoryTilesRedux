// External Libraries
import React, { PropTypes } from 'react'


// Tile Component
function Tile({ 
	filled, 
	inPattern, 
	status, 
	showStatus,
	reveal,
	showHelp,
	onClick, 
	size }) {
	
	function classString() {
		const filledStr = filled ? 'filled ' : 'unfilled '
		const inPatternStr = inPattern ? 'inPattern ' : ''
		const showHelpStr = showHelp ? 'show-status ' : ''
		const revealStr = reveal ? 'reveal' : ''
		return `tile ${filledStr}${inPatternStr}${showHelpStr}${status}
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
	showHelp: PropTypes.bool.isRequired,
	inPattern: PropTypes.bool.isRequired,
	status: PropTypes.string.isRequired,
	reveal: PropTypes.bool.isRequired,
	size: PropTypes.number.isRequired,
	onClick: PropTypes.func
}


export default Tile