import React from 'react';
import './Header.css'
import NavBar from '../NavBar/NavBar';

const Header = () => {
    return (
        <header className="header mb-5">

            <NavBar></NavBar>
            <div class="hero-image">
                <div class="hero-text">
                    <h1 ><span style={{ color: 'blue' }}>Learn</span> <span style={{ color: 'orange' }}>Grow</span> <span style={{ color: 'green' }}>Lead</span></h1>
                    <blockquote className="quote">“There is no end to education. It is not that you read a book, pass an examination, and finish with education. The whole of life, from the moment you are born to the moment you die, is a process of learning.” – Jiddu Krishnamurti</blockquote>
                    <button>Hire me</button>
                </div>
            </div>

        </header>
    );
};

export default Header;