const users = require('./users');

const registerUser = (username, password) => {
    // Logic for registering a new user
    const newUser = { username, password }; // In a real app, hash the password
    users.push(newUser);
    return newUser;
};

const loginUser = (username, password) => {
    // Logic for user login
    const user = users.find(user => user.username === username && user.password === password);
    return user ? { message: 'Login successful', user } : { message: 'Invalid credentials' };
};

module.exports = { registerUser, loginUser };
