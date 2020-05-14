import React, { Component } from 'react';
import './LoginForm.css';
import PropTypes from 'prop-types';

class LoginForm extends Component {
  constructor(props) {
    super()
    this.state = {
      userName: "",
      userEmail: "",
      userPurpose: "",
      errorMessage: ""
    }
  }

  handleChange = (event) => {
    if (event.target.className === "name-input") {
      this.setState( {userName: event.target.value} )
    } else if (event.target.className === "email-input") {
      this.setState( {userEmail: event.target.value} )
    } else if (event.target.className === "purpose-selection") {
      this.setState ( {userPurpose: event.target.value} )
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.userName === "" || this.state.userEmail === "" || this.state.userPurpose === "") {
      this.setState( {errorMessage: "Please complete all items."} )
    } else {
      this.props.loginUser(this.state.userName, this.state.userPurpose);
      //this will be changed in iteration 2:
      this.setState( {errorMessage: 'WOOHOO'})
    }
  }

  render() {
    return (
      <section className="login-section">
        <form className="login-form">
          <h2>Welcome, please log in!</h2>
          <p className="login-error-message">{this.state.errorMessage}</p>
          <input 
              className="name-input"
              type="text"
              placeholder="name"
              onChange={this.handleChange}/>
          <input 
              className="email-input"
              type="text"
              placeholder="email"
              onChange={this.handleChange}/>
          <select 
              className="purpose-selection"
              placeholder='select your purpose'
              onChange={this.handleChange}>
            <option disabled selected value="what is your purpose">What brings you to Denver?</option>
            <option value="business">business</option>
            <option value="vacation">vacation</option>
            <option value="other">other</option>
          </select>
          <button 
            className="login-button"
            onClick={this.handleSubmit}>
              Log In
              </button>
        </form>
      </section>
    )
  }
}

export default LoginForm;

LoginForm.propTypes = {
  loginUser: PropTypes.func,
}
