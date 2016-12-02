// External Libraries
import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// Constants
import { INTERACTING } from 'constants/game'

// Action Creators
import { fillTile } from 'actions'

// Components
import Tile from './Tile'


// Grid Component
function Grid({ gameStatus, grid, fillTile, showHelp }) {
	
	function tileList() {
		const tiles = grid.tiles
		return tiles.map((tile, i) => {
			return <Tile
				key={i}
				{...tile}
				showHelp={showHelp}
				toggleTile={ onToggleTile() ? () => fillTile(i) : null}
				size={100/grid.width}
				/>
		})
	}
	
	function onToggleTile() {
		return gameStatus === INTERACTING ?
			fillTile :
			null
	}	
	
	function onDragStart(event) {
		event.preventDefault()
	}
	
	return (
		<div 
			className='grid'
			onDragStart={onDragStart}>
			{tileList()}
		</div>
	)
}

Grid.propType = {
	gameStatus: PropTypes.bool.isRequired,
	grid: PropTypes.object.isRequired,
	fillTile: PropTypes.func.isRequired,
	showHelp: PropTypes.bool.isRequired
}


// Container
function mapStateToProps(state) {
	return {
		gameStatus: state.game.status,
		grid: state.game.grid,
		showHelp: state.game.showHelp
	}
}


function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fillTile }, dispatch)
}


export default connect(
	mapStateToProps, 
	mapDispatchToProps
)(Grid)










