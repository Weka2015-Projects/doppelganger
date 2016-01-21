import React, { Component } from 'react'
import Post from './post.jsx!'
import Feed from './feed.jsx!'


class Content extends Component {
  constructor() {
    super()
  }

  render () {
    return (<div className = "content"><div className='post-container'><Post /></div>
      <div className = 'feed-container'><Feed /></div></div>)
  }
}

export default Content
