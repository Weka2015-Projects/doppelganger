import React, { Component } from 'react'

class FeedItem extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { title, content } = this.props
    return(
      <div className="feed-item">
        <h4>{title}</h4>
        <p>{content}</p>
      </div>
    )
  }
}

export default FeedItem
