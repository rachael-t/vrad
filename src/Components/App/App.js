import React, { Component } from 'react';
import './App.css';
import LoginForm from '../LoginForm/LoginForm';

class App extends Component {
  constructor() {
    super();
    this.state ={
      user: {
        name: null,
        email: null,
        purpose: null
      }
    }
  }

  render() {
    return(
      <div className="App">
        <LoginForm />
      </div>
    )
  }

}

export default App;
