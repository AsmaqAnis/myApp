import "./Footer.css"
import {FaHome, FaPhone, FaMailBulk, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa"

import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                  <FaHome size={20} style={
                    {color: "#fff", marginRight:"2rem"}}/>
                    <div> 
                        <p>UIA Gombak,</p>
                        <p>Malaysia.</p>
                    </div> 
                </div>
                <div className="phone">
                    <h4><FaPhone size={20} style={
                    {color: "#fff", marginRight: "2rem"}}/>
                    011-335023558</h4>
                </div>
                <div className="email">
                    <h4>< FaMailBulk size={20} style={
                    {color: "#fff", marginRight: "2rem"}}/>
                    asmaq.anis@yahoo.com</h4>
                </div>
            </div>

            <div className="right">
                <h4>About me</h4>
                <p>IIUM Engineering student currently taking
                internship at OFO Tech SDN BHD</p>
                <div className="social">
                < FaFacebook size={30} style={
                    {color: "#fff", marginRight: "1rem"}}/>
                < FaTwitter size={30} style={
                    {color: "#fff", marginRight: "1rem"}}/>
                < FaLinkedin size={30} style={
                    {color: "#fff", marginRight: "1rem"}}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer