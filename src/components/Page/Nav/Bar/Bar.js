import React, { Component } from 'react'
import './Bar.css'
// import Bar from './components/Bar/Bar.js'
import Section from './Section/Section'
class Bar extends Component {
  state = {
    sections: [
      {
        title: 'siteNav',
        className: 'navbar-start-cust',
        entries: [
          {
            icon: 'fas fa-home',
            input: '',
            label: 'Home',
            link: './home',
            type: 'standard',
            key: 'Home'
          },
          {
            icon: 'fas fa-bolt',
            input: '',
            label: 'Moments',
            link: './home',
            type: 'standard',
            key: 'Moments'
          },
          {
            icon: 'fas fa-bell',
            input: '',
            label: 'Notifications',
            link: './home',
            type: 'standard',
            key: 'Notifications'
          },
          {
            icon: 'fas fa-envelope',
            input: '',
            label: 'Messages',
            link: './home',
            type: 'modal',
            key: 'Messages'
          }
        ]
      },

      {
        title: 'home',
        className: '',
        entries: [
          {
            icon: 'fab fa-twitter',
            input: '',
            label: '',
            link: './home',
            type: 'standard',
            key: 'Bird'
          }
        ]
      },
      {
        title: 'userNav',
        className: 'navbar-end-cust flex',
        entries: [
          {
            icon: 'fa fa-search',
            input: 'search',
            label: 'Search Twitter',
            link: './home',
            type: 'standard',
            key: 'Search'
          },
          {
            icon: 'fa fa-user items-center',
            input: '',
            label: '',
            link: './home',
            type: 'standard',
            key: 'User-Settings'
          },
          {
            icon: '',
            input: '',
            label: 'Tweet',
            link: './home',
            type: 'standard',
            key: 'Tweet-Button'
          }
        ]
      }
    ]
  }

  render () {
    return (
      <div>
        <div className='navbar-menu-cust flex-row'>
          {this.state.sections.map(section => {
            return (
              <Section
                key={section.title}
                section={section}
                value={section.title}
              />
            )
          })}
        </div>
      </div>
    )
  }
}
export default Bar
