import React, { Component } from 'react'
import './RightBar.css'
// import RightBar from './components/RightBar/RightBar.js'
import FollowBox from './FollowBox/FollowBox'
import LegalBox from './LegalBox/LegalBox'
class RightBar extends Component {
  render () {
    return (
      <div className='pagebar-item third'>
        <div className='fillHori'>
          <FollowBox />
          <LegalBox />
        </div>
      </div>
    )
  }
}
export default RightBar
