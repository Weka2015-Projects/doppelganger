import React, { Component } from 'react'
import Firebase from 'firebase'
import FeedItem from './feed-item.jsx!'
import R from 'ramda'

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
  orderPosts(posts) {

    const mostRecent = R.sort((a, b) => {
      return b.createdAt - a.createdAt
    }, posts)
    return mostRecent
  }

  render () {
    const { posts } = this.state
    const feedArray = []

    for(let i in posts){
      feedArray.push({
        title: posts[i].title,
        content: posts[i].content,
        createdAt: posts[i].createdAt
      })
    }
    const sortedArray = this.orderPosts(feedArray)
    const displayArray = []
    console.log(sortedArray)
    for(let i in sortedArray){
        displayArray.push(    <FeedItem key ={i} title = {sortedArray[i].title} content = {sortedArray[i].content} />)
      }
    return (<div className = "feed-div"><h3 className = "feed-title"></h3>{displayArray}</div> )
  }
}

export default Feed
