import React, { useState} from "react";
import { NavLink,Link } from "react-router-dom";
import "./NavBar.css";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [color, setColor] = useState(false);
    const changeColor = () =>{
        if(window.scrollY >= 100){
            setColor(true);
        }else{
            setColor(false);
        }
    }

        const navLinkStyles = ({isActive}) =>{
            return{
                fontWeight: isActive ? 'bold' : 'normal',
                TextDecoration: isActive ? 'underline' : 'underline',
            } 
        } //style for using NavLink, bold when in active page, use NavLink specifically for navbar
            //only applied for current/active page
    window.addEventListener("scroll", changeColor);
  return (
    <div className={color ? "header header-bg" 
    : "header"}>
        <Link to="/">
            <h1>Portfolio.</h1>
        </Link>
        <ul className={click ? "nav-menu active" :
        "nav-menu"}>
            <li>
                {/* <Link to="/">Home</Link> */}
                <NavLink style={navLinkStyles} to="/">Home</NavLink>
            </li>
            <li>
                <Link to="/project">Project</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
        <div className="hamburger" onClick={handleClick}> 
            {click ? (<FaTimes size={20} style={{color: "#fff"}}/>) 
            : <FaBars size={20} style={{color: "#fff"}}/>}
        </div>
            
    </div>
  );
};

export default NavBar;