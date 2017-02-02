import React, { PropTypes } from 'react'
import { Link } from 'react-router'



function App() {
	
	return (
		<div>
			<h1>Menu</h1>
			<p>First personal React/Redux app. The css management is atrocious and the app structure is not portable. Have learnt much since, may remake in the future.</p>
			<p>Checkout the code on <a href='https://github.com/lioneltay/MemoryTilesRedux' target='_blank'>Github</a></p>
			<ul>
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