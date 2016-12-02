import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router'

import { prevLevel } from 'utils'



class PreviousLevelButton extends Component {
	render() {
		const { children, areaNum, levelNum } = this.props
		const prev = prevLevel(areaNum, levelNum)
			if (!prev) return null
			return (
				<Link className='PreviousLevelButton' to={`/arcade/play/${prev.area}/${prev.level}`}>
					{children}
				</Link>
			)
	}
}


export default PreviousLevelButton