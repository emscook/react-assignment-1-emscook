import React, { Component } from 'react'
import './UserPanel.css'
// import LeftBar from './components/LeftBar/LeftBar.js'
import Ground from './Ground/Ground'
import Sky from './Sky/Sky'
class UserPanel extends Component {
  render () {
    return (
      <div className='fillHori user-card separated-posts'>
        <Sky />

        <Ground />
      </div>
    )
  }
}
export default UserPanel
