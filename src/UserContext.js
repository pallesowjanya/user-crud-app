// src/UserContext.js
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => setUsers(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const addUser = (user) => {
    axios.post('https://jsonplaceholder.typicode.com/users', user)
      .then(response => setUsers([...users, response.data]))
      .catch(error => console.error('Error adding user:', error));
  };

  const updateUser = (id, updatedUser) => {
    axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, updatedUser)
      .then(response => setUsers(users.map(user => (user.id === id ? response.data : user))))
      .catch(error => console.error('Error updating user:', error));
  };

  const deleteUser = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(() => setUsers(users.filter(user => user.id !== id)))
      .catch(error => console.error('Error deleting user:', error));
  };

  return (
    <UserContext.Provider value={{ users, addUser, updateUser, deleteUser }}>
      {children}
    </UserContext.Provider>
  );
};
