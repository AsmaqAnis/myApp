import { Link } from "react-router-dom"
import "./AboutContent.css"
import { NavLink } from "react-router-dom"
import React from 'react'
import abt1 from "../assets/abt1.jpeg"
import abt2 from "../assets/abt2.jpeg"

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am i?</h1>
            <p>My name is Asmaq Nusaibah, i'm an IIUM student, 
                currently pursuing bachelor degree in 
                Electronic-Computer Information Engineering.</p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
            {/* <NavLink to="/contact" 
                className="btn">Contact</NavLink> <- same as button*/}
        </div>
        <div className="right">
                <div className="img-container">
                    <div className="img-stack top">
                        <img src={abt1} 
                        className="img" alt="true" />
                    </div>
                    <div className="img-stack bottom">
                        <img src={abt2} 
                        className="img" alt="true" />
                    </div>
                </div>
        </div>
    </div>
  )
}

export default AboutContent