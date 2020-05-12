import React, { Component } from 'react';
import './LoginForm.css';


class LoginForm extends Component {
  constructor(props) {
    super()
  }

  render() {
    return (
      <section className="login-section">
      <h2>Welcome, please login!</h2>
      <form className="login-form">
       <input className="name-input" type="text" placeholder="name"/>
       <input className="email-input" type="text" placeholder="email"/>
       <select className="purpose-selection">
        <option disabled selected value="what is your purpose">what is your purpose?</option>
        <option value="business">business</option>
        <option value="vacation">vacation</option>
        <option value="other">other</option>
       </select>
      </form>
      </section>
    )
  }
}

export default LoginForm;
