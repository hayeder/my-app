import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <ul>
                <li><a href="/home">Home</a></li>
                <li><a href="/profile">Profile</a></li>
                <li><a href="/messages">Messages</a></li>
                <li><a href="/notifications">Notifications</a></li>
                <li><a href="/settings">Settings</a></li>
            </ul>
        </div>
    );
};

export default Sidebar;
