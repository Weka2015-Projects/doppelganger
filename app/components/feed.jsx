import React, { Component } from 'react'
import Firebase from 'firebase'
import FeedItem from './feed-item.jsx!'

class Feed extends Component {
  constructor(props) {
    super(props)
    this.data = new Firebase('https://doppleganger.firebaseio.com/users/'+props.user)
    this.state = {
      posts: []
    }
  }

  componentWillMount () {
    this.loadPost()
  }

  loadPost () {
    this.data.child('post').on('value', snapshot => {
        this.setState({
          posts: snapshot.val()
        })
    })
  }


  render () {
    const { posts } = this.state
    const feedArray = []
    for (let i in posts) {

      feedArray.push(<FeedItem key = {i} title = {posts[i].title} content = {posts[i].content} />)
      console.log(posts[i])
    }
    return (<div className = "feed-div"><h3 className = "feed-title"></h3>{feedArray}</div> )
  }
}

export default Feed
