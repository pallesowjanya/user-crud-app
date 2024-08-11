// src/App.js
import React, { useState } from 'react';
import { UserProvider } from './UserContext';
import UserList from './UserList';
import UserForm from './UserForm';
import './App.css';

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  const handleEdit = (user) => {
    setCurrentUser(user);
  };

  const handleClear = () => {
    setCurrentUser(null);
  };

  return (
    <UserProvider>
      <div className="container">
        <h1>User Management</h1>
        <UserForm currentUser={currentUser} onClear={handleClear} />
        <UserList onEdit={handleEdit} />
      </div>
    </UserProvider>
  );
}

export default App;
