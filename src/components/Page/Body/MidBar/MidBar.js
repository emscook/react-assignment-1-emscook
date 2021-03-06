import React, { Component } from 'react'
import './MidBar.css'
// import MidBar from './components/MidBar/MidBar.js'
import PostBox from './PostBox/PostBox'
import Tweets from './Tweets/Tweets'
class MidBar extends Component {
  render () {
    return (
      <div className='pagebar-item two-thirds whiteItem squeeze-pad'>
        <div className='tweet-both fillHori'>
          <a href='#explore ' className='pagebar-item fillHori'>
            What's happening?
          </a>
        </div>
      </div>
    )
  }
}
export default MidBar
