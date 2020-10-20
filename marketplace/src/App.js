import React from 'react';
import SignUp from './components/SignUp';
import './App.css';
import Login from './components/Login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Image from './africanmarketplace.png';


function App() {

  return (
    <div className="App">
      <Router> 
      <div className="header-one">

      </div>
        <div className= "image">
          <img src = {Image} alt="africanmarketplace"></img>
        </div>
        <div className="welcome">
          <p>Welcome! Please sign in to get started.</p>
        </div>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/SignUp" component={SignUp} />
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
