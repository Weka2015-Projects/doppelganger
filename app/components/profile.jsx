import React, { Component } from 'react'

class Profile extends Component {
  constructor() {
    super()
  }

  render () {
    return (<div className = "profile-div"><h3 className = "profile-title">Yugi Moto</h3> <img className = "profile" src="http://vignette3.wikia.nocookie.net/ygotas/images/0/0b/Yugi.gif/revision/latest?cb=20130813100731"/></div> )
  }
}

export default Profile