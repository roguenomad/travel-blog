import React from 'react'
import { Outlet, Link } from "react-router-dom";
import { Navbar } from "../components/Navbar"
import logo from '../assets/rn-logo.png'
import insta from '../assets/insta-icon.png'
import pint from '../assets/pin-icon.png'
import email from '../assets/email-icon.png'
import { NavDropdown } from 'react-bootstrap';

const Layout = () => {
    return (
        <div className='layoutBody'> 
            <Link to="/"><img src={logo} alt='Logo' className='logo-img'/></Link>;
            <div className='social-icons'>
            <Link to="https://www.instagram.com/connected_confessions/" target="_blank"><img src={insta} className="socialIcon githubIcon" alt='instagram' /></Link>
            <Link to="https://www.pinterest.com/connectedconfessions/" target="_blank"><img src={pint} className="socialIcon githubIcon" alt='pinterest' /></Link>
            <Link to="mailto:connectedconfessions@gmail.com" target="_blank"><img src={email} className="socialIcon githubIcon" alt='email' /></Link>                                
            </div>
            <div className='navBar'>
                <Navbar />
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    )
};


export default Layout;

