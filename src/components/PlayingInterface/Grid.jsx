// External Libraries
import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// Constants
import { INTERACTING } from 'constants'

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
				onClick={ onTileClick() ? () => fillTile(i) : null}
				size={100/grid.width}
				/>
		})
	}
	
	function onTileClick() {
		return gameStatus === INTERACTING ?
			fillTile :
			null
	}	
	
	return (
		<div className='grid'>
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










