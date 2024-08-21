// Mock data for posts
const posts = [
    { id: 1, title: 'First Post', content: 'This is the content of the first post.', date: '2024-08-20T12:34:56Z' },
    { id: 2, title: 'Second Post', content: 'This is the content of the second post.', date: '2024-08-21T15:45:23Z' },
];

// Function to simulate fetching posts from a server
export const getPosts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(posts);
        }, 1000);
    });
};
