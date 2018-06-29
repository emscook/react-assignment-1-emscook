import React, { Component } from 'react'

import './Page.css'
import './index.css'
import Body from './Body/Body'
import Nav from './Nav/Nav'
class Page extends Component {
  render () {
    return (
      <div>
        <Nav />
        <Body />
      </div>
    )
  }
}
export default Page
