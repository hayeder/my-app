import React, { useState } from 'react';
import { login } from '../utils/auth';
import '../styles/LoginForm.css';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            const user = login(username, password);
            console.log('Logged in:', user);
        } catch (error) {
            console.error(error.message);
        }
    };

    return (
        <form className="login-form" onSubmit={handleSubmit}>
            <div>
                <label>Username</label>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div>
                <label>Password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button type="submit">Login</button>
        </form>
    );
};

export default LoginForm;
