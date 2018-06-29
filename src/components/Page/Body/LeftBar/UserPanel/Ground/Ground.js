import React, { Component } from 'react'
import './Ground.css'
// import LeftBar from './components/LeftBar/LeftBar.js'
import Photo from './Photo/Photo'
import UserDetails from './UserDetails/UserDetails'
import UserHeadline from './UserHeadline/UserHeadline'
class Ground extends Component {
  render () {
    return (
      <div className='user-card-bottom'>
        <Photo />
        <UserHeadline />
        <UserDetails />
      </div>
    )
  }
}
export default Ground
