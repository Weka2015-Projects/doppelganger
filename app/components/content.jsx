import React, { Component } from 'react'
import Post from './post.jsx!'
import Feed from './feed.jsx!'
import Firebase from 'firebase'


class Content extends Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <div className = "content">
        <div className='post-container'>
          <Post user={this.props.user}/>
        </div>
        <div className = 'feed-container'>
          <Feed user={this.props.user} />
        </div>
     </div>
  )}
}

export default Content
