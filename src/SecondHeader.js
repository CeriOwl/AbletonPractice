import React, { Component } from 'react'
import "./styles.css"

export default class SecondHeader extends Component {
  render() {
    return (
      <div className="second-navbar">
        <a href='#'>About</a>
        <a href='#'>Jobs</a>
        <a href='#'>Apprenticeship</a>
      </div>
    )
  }
}
