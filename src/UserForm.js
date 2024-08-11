// src/UserForm.js
import React, { useState, useContext, useEffect } from 'react';
import { UserContext } from './UserContext';

const UserForm = ({ currentUser, onClear }) => {
  const { addUser, updateUser } = useContext(UserContext);
  const [user, setUser] = useState({ name: '', email: '' });

  useEffect(() => {
    if (currentUser) {
      setUser(currentUser);
    }
  }, [currentUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentUser) {
      updateUser(currentUser.id, user);
    } else {
      addUser(user);
    }
    onClear();
    setUser({ name: '', email: '' });
  };

  return (
    <div>
      <h2>{currentUser ? 'Edit User' : 'Add User'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          required
        />
        <button type="submit">{currentUser ? 'Update' : 'Add'}</button>
        {currentUser && <button onClick={onClear}>Cancel</button>}
      </form>
    </div>
  );
};

export default UserForm;
