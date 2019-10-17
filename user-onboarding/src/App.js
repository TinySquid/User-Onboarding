import React, { useState } from 'react';
import './App.css';

import Form from './components/OnBoardingForm';

const App = () => {
  const [users, setUsers] = useState([]);

  const addUser = user => {
    setUsers([...users, user]);
  }

  return (
    <div className="app">
      <Form addUser={addUser} />
      <ul className="users">
        {users.map((user, idx) => (
          <li key={user.id}>{user.id} | {user.name} | {user.email} | {user.password}</li>
        ))}
      </ul>
    </div>

  );
}

export default App;
