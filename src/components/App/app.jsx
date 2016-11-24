import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div>React simple starter</div>
    )
  }
}


const path = require('path')

console.log(path.resolve('./app'))
import RootReducer from 'reducers'

console.log(RootReducer)