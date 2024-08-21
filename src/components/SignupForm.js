import React, { useState } from 'react';
import './styles/SignupForm.css';

const SignupForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Signup form submitted:', { username, password });
        // Add signup logic here
    };

    return (
        <form className="signup-form" onSubmit={handleSubmit}>
            <div>
                <label>Username</label>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div>
                <label>Password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button type="submit">Signup</button>
        </form>
    );
};

export default SignupForm;
