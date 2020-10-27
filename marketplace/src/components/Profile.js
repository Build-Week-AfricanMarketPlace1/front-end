import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { getUserData, updateUserData, deleteUser } from '../state/actions/userActions'

const Profile = props => {
  const id = localStorage.getItem('id')
  const [formState, setFormState] = useState({  
    email:''
  })
  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.updateUserData(id, formState)
  }

  useEffect(() => {     
    props.getUserData(id)
  }, [])

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
          placeholder="Example@example.com"
          onChange={handleChange}
        />
        <button>Update</button>
      </form>
      <button onClick={props.deleteUser}>Delete Your Account</button>  
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    user: state.user,
    is_fetching: state.is_fetching
  }
} 
export default connect(mapStateToProps, {getUserData, updateUserData, deleteUser})(Profile)
