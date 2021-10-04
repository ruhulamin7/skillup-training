import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './NavBar.css'
import logo from '../../images/logo.png'
import { Container, Navbar, Row } from 'react-bootstrap';


const NavBar = () => {
    return (

        <nav className="nav-bar row " style={{ marginRight: '0px', marginLeft: '0px' }}>

            <div className="logo col-lg-3 col-md-12 col-sm-12">
                <img src={logo} alt="" />
            </div>

            <div className="nav-menu col-lg-9 col-md-12 col-sm-12">
                <NavLink to="/home" className="item">Home</NavLink>
                <NavLink to="/courses" className="item">Courses</NavLink>
                <NavLink to="/about" className="item">About Us</NavLink>
                <NavLink to="/contact" className="item">Contact Us</NavLink>
            </div>
        </nav>

    );
};

export default NavBar;