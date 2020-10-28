import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { getUserData, updateUserData, deleteUser } from '../state/actions/userActions'

const Profile = (props) => {
  const [formState, setFormState] = useState({  
    email:'',
    password:''
  })
  const handleChange = (e) => {
    console.log(formState)
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newUserData = {
      username: props.user.username,
      email: formState.email,
      password: formState.password
    }
    props.updateUserData(newUserData)    
  }

  useEffect(() => {     
    props.getUserData()
  }, [getUserData])

  return (
    
    <div className="profile">
      <h1>Profile data</h1>
      <h2>Welcome {props.user.username}</h2>
      <h2>Email: {props.user.email}</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">New Email</label>
        <input
          id="email"
          type="email"
          name='email'
          placeholder="Example@example.com"
          onChange={handleChange}
        />
        <label htmlFor='password'>Confirm Password</label>
        <input
          id='password'
          type='password'
          name='password'
          placeholder='password'
          onChange={handleChange}
        />
        <button>Update</button>
      </form>
      <button onClick={props.deleteUser}>Delete Your Account</button>  
    </div>
  )
}
const mapStateToProps = (state) => {
  console.log(state.user.data)
  return {
    user: state.user,
    is_fetching: state.is_fetching
  }
} 
export default connect(mapStateToProps, {getUserData, updateUserData, deleteUser})(Profile)
