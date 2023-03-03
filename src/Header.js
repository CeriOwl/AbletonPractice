import React from "react"
import ReactDOM from "react-dom"
import "./styles.css"

import HeaderImage from "./header/Img.js"
import Menu from "./header/Menu"
import LinksUseful from "./header/LinksUseful"

export default function Header() {
    return(
        <header>
            <div className="container-img-menu">
                <HeaderImage/>
                <Menu/>
            </div>
            <LinksUseful/>
        </header>
    )
}