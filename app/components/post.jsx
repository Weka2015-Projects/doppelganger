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
    this.data.child('post').push(newPost)
    this._input.value = ''
  }

  render () {
    return (
      <form onSubmit={this.handleEvent.bind(this)} className = "post-div">
        <textarea ref={(c) => this._input = c} className="post-title" placeholder="Enter your message">
        </textarea>
        <input type="submit" value="Submit"/>
      </form>
    )
  }

}

export default Post
