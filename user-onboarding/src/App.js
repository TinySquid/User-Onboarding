import React, { useState } from 'react';
import './App.css';

import Form from './components/OnBoardingForm';
import UserCard from './components/UserCard';

const App = () => {
  const [users, setUsers] = useState([
    {
      id: 0,
      name: 'John Doe',
      email: 'john@gmail.com',
      password: 'password123',
      role: 'UX/UI Developer'
    }
  ]);

  const addUser = user => {
    setUsers([...users, user]);
  }

  return (
    <div className="app">
      <Form addUser={addUser} />
      <div className="users">
        {users.map(user => (
          <UserCard key={user.id} id={user.id} name={user.name} email={user.email} password={user.password} role={user.role} />
        ))}
      </div>
    </div>

  );
}

export default App;
