import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const isAuthenticated = () => {
    return localStorage.getItem('login-token') !== null;
}

const PrivateRoute = ({ component: Component, ...props }) => {
    return(
        <Route 
        {...props}
        render={props => {
            if(isAuthenticated()) {
                return <Component {...props} />;
            }
            return <Redirect to='/' />
        }}
        />
    )
}
export default PrivateRoute