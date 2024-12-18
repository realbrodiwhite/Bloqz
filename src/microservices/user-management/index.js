const express = require('express');
const { registerUser, loginUser } = require('./auth');
const { getAllUsers, getUserByUsername } = require('./users');

const app = express();
app.use(express.json());

app.post('/register', (req, res) => {
    const { username, password } = req.body;
    const newUser = registerUser(username, password);
    res.status(201).json(newUser);
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const result = loginUser(username, password);
    res.status(result.message === 'Login successful' ? 200 : 401).json(result);
});

app.get('/users', (req, res) => {
    const users = getAllUsers();
    res.status(200).json(users);
});

app.get('/users/:username', (req, res) => {
    const user = getUserByUsername(req.params.username);
    res.status(user ? 200 : 404).json(user || { message: 'User not found' });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`User management service running on port ${PORT}`);
});
