import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './NavBar.css'
import logo from '../../images/logo-1.png'


const NavBar = () => {
    return (
        <nav>
            <div className="nav-bar ">
                <div className="logo ">
                    <img src={logo} alt="" />
                </div>
                <div className="nav-menu">
                    <NavLink to="/home" className="item">Home</NavLink>
                    <NavLink to="/courses" className="item">Courses</NavLink>
                    <NavLink to="/about" className="item">About Us</NavLink>
                    <NavLink to="/contact" className="item">Contact Us</NavLink>
                    <Link to="/login">
                        <button className="btn btn-warning login-btn" style={{
                            paddingTop: "2px",
                            paddingBottom: "2px",
                            paddingLeft: "5px",
                            borderRightWidth: "3px",
                            paddingRight: "5px",
                            fontSize: "18px"

                        }}>Login</button>
                    </Link>
                </div>
            </div>
        </nav >
    );
};

export default NavBar;