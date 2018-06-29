import React, { Component } from 'react'
import './Body.css'
import LeftBar from './LeftBar/LeftBar'
import RightBar from './RightBar/RightBar'
import MidBar from './MidBar/MidBar'
// import Body from './components/Body/Body.js'

class Body extends Component {
  render () {
    return (
      <div>
        <div className='full-back-splash'>
          <div className='pagebar container-three'>
            <LeftBar />
            <MidBar />
            <RightBar />
          </div>
        </div>
      </div>
    )
  }
}
export default Body
