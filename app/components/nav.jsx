import React, { Component } from 'react'
import Profile from './profile.jsx!'


class Nav extends Component {
  constructor(props) {
    super(props)
  }


  render () {
    return (<div className = "nav"><div className='profile-container'><Profile user={this.props.user}/></div></div>)
  }
}

export default Nav
