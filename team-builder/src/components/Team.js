import React from 'react';

import Member from './Member';

const Team = (props) => {
  return (
    <div>
      <div>{props.teamName}</div>
      {props.team.map(item => <Member key={item.id} member={item} setActiveMember={props.memberToEdit} deleteMember={props.deleteMember} />)}
    </div>
  )
}

export default Team