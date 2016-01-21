import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Firebase from 'firebase'

const data = new Firebase('https://doppleganger.firebaseio.com/')



class Signup extends Component {
  constructor(props) {
    super(props)
  }

  handleLogin (e) {
    e.preventDefault()
    var emailInput = ReactDOM.findDOMNode(this.refs.email).value
    var passwordInput = ReactDOM.findDOMNode(this.refs.password).value
    data.authWithPassword({
      email: emailInput,
      password: passwordInput
    }, (error, authData) => {
      if (error) {
        console.log(error)
      } else {
        this.props.setUser(authData)
      }
    })
  }

  render () {
    return (
    <div className="signup-box">
      <div className="modal"></div>
      <div className="form-box">
        <h1>Doppelganger Login</h1>
      <form onSubmit={this.handleLogin.bind(this)}>
        <div className="input-group">
          <label>Email: </label><input placeholder="johndoe@gmail.com" ref="email" type="text"></input>
        </div>
        <div className="input-group">
          <label>Password: </label><input placeholder="use more than 8 characters" ref="password" type="password"></input>
        </div>
        <div className="buttons">
          <button id="login">login</button>
        </div>
      </form>
      </div>
    </div>
  )
  }
}

export default Signup
