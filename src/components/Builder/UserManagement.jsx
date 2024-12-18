import React, { useState } from 'react';

const UserManagement = () => {
    const [users, setUsers] = useState([]);
    const [username, setUsername] = useState('');

    const addUser = () => {
        setUsers([...users, { id: Date.now(), name: username }]);
        setUsername('');
    };

    return (
        <div>
            <h2>User Management</h2>
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter username"
            />
            <button onClick={addUser}>Add User</button>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default UserManagement;
