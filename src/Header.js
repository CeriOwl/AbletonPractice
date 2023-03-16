import React from "react"
import ReactDOM from "react-dom"
import "./styles.css"

import HeaderImage from "./header/Img.js"
import Menu from "./header/Menu"
import LinksUseful from "./header/LinksUseful"
import MenuPhone from "./header/MenuPhone"


export default function Header() {
    return(
        <header id="header-off" className="header-off">
            <div className="container-img-menu">
                <HeaderImage/>
                <MenuPhone/>
                <Menu/>
            </div>
            <LinksUseful/>
        </header>
    )
}