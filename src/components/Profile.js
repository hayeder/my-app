import React from 'react';
import '../styles/Profile.css';

const Profile = ({ user }) => {
    return (
        <div className="profile">
            <h2>{user.name}</h2>
            <p>{user.bio}</p>
            {/* Add more user details as needed */}
        </div>
    );
};

export default Profile;
