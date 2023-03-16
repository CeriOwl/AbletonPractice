import React, { Component } from 'react'

export default class MenuPhone extends Component {
  render() {

    function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function downMenu() {
      const menu = document.getElementById("menu-up-down");
      for(let i = -180; i <= 0; i += 10) {
        menu.style.top = `${i}vh`
        await sleep(i*50);
      }
    }

    async function upMenu() {
      const menu = document.getElementById("menu-up-down");
      for(let i = 0; i >= -180; i -= 10) {
        menu.style.top = `${i}vh`
        await sleep(i*50);
      }
    }

    function actionsMenu(lenght) {
      if(lenght == 2) {
        downMenu()
      }else {
        upMenu()
      }
    }

    function displayMenu() {
      const headerToggle = document.getElementById("header-off")
      headerToggle.classList.toggle("header-on")
      actionsMenu(headerToggle.classList.length)
    }

    return (
      <div className='menu-phone'>
        <button onClick={displayMenu}>Menu<i class='bx bxs-down-arrow'></i></button>
      </div>
    )
  }
}
