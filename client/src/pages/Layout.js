import { Outlet, NavLink } from "react-router-dom";


const Layout = () => {
    return (
        <div className="navBar">
            <div className="logo-image">
                {/* <img></img> */}
            </div>
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

            <Outlet />
        </div>
    )
};

export default Layout;