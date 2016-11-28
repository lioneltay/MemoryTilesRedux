import React, { PropTypes } from 'react'
import { Link } from 'react-router'



function InvalidRoute() {
	return (
		<div>
			<h1>Careful. Its a vast world out there.</h1>
			<Link to='/'>Return To Safety</Link>
		</div>		
	)
}



export default InvalidRoute