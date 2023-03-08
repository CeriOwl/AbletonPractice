import React, { Component } from 'react'

export default class FirstDiv extends Component {
  render() {
    return (
      <div className='first-div'>
        <div className='links'>
          <a href='#'>Register Live or Push<i class='bx bx-chevron-right'></i></a>
          <a href='#'> About Ableton<i class='bx bx-chevron-right'></i></a>
          <a href='#'>About<i class='bx bx-chevron-right'></i></a>
        </div>
        <div className='social-media'>
          <div className='facebook-link'>
            <a href='#'><i class='bx bxl-facebook-circle'></i></a>
          </div>
          <div className='twitter-link'>
            <a href='#'><i class='bx bxl-twitter'></i></a>
          </div>
          <div className='youtube-link'>
            <a href='#'><i class='bx bxl-youtube'></i></a>
          </div>
          <div className='instragram-link'>
            <a href='#'><i class='bx bxl-instagram'></i></a>
          </div>
        </div>
      </div>
    )
  }
}
