import React, { useState } from 'react';

import Form from './components/Form';
import Member from './components/Member';

import './App.css';

function App() {
  const [team, setTeam] = useState([]);
  const [activeMember, setActiveMember] = useState('')

  const addTeam = (member) => {
    setTeam([...team, member])
  }

  const memberToEdit = (member) => {
    setActiveMember(member)
  } 

  const editTeam = (member) => {
    setTeam(team.map(item => {
      if (item.id === activeMember.id) {
        return member;
      } else {
        return item;
      }
    }))
    setActiveMember('')
  }

  const deleteTeam = (member) => {
    setTeam(team.filter(item => item.id !== member.id))
  }

  return (
    <div className="App">
      <Form addTeam={addTeam} activeMember={activeMember} editTeam={editTeam}/>
      {team.map((item, index) => <Member key={index} member={item} setActiveMember={memberToEdit} deleteTeam={deleteTeam}/>)}
    </div>
  );
}

export default App;
