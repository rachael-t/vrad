import React, { Component } from 'react';
import './App.css';
import LoginForm from '../LoginForm/LoginForm';

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
        <LoginForm loginUser={this.loginUser}/>
      </div>
    )
  }

}

export default App;
