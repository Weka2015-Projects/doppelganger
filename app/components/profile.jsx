import React, { Component } from 'react'
import Firebase from 'firebase'


class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      age: undefined,
      bio: undefined,
      occupation: undefined,
      username: undefined,
      avatar: ''
    }
  }
  componentWillMount(){
      const data = new Firebase('https://doppleganger.firebaseio.com/users/'+this.props.user)
      data.on('value', snapshot => {
        const userInfo = snapshot.val()
        this.setState({
          bio: userInfo.bio,
          occupation: userInfo.occupation,
          username: userInfo.username,
          avatar: userInfo.avatar
        })
      })
    }
  render () {
    const { age, bio, occupation, username, avatar } = this.state


    return (
      <div className = "profile-div">
        <h3 className="profile-title" >{username}</h3>
        <div className="image-wrapper">
          <img className="profile" src={avatar}/>
        </div>
      </div> )
  }
}

export default Profile
