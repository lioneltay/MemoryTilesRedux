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
	toggleTile, 
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
		const marginPercent = 0.035
		const margin = size * marginPercent
		const width = size - 2 * margin
		return {
			margin: `${margin}%`,
			width: `${width}%`,
			paddingTop: `${width}%`
		}
	}
	
	function handleMouseOver() {
		if (toggleTile) {
			return function(event) {
				if (event.buttons === 1 || event.buttons === 2) {
					toggleTile()
				}
			}
		}		
	}
	
	function disableContextMenu(event) {
		event.preventDefault()
	}
	
	function disableDragStart(event) {
		event.preventDefault()
	}
	
	return (
		<div
			className={classString()}
			style={style()}
			onDragStart={disableDragStart}			
			onContextMenu={disableContextMenu}
			onMouseDown={toggleTile}			
			onMouseEnter={handleMouseOver()}
			>
			<div className='tileInner'></div>
		</div>
	)
}

Tile.propTypes = {
	filled: PropTypes.bool.isRequired,
	showHelp: PropTypes.bool.isRequired,
	inPattern: PropTypes.bool.isRequired,
	status: PropTypes.string.isRequired,
	reveal: PropTypes.bool.isRequired,
	size: PropTypes.number.isRequired,
	toggleTile: PropTypes.func
}


export default Tile