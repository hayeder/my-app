import React from 'react';
import Profile from '../components/Profile';

const ProfilePage = () => {
    const user = {
        name: 'John Doe',
        bio: 'Just a regular user.',
    };

    return (
        <div>
            <h1>Profile</h1>
            <Profile user={user} />
        </div>
    );
};

export default ProfilePage;
