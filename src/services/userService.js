// Mock user data
const user = {
    id: 1,
    name: 'John Doe',
    bio: 'Just a regular user.',
};

// Function to simulate fetching user data from a server
export const getUser = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(user);
        }, 1000);
    });
};
