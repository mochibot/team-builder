import React, { useState, useEffect } from 'react';

const Form = (props) => {
  const [formState, setFormState] = useState({
    id: null,
    name: '',
    email: '',
    role: ''
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
    setFormState({
      ...formState,
      id: Date.now()
    })
    if (props.activeMember) {
      props.editTeam(formState)
    } else{
      props.addTeam(formState)
    }
    setFormState({
      id: null,
      name: '',
      email: '',
      role: ''
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
          <input type='text' name='role' placeholder='Enter role' value={formState.role} onChange={inputHandler} required/>
        </label>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Form;