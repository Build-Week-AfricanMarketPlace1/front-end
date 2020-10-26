import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const isAuthenticated = () => {
    return localStorage.getItem('login-token') !== null;
}

const PrivateRoute = ({ component: Conponent, ...props }) => {
    return(
        <Route 
        {...props}
        render={props => {
            if(isAuthenticated()) {
                return <Conponent {...props} />;
            }
            return <Redirect to='/' />
        }}
        />
    )
}
export default PrivateRoute