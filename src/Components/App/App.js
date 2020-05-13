import React, { Component } from 'react';
import './App.css';
import LoginForm from '../LoginForm/LoginForm';
import UserProfile from '../UserProfile/UserProfile';
import AreaContainer from '../AreaContainer/AreaContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
        name: null,
        purpose: null
    }
  }

  loginUser = (userName, userPurpose) => {
      this.setState (
        { name: userName,
          purpose: userPurpose
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
          <LoginForm loginUser={this.loginUser}/>
          <UserProfile name={this.state.name} purpose={this.state.purpose} />
          <AreaContainer />
        </main>
      </div>
    )
  }

}

export default App;
