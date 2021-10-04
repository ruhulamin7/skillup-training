import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className="not-found">
            <h1 class="errorcode">ERROR 404</h1>
            <div class="errortext">This area is forbidden. Turn back now!</div>
            <Link to="/home" className="button-back">
                <button className="btn btn-warning btn-back">Back to home</button>
            </Link>
        </div>
    );
};

export default NotFound;