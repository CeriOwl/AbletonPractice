import React, { Component } from 'react'
import "./styles.css"

export default class SecondHeader extends Component {
  render() {
    const className = "second-navbar";
    let counterFalse = 0, counterTrue = 0;

    window.onscroll = async function(e) {
      const secondHeader = document.querySelector(".second-navbar");
      // If ur scrolling to up or down. If true == up / false == down
      if(this.oldScroll > this.scrollY) {
        if(counterTrue === 30) {
          if(secondHeader.style.top != "0px") {
            downMenu(secondHeader)
          }
          counterTrue = 0;
        }
        counterTrue ++;
        counterFalse = 0;
      }else{
        if(counterFalse === 30) {
          if(secondHeader.style.top != "-75px"){
            upMenu(secondHeader)
          }
          counterFalse = 0;
        }
        counterFalse++;
        counterTrue = 0;
      }
      this.oldScroll = this.scrollY
    }

    async function downMenu(secondHeader) {
      for(let i = -75; i <= 0; i++) {
        secondHeader.style.top = `${i}px`
        await sleep(i*100)
      }
    }

    async function upMenu(secondHeader) {
      for(let i = 0; i >= -75; i--) {
        secondHeader.style.top = `${i}px`
        await sleep(i*100)
      }
    }

    function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
    
    return (
      <div className={className}>
        <a href='#'>About</a>
        <a href='#'>Jobs</a>
        <a href='#'>Apprenticeship</a>
      </div>
    )
  }
}
