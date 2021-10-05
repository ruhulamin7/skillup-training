import React from 'react';
import './Header.css'
import NavBar from '../NavBar/NavBar';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <NavBar></NavBar>
            <header className="header mb-5">
                <div className="hero-image">
                    <div className="hero-text my-5 pt-5">
                        <blockquote className="quote">“There is no end to education. It is not that you read a book, pass an examination, and finish with education. The whole of life, from the moment you are born to the moment you die, is a process of learning.” – Jiddu Krishnamurti</blockquote>
                        <Link to="/courses">
                            <button className="btn btn-warning mt-5">View our courses</button>
                        </Link>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;