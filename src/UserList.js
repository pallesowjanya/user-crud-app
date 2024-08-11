// src/UserList.js
import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const UserList = ({ onEdit }) => {
  const { users, deleteUser } = useContext(UserContext);

  const listItemStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
    borderBottom: '1px solid #ddd',
  };

  const buttonStyle = {
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    padding: '5px 10px',
    cursor: 'pointer',
    borderRadius: '4px',
    marginLeft: '5px',
  };

  const deleteButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#dc3545',
  };

  const editButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#ffc107',
  };

  return (
    <div>
      <h2>User List</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {users.map(user => (
          <li key={user.id} style={listItemStyle}>
            {user.name} ({user.email})
            <div>
              <button style={editButtonStyle} onClick={() => onEdit(user)}>Edit</button>
              <button style={deleteButtonStyle} onClick={() => deleteUser(user.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
