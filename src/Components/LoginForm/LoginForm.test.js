import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import LoginForm from './LoginForm';
import '@testing-library/jest-dom';

describe('LoginForm', () => {
    it('Should render a login form', () => {
        const { getByText } = render(<LoginForm />);
        expect(getByText('Welcome, please log in!')).toBeInTheDocument();
    })

});