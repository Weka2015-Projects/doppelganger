import React, { Component } from 'react'
import Profile from './profile.jsx!'


class Nav extends Component {
  constructor() {
    super()
  }

  render () {
    return (<div className = "nav"><div className='profile-container'><Profile /></div></div>)
  }
}

export default Nav
