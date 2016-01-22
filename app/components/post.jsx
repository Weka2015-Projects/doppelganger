import React, { Component } from 'react'
import Firebase from 'firebase'

class Post extends Component {
  constructor(props) {

    super(props)
    console.log(props.user)
    this.data = new Firebase('https://doppleganger.firebaseio.com/users/'+props.user)
  }

  handleEvent (e) {
    e.preventDefault()
    const newPost = this._input.value
    const newTitle = this._dope.value
    this.data.child('post').push({
      title: newTitle,
      content: newPost,
      createdAt: new Date().getTime()
    })
    this._input.value = ''
    this._dope.value = ''
  }

  render () {
    return (
      <form onSubmit={this.handleEvent.bind(this)} className = "post-div">
        <input type="text" ref={(c) => this._dope = c} className="post-title" placeholder="Enter your Title"></input>
        <textarea ref={(c) => this._input = c} className="post-content" placeholder="Enter your message">
        </textarea>
        <input type="submit" value="Submit"/>
      </form>
    )
  }

}

export default Post
