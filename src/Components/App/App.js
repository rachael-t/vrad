import React, { Component } from 'react';
import './App.css';
import { Route, NavLink } from 'react-router-dom';
import LoginForm from '../LoginForm/LoginForm';
import UserProfile from '../UserProfile/UserProfile';
import AreaContainer from '../AreaContainer/AreaContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
        name: null,
        purpose: null,
        loggedIn: false,
    }
  }

  loginUser = (userName, userPurpose) => {
      this.setState (
        { name: userName,
          purpose: userPurpose,
          loggedIn: true
        }
    )
  }

  logoutUser = () => {
    this.setState (
      {
          name: null,
          purpose: null,
          loggedIn: false,
      }
    )
  }

  render() {
    return(
      <div className="App">
        <header>
          <h1>VRAD</h1>
        </header>
        <main>
        {this.state.loggedIn ? <UserProfile name={this.state.name} purpose={this.state.purpose} logoutUser={this.logoutUser}/> : ""}
        <Route exact path='/' render={() => <LoginForm loginUser={this.loginUser}/>}/>
        <Route exact path ='/areas' render={() => (<AreaContainer />)} />


        </main>
      </div>
    )
  }

}

export default App;
