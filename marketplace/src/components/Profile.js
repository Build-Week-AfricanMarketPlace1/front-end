import React, { useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { getUserData } from '../state/actions/userActions'


const Profile = props => {
  const id = localStorage.getItem('id')
  // useEffect(() => {
  //   axiosWithAuth()
  //   .get(`${baseURL}/auth/users/${id}`)
  //   .then(res => {
  //     console.log(res)

  //   })
  //   .catch() 
  // } , [])


  // return (
  //       <h1>Profile page heading</h1>
  //   )
  useEffect(() => {     
    props.getUserData(id)
  }, [])
  console.log(props)
  return (
    <div className="profile">
      <h1>Profile data</h1>
  <h2>Welcome {props.user.name}</h2>
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    user: state.user,
    is_fetching: state.is_fetching
  }
} 
export default connect(mapStateToProps, {getUserData})(Profile)
