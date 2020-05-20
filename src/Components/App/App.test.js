import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
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

  it('Should display areas upon a succesful login', async() => {
    const { getByText, getByPlaceholderText } = render(<BrowserRouter>
      <App  />
      </ BrowserRouter>)
    fireEvent.change(getByPlaceholderText("name"), {
      target: { value: "Olivia" },
    });
    fireEvent.change(getByPlaceholderText("email"), {
      target: { value: "olivia@turing.com" },
    });
    fireEvent.change(getByPlaceholderText("select your purpose"), {
      target: { value: "business" },
    });
    fireEvent.click(getByText("Log In"));
    const neighborhood = await waitFor(() => getByText('Park Hill'))
    expect(neighborhood).toBeInTheDocument();
    expect(getByText('Denver Neighborhoods')).toBeInTheDocument();
  })
})
