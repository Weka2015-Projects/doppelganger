import React, { Component } from 'react'
import Signup from './signup.jsx!'
import Nav from './nav.jsx!'
import Content from './content.jsx!'
import Firebase from 'firebase'

class App extends Component {
  constructor() {
    super()
    this.state = {
      user: undefined
    }
  }
  componentWillMount() {
    const data = new Firebase('https://doppleganger.firebaseio.com/users/')
    const user = data.getAuth()
    if(user) {
      this.setUser(user)
    }
  }

  setUser(authData) {
    this.setState({
      user: authData.uid
    })
  }

  render () {

    const {user} = this.state
    let content
    if (user) {
      content = [<Nav key='1' user={user}/>,
    <Content key='2' user={user}/>]
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
