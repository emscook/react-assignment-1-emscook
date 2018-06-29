import React, { Component } from 'react'
import './LeftBar.css'
// import LeftBar from './components/LeftBar/LeftBar.js'
import Trends from './Trends/Trends'
import UserPanel from './UserPanel/UserPanel'
class LeftBar extends Component {
  render () {
    return (
      <div className='pagebar-read third stretch-height'>
        <UserPanel
          value={{
            ground: `${this.props.ground}`,
            sky: `${this.props.sky}`
          }}
        />
        <Trends />
      </div>
    )
  }
}
export default LeftBar
