import { render, screen } from '@testing-library/react';
import React from 'react';
import { Form } from '../components/Form';
import { FormPage } from '../pages/FormPage';

describe('Form test', () => {
  it('Form is visible', () => {
    render(<Form />);
    expect(document.querySelector('form')!.getAttribute('id')).toEqual('form');
    expect(screen.getByText('Name:')).toBeInTheDocument();
    expect(screen.getByText('Birthday:')).toBeInTheDocument();
    expect(screen.getByText('Country:')).toBeInTheDocument();
    expect(screen.getByText('Profile image:')).toBeInTheDocument();
    expect(screen.getByText('Male/Female')).toBeInTheDocument();
    expect(screen.getByText('I consent to my personal data')).toBeInTheDocument();
    expect(screen.getByText('I consent to my personal data')).toBeInTheDocument();
    expect(screen.getByText('Submit')).toBeInTheDocument();
  });
});

describe('Form page test', () => {
  it('Form page is visible', () => {
    render(<FormPage />);
    expect(screen.getByText('Form')).toBeInTheDocument();
  });
});
