import React, { useState, useEffect } from 'react';

import List from './components/List';
import Form from './components/Form';

import './style.css';

function App() {
  const [ memberToEdit, setMemberToEdit ] = useState(null);
  const [ list, setList ] = useState([
    {
      name: "Alex",
      email: "alex@react.com",
      role: "Team Lead",
      id: 1,
    },
    {
      name: "Sarah",
      email: "sarah@react.com",
      role: "Frontend Engineer",
      id: 2,
    },
    {
      name: "Kevin",
      email: "kevin@react.com",
      role: "Backend Engineer",
      id: 3,
    },
    {
      name: "Rouel",
      email: "rouel@react.com",
      role: "Designer",
      id: 4,
    }
  ]);
  
  return (
    <div className="app">
      <List list={list} setList={setList} setMemberToEdit={setMemberToEdit} />
      <Form list={list} setList={setList} setMemberToEdit={setMemberToEdit} memberToEdit={memberToEdit} />
    </div>
  );
}

export default App;