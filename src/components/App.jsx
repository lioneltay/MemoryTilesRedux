import React, { PropTypes } from 'react'
import { Link } from 'react-router'



function App() {
	
	return (
		<div>
			<h1>Menu</h1>
			<ul>
				<li>
					<Link
						to='/play' >
						Play MemoryTiles !!
					</Link>
				</li>
				<li>
					<Link
						to='/arcade' >
						Arcade
					</Link>
				</li>
			</ul>
		</div>
	)
}



export default App