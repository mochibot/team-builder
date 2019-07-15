import React from 'react';
import { Card, Icon } from 'semantic-ui-react';

const Member = (props) => {
  return (
    <Card centered>
      <Card.Content>
        <Card.Header style={{fontSize: '24px'}}>{props.member.name}</Card.Header>
        <Card.Description style={{fontSize: '20px', lineHeight: 2}}>
          <Icon name='user circle' size='huge' style={{margin: '0 auto'}}/>
          <div style={{textAlign: 'left'}}><Icon name='mail'/>{props.member.email}</div>
          <div style={{textAlign: 'left'}}><Icon name='briefcase'/>Role: {props.member.role}</div>
        </Card.Description>
      </Card.Content>
      <Card.Content>
        <Icon name='edit' color='black' size='large' onClick={() => props.setActiveMember(props.member)} style={{margin: '0 1.5rem', cursor: 'pointer'}}/>
        <Icon name='delete' color='red' size='large' onClick={() => props.deleteMember(props.member)} style={{margin: '0 1.5rem', cursor: 'pointer'}}/>
      </Card.Content>
    </Card>
  )
}

export default Member;