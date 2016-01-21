import React, { Component } from 'react'
import Nav from './nav.jsx!'
import Content from './content.jsx!'

class App extends Component {
  constructor() {
    super()
  }

  render () {
    return (<div><Nav /> <Content /></div>)
  }
}

export default App
