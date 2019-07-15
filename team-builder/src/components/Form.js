import React, { useState, useEffect } from 'react';

const Form = (props) => {
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
      <form onSubmit={submitHandler}>
        <label>
          Name: 
          <input type='text' name='name' placeholder='Enter name' value={formState.name} onChange={inputHandler} required />
        </label>
        <label>
          Email: 
          <input type='email' name='email' placeholder='Enter email' value={formState.email} onChange={inputHandler} required />
        </label>
        <label>
          Role: 
          <input type='text' name='role' placeholder='Enter role' value={formState.role} onChange={inputHandler} required />
        </label>
        <label>
          Team: 
          <input type='text' name='team' placeholder='Enter team' value={formState.team} onChange={inputHandler} required />
        </label>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Form;