import React, { useState } from 'react';
import '../styles/Settings.css';

const Settings = () => {
    const [settings, setSettings] = useState({
        theme: 'dark',
        notifications: true,
    });

    // Handling changes to settings
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setSettings({
            ...settings,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    return (
        <div className="settings">
            <h2>Settings</h2>
            <form>
                <div>
                    <label>Theme</label>
                    <select name="theme" value={settings.theme} onChange={handleChange}>
                        <option value="dark">Dark</option>
                        <option value="light">Light</option>
                    </select>
                </div>
                <div>
                    <label>Notifications</label>
                    <input
                        type="checkbox"
                        name="notifications"
                        checked={settings.notifications}
                        onChange={handleChange}
                    />
                </div>
            </form>
        </div>
    );
};

export default Settings;
