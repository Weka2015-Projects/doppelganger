import React, { Component } from 'react'

class Post extends Component {
  constructor() {
    super()
  }

  render () {
    return (<div className = "post-div"><textarea className = "post-title" placeholder="Enter your message">
      </textarea><input type="submit" value="Submit"/></div> )
  }
}

export default Post
