import React, { PropTypes } from 'react'

import Tile from './Tile'



function Grid({ grid, onTileClick }) {
	
	function tileList() {
		const tiles = grid.tiles
		return tiles.map((tile, i) => {
			return <Tile
				key={i}
				{...tile}
				onClick={ onTileClick ? () => onTileClick(i) : null}
				size={100/grid.width}
				/>
		})
	}
	
	return (
		<div className='grid'>
			{tileList()}
		</div>
	)
}

Grid.propType = {
	grid: PropTypes.object.isRequired,
	onTileClick: PropTypes.func.isRequired,
}


export default Grid