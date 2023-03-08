import React, { Component } from 'react'

export default class ThirdDiv extends Component {
  render() {
    return (
      <div className='third-div'>
        <div className='info'>
            <h3>Sign up to our newsletter</h3>
            <p>Enter your email address to stay up to date with the lastes offers, tutorials, downloads, surveys and more.</p>
        </div>
        <div className='container-input'>
            <input type="email" placeholder='Email Address'/>
            <input type="button"value="Sign up"/>
        </div>
      </div>
    )
  }
}
