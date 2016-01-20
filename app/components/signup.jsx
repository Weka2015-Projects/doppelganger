import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Firebase from 'firebase'

const data = new Firebase('https://doppleganger.firebaseio.com/')



class Signup extends Component {
  constructor() {
    super()
  }

  handleLogin (e) {
    e.preventDefault()
    var emailInput = ReactDOM.findDOMNode(this.refs.email).value
    var passwordInput = ReactDOM.findDOMNode(this.refs.password).value
    console.log(loginInput)
    data.authWithPassword({
      email: emailInput
      password: passwordInput
    }, (error, authData) => {
      //putting callback in for checking authorization. Hasn't worked because no database. Make sign-up.
    })
  }

  render () {
    return (
    <div className="signup-box">
      <div className="form-box">
      <form onSubmit={this.handleLogin.bind(this)}>
        <label>Email: </label><input placeholder="johndoe@gmail.com" ref="email" type="text"></input>
        <label>Password: </label><input placeholder="use more than 8 characters" ref="password" type="password"></input>
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
