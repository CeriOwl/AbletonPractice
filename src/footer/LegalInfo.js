import React, { Component } from 'react'


export default class LegalInfo extends Component {
  render() {
    return (
      <div>
        <div className='links-legal'>
            <a href='#'>Contact Us</a>
            <a href='#'>Press Resources</a>
            <a href='#'>Legal Info</a>
            <a href='#'>Privacy Policy</a>
            <a href='#'>Cookie Settings</a>
            <a href='#'>Imprint</a>
        </div>
        <div className='made-by'>
            <span>Made in Berlin</span>
            <img src={require("../img/logo_ableton.png")}/>
        </div>
      </div>
    )
  }
}
