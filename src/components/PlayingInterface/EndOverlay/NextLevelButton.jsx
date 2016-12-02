import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router'

import { nextLevel } from 'utils'



class NextLevelButton extends Component {
	render() {
		const { children, areaNum, levelNum } = this.props
		const next = nextLevel(areaNum, levelNum)
			if (!next) return null
			return (
				<Link className='NextLevelButton' to={`/arcade/play/${next.area}/${next.level}`}>
					{children}
				</Link>
			)
	}
}


export default NextLevelButton