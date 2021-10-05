import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './NavBar.css'
import logo from '../../images/logo-1.png'
import { Container, Navbar, Row } from 'react-bootstrap';


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
                </div>
            </div>
        </nav>


    );
};

export default NavBar;