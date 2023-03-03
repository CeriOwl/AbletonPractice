import React from "react"
import ReactDOM from "react-dom"
import img from "../img/logo_ableton.png"

export default function LogoMenu() {
    return(
        <div className="container-img">
            <a href="#">
                <img src={img}/>
            </a>
        </div>
    )
}