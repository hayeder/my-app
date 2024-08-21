import React, { useEffect, useState } from 'react';
import Post from './Post';
import { getPosts } from '../services/postService';
import '../styles/Feed.css';

const Feed = () => {
    const [posts, setPosts] = useState([]);

    // Fetching posts when the component is mounted
    useEffect(() => {
        const fetchPosts = async () => {
            const posts = await getPosts();
            setPosts(posts);
        };
        fetchPosts();
    }, []);

    return (
        <div className="feed">
            {posts.map(post => (
                <Post key={post.id} post={post} />
            ))}
        </div>
    );
};

export default Feed;
