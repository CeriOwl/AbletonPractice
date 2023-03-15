import React, { Component } from 'react'

export default class MenuPhone extends Component {
  render() {
    function displayMenu() {
        console.log("Hello Dear")
    }

    return (
      <div className='menu-phone'>
        <button onClick={displayMenu}>Menu<i class='bx bxs-down-arrow'></i></button>
      </div>
    )
  }
}
