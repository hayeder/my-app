import React, { useState } from 'react';
import '../styles/Post.css';
import { formatDate } from '../utils/formatDate';

const Post = ({ title, content, date }) => {
    return (
        <div className="post">
            <h3>{title}</h3>
            <p>{content}</p>
            <div className="post-info">
                <span>{date}</span>
                <button>Like</button>
            </div>
        </div>
    );
};

export default Post;