import React, {useEffect, useState} from 'react'
import axiosWithAuth from '../api/axiosWithAuth'
import {connect} from 'react-redux'
import {getUserData} from '../state/actions/userActions'

const UserProfile = (props) => {
    

    useEffect(() => {
        props.getUserData()
    }, [])
    
    return (
        <div className="profile">
            <h1>Profile data</h1>
        </div>
    )

}
const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}
export default connect(mapStateToProps, {getUserData})(UserProfile)