import React, { Component } from 'react'
import './Section.css'
// import Section from './components/Section/Section.js'
import Entry from './Entry/Entry'
class Section extends Component {
  states = {
    home: (
      <div>
        <a href='./oldy/notifications.html' class='weak-item'>
          <div className='bird fillVert'>
            <i className='fab fa-twitter' />
          </div>
        </a>
      </div>
    ),
    userNav: (
      <div className='navbar-end-cust flex'>
        <div className='search-item flex'>
          <div
            id='search'
            className='flex items-center navbar-item-cust fillVert'
            style={{ padding: 0 }}
          >
            <input
              type='text'
              id='search-input'
              className='flex '
              placeholder='Search Twitter'
            />
            <label for='search-input'>
              <i className='fa fa-search' aria-hidden='true' />
            </label>
          </div>
        </div>
        <a href='#explore' class='navbar-item-cust'>
          <i class='fa fa-user items-center' aria-hidden='true' />
        </a>
        <a>
          <div class='navbar-item-cust fillVert special'>
            Tweet
          </div>
        </a>
      </div>
    )
  }
  render () {
    return (
      <div className='navbar-start-cust'>
        {this.props.section.entries.map(entry => {
          return (
            <Entry
              key={entry.key}
              value={{
                label: `${entry.label}`,
                input: `${entry.input}`,
                icon: `${entry.icon}`,
                link: `${entry.link}`
              }}
            />
          )
        })}
      </div>
    )
  }
}
export default Section
