// Utility functions for mock authentication
export const login = (username, password) => {
    // Mock authentication logic
    if (username === 'user' && password === 'password') {
        return { id: 1, name: 'John Doe' };
    } else {
        throw new Error('Invalid username or password');
    }
};

export const logout = () => {
    // Mock logout logic
    console.log('User logged out');
};
