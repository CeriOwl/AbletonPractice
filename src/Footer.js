import React from "react"
import "./styles.css"
import FirstDiv from "./footer/FirstDiv"
import SecondDiv from "./footer/SecondDiv"
import ThirdDiv from "./footer/ThirdDiv"
import FourthDiv from "./footer/FourthDiv"
import FifthDiv from "./footer/FifthDiv"
import SixthDiv from "./footer/SixthDiv"
import LegalInfo from "./footer/LegalInfo"

export default function Footer() {
    return (
        <footer>
            <h2>Ableton</h2>
            <section className="sections">
                <FirstDiv />
                <SecondDiv />
                <ThirdDiv />
                <FourthDiv/>
                <FifthDiv/>
                <SixthDiv/>
            </section>
            <div className="legal-info">
                <LegalInfo/>
            </div>
        </footer>
    )
}
