import React from 'react'
import { Outlet, NavLink, Link } from "react-router-dom";
import logo from '../assets/rn-logo.png'
import insta from '../assets/insta-icon.png'

const Layout = () => {
    return (
           <div className='navBar'> <img src={logo} alt='Logo' className='logo-img'/>;
            <nav>
                <ul>
                    <li>
                        <NavLink to = "/" className="nav-link"> Home </NavLink>
                    </li>
                    <li activeClassName="selected"> 
                        <NavLink to = "/destinations" className="nav-link"> Destinations </NavLink>
                    </li>
                    <li>
                        <NavLink to = "/plan" className="nav-link"> Trip Planner </NavLink>
                    </li>
                    <li>
                        <NavLink to = "/blogs" className="nav-link"> Extras </NavLink>
                    </li>
                    <li>
                        <NavLink to = "/about" className="nav-link"> About </NavLink>
                    </li>
                </ul>
            </nav>
            {/* <div className='social-icons'>
            <Link to="https://www.instagram.com/connected_confessions/" target="_blank"><img src={insta} className="githubIcon" /></Link>
            <Link to="https://www.instagram.com/connected_confessions/" target="_blank"><img src={insta} className="githubIcon" /></Link>
            <Link to="https://www.instagram.com/connected_confessions/" target="_blank"><img src={insta} className="githubIcon" /></Link>                                
            </div> */}
            <Outlet />
        </div>
    )
};

export default Layout;