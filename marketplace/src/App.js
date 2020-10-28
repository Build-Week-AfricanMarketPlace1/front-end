import React, { useState } from 'react';
// styling
import styled from 'styled-components';
import './App.css';
// components
import SignUp from './components/SignUp';
import Login from './components/Login';
import AddItem from './components/AddItem';
import Data from './components/Data';
import Profile from './components/Profile'
// routing
import PrivateRoute from './components/PrivateRoute'
import { BrowserRouter as Router, Link,  Route, Switch } from 'react-router-dom';
import Image from './africanmarketplace.png';

function App(props) {

  const [item] = useState(Data);

  console.log(item);

  const StyledLink = styled(Link)`
  width:100px;
  padding: 10px;
  text-decoration: none;
  display: flex;
  flex-direction: row;
  float: right;
`;


  return (
    <div className="App">
      <Router> 
      <div className="header-one">
        <nav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/SignUp">Register</StyledLink>
        <StyledLink to="/additem">Add Item</StyledLink>
        <StyledLink to="/profile">Profile</StyledLink>
        <StyledLink to="/marketing">Marketing</StyledLink>

        </nav>
      </div>
        <div className= "image">
          <img src = {Image} alt="africanmarketplace"></img>
        </div>
        <div className="welcome">
          <p>Welcome!</p>
        </div>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/SignUp" component={SignUp} />
          <Route exact path="/additem" component={AddItem}/>
          <Route path='/marketing' component={() => { 
     window.location.href = 'https://africanmarketplace1.netlify.app/'; 
     return null;
}}/>
          <PrivateRoute path="/profile" component={Profile}/>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
