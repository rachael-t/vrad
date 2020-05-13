import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import LoginForm from './LoginForm';
import '@testing-library/jest-dom';

describe('LoginForm', () => {
    it('Should render a login form', () => {
        const { getByText } = render(<LoginForm />);
        
        expect(getByText('Welcome, please log in!')).toBeInTheDocument();
        expect(getByText('what is your purpose?')).toBeInTheDocument();
        expect(getByText('Log In')).toBeInTheDocument();
    });

    it('Should invoke loginUser method when input fields are complete and button is clicked', () => {
        const mockLoginUser = jest.fn();
        const { getByText, getByPlaceholderText } = render(<LoginForm 
            loginUser={mockLoginUser}
            />);

        fireEvent.change(getByPlaceholderText('name'), {target: {value: 'Olivia'}});
        fireEvent.change(getByPlaceholderText('email'), {target: {value: 'olivia@turing.com'}});
        fireEvent.change(getByPlaceholderText('select your purpose'), {target: {value: 'business'}});
        fireEvent.click(getByText('Log In'));
        
        expect(mockLoginUser).toHaveBeenCalledWith('Olivia', 'business');
    });

    it('Should display an error message if a user tries to log in without all forms completed', () => {
        const { getByText, getByPlaceholderText } = render(<LoginForm />);

        fireEvent.change(getByPlaceholderText('name'), {target: {value: ''}});
        fireEvent.change(getByPlaceholderText('email'), {target: {value: 'olivia@turing.com'}});
        fireEvent.change(getByPlaceholderText('select your purpose'), {target: {value: 'business'}});
        fireEvent.click(getByText('Log In'));
        
        expect(getByText('Please fix this shit right now')).toBeInTheDocument();
    });

});