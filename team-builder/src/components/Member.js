import React from 'react';

const Member = (props) => {
  return (
    <div>
      <div>Name: {props.member.name}</div>
      <div>Email: {props.member.email}</div>
      <div>Role: {props.member.role}</div>
      <button onClick={() => props.setActiveMember(props.member)}>Edit</button>
      <button onClick={() => props.deleteTeam(props.member)}>Delete</button>
    </div>
  )
}

export default Member;