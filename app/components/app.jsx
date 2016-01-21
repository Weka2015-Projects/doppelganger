import React, { Component } from 'react'
import Signup from './signup.jsx!'
import Nav from './nav.jsx!'
import Content from './content.jsx!'


class App extends Component {
  constructor() {
    super()
    this.state = {
      user: undefined
    }
  }

  setUser(authData) {
    this.setState({
      user: authData.uid
    })
    console.log(authData.uid)
  }

  render () {

    const {user} = this.state
    let content
    if (user) {
      content = [<Nav user={user}/>,
      <Content user={user}/>]
    } else {
      content = <Signup setUser={this.setUser.bind(this)} />
    }
    return (
      <div className="app">
        {content}
      </div>
    )
  }
}

export default App
