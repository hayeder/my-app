import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">SocialApp</div>
            <div className="search-bar">
                <input type="text" placeholder="Search..." />
            </div>
            <div className="menu">
                <a href="/profile">Profile</a>
                <a href="/notifications">Notifications</a>
                <a href="/settings">Settings</a>
            </div>
        </nav>
    );
};

export default Navbar;