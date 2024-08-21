import React from 'react';
import '../styles/Chat.css';

const Chat = () => {
    return (
        <div className="chat">
            <h3>Chat with User</h3>
            <div className="chat-messages">
                {/* Render chat messages here */}
            </div>
            <input type="text" placeholder="Type a message..." />
        </div>
    );
};

export default Chat;
