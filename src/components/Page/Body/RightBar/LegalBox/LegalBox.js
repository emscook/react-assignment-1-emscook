import React, { Component } from 'react'
import './LegalBox.css'
// import LegalBox from './components/LegalBox/LegalBox.js'
import Advertise from './Advertise/Advertise'
import Legal from './Legal/Legal'
class LegalBox extends Component {
  render () {
    return (
      <div className='separated-posts whiteItem'>
        <a href='#explore ' className='pagebar-read read-padding'>
          © 2018 Twitter About Help Center Terms Privacy policy Cookies Ads info Brand Blog Status Apps Jobs Marketing Businesses Developers
        </a>
      </div>
    )
  }
}
export default LegalBox
