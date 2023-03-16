import React, { Component } from 'react'

import Menu from "./Menu"
import LinksUseful from './LinksUseful'
import MoreOn from './MoreOn'
import MoreOf from './MoreOf'

export default class MenuUpDown extends Component {
  render() {
    return (
      <div id='menu-up-down' className='menu-down-off'>
        <Menu/>
        <LinksUseful/>
        <MoreOn/>
        <MoreOf/>
      </div>
    )
  }
}
