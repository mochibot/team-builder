import React, { useState, useEffect } from 'react';
import { Form, Button } from 'semantic-ui-react';

const TeamForm = (props) => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    role: '',
    team: ''
  })

  useEffect(() => {
   setFormState(props.activeMember) 
   console.log(props.activeMember)
  }, [props.activeMember])

  const inputHandler = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value
    })
  }

  const submitHandler = (event) => {
    event.preventDefault();
    if (props.activeMember) {
      props.editMember(formState)
    } else{
      let newMember = {
        ...formState,
        id: Date.now()
      }
      props.addMember(newMember)
    }
    setFormState({
      name: '',
      email: '',
      role: '',
      team: ''
    })
  }

  return (
    <div>
      <Form className='team-form' onSubmit={submitHandler} inverted>
        <Form.Field>
          <label>Name: </label>
          <input type='text' name='name' placeholder='Enter name' value={formState.name} onChange={inputHandler} required />
        </Form.Field>
        <Form.Field>
          <label>Email: </label>
          <input type='email' name='email' placeholder='Enter email' value={formState.email} onChange={inputHandler} required />
        </Form.Field>
        <Form.Field>
          <label>Role: </label>
          <input type='text' name='role' placeholder='Enter role' value={formState.role} onChange={inputHandler} required />
        </Form.Field>
        <Form.Field>
          <label>Team: </label>
          <input type='text' name='team' placeholder='Enter team' value={formState.team} onChange={inputHandler} required />
        </Form.Field>
        <Button>Submit</Button>
      </Form>
    </div>
  )
}

export default TeamForm;