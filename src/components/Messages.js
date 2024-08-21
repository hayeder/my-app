import React from 'react';
import Chat from './Chat';
import '../styles/Messages.css';

const Messages = () => {
    return (
        <div className="messages">
            <h2>Messages</h2>
            <Chat />
            {/* Repeat <Chat /> component for more conversations */}
        </div>
    );
};

export default Messages;
