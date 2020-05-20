import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter, Router, MemoryRouter } from "react-router-dom";
import App from './App';
import LoginForm from '../LoginForm/LoginForm'

describe('App', () => {
  it('Should render the header', () => {
       const { getByText } = render(<BrowserRouter><App/> </BrowserRouter>)
    expect(getByText('VRAD')).toBeInTheDocument();
  })
  it('Should render the login form', () => {
    const { getByText } = render(<BrowserRouter>
      <App  />
      </ BrowserRouter>)
      expect(getByText('Welcome, please log in!')).toBeInTheDocument();
  })
})
