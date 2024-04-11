import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import "./navBar.css"
function NavBar(){
    return(
        <nav className="nav">
            <NavLink to="/profile" className="nav__link">Profile</NavLink>
            <NavLink to="/messages" className="nav__link">Messages</NavLink>
            <NavLink to="/users" className="nav__link">Friends</NavLink>
        </nav>
    )
}
export default NavBar