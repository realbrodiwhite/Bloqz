let users = []; // In-memory user storage

const getAllUsers = () => {
    return users;
};

const getUserByUsername = (username) => {
    return users.find(user => user.username === username);
};

module.exports = { users, getAllUsers, getUserByUsername };
