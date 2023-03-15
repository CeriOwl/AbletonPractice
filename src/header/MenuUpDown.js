import React, { Component } from 'react'

export default class MenuUpDown extends Component {
  render() {
    return (
      <div>
        <div>
            <ul>
                <li><a href="#">Live</a></li>
                <li><a href="#">Push</a></li>
                <li><a href="#">Note</a></li>
                <li><a href="#">Link</a></li>
                <li><a href="#">Shop</a></li>
                <li><a href="#">Packs</a></li>
                <li><a href="#">Help</a></li>
                <li><a href="#">More +</a></li>
            </ul>
        </div>
        <div>
            <a href="#">Try Live for free</a>
            <a href="#">Log in or register</a>
        </div>
        <div>
            <span>More on Ableton.com:</span>
            <ul>
                <li><a href='#'></a></li>
                <li><a href='#'></a></li>
                <li><a href='#'></a></li>
                <li><a href='#'></a></li>
                <li><a href='#'></a></li>
                <li><a href='#'></a></li>
                <li><a href='#'></a></li>
            </ul>
        </div>
      </div>
    )
  }
}
