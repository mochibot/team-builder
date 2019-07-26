import React, { useState, useEffect } from 'react';
import { Sidebar } from 'semantic-ui-react'

import TeamForm from './components/TeamForm';
import Team from './components/Team';

import 'semantic-ui-css/semantic.min.css'
import './App.css';

function App() {
  const initialTeam = JSON.parse(localStorage.getItem('team')) || []

  const [team, setTeam] = useState(initialTeam)
  const [activeMember, setActiveMember] = useState('')

  useEffect(() => {
    localStorage.setItem('team', JSON.stringify(team))
  }, [team])

  const addMember = (member) => {
    setTeam([...team, member])
  }

  const memberToEdit = (member) => {
    setActiveMember(member)
  } 

  const editMember = (member) => {
    setTeam(team.map(item => {
      if (item.id === activeMember.id) {
        return member;
      } else {
        return item;
      }
    }))
    setActiveMember('')
  }

  const deleteMember= (member) => {
    setTeam(team.filter(item => item.id !== member.id))
  }

  const teamNames = [...new Set(team.map(item => item.team))];
  console.log(teamNames)

  return (
    <div className="App">
      <Sidebar visible style={{width: '400px', background: 'rgb(53, 53, 53)'}}>
        <TeamForm addMember={addMember} activeMember={activeMember} editMember={editMember}/>
      </Sidebar>
      <div className='App-content'>
        {teamNames.map(item => <Team key={item} teamName={item} team={team.filter(team => team.team === item)} setActiveMember={memberToEdit} deleteMember={deleteMember} />)}
      </div>
    </div>
  );
}

export default App;
