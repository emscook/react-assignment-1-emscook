import React, { Component } from 'react'
import './FollowBox.css'
// import FollowBox from './components/FollowBox/FollowBox.js'
import Connect from './Connect/Connect'
import Find from './Find/Find'
import Suggestions from './Suggestions/Suggestions'
import Title from './Title/Title'
class FollowBox extends Component {
  render () {
    return (
      <div className='separated-posts whiteItem'>
        <a href='#explore ' className='pagebar-item '>
          Who to follow?
        </a>
      </div>
    )
  }
}
export default FollowBox
