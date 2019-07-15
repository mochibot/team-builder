import React, { useState, useEffect } from 'react';

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

  const teamNames = [];

  team.forEach(item => {
    if (!teamNames.includes(item.team)) {
      teamNames.push(item.team)
    }
  })

  console.log(teamNames)

  return (
    <div className="App">
      <TeamForm addMember={addMember} activeMember={activeMember} editMember={editMember}/>
      {teamNames.map(item => <Team key={item} teamName={item} team={team.filter(team => team.team === item)} setActiveMember={memberToEdit} deleteMember={deleteMember} />)}

      {/*team.map((item, index) => <Member key={item.id} member={item} setActiveMember={memberToEdit} deleteMember={deleteMember}/>) */}
    </div>
  );
}

export default App;
