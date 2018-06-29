import React, { Component } from 'react'
import './UserHeadline.css'
import FullName from './FullName/FullName'
import UserName from './UserName/UserName'
class UserHeadline extends Component {
  render () {
    return (
      <div>
        <FullName />
        <UserName />

      </div>
    )
  }
}
export default UserHeadline
