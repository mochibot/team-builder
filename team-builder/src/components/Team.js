import React from 'react';
import { Item } from 'semantic-ui-react'

import Member from './Member';

const Team = (props) => {
  return (
    <Item.Group divided relaxed>
      <Item style={{display: 'flex', width: '90%', margin: '0 auto'}}>
        <Item.Header style={{fontSize: '28px', width: '10%', textAlign: 'left'}}>{props.teamName}</Item.Header>
        <Item.Content >  
          {props.team.map(item => <Member key={item.id} member={item} setActiveMember={props.setActiveMember} deleteMember={props.deleteMember} />)}
        </Item.Content>
      </Item>
    </Item.Group>
  )
}

export default Team