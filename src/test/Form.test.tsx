import { render, screen } from '@testing-library/react';
import React from 'react';
import { Form } from '../components/Form';

describe('Form test', () => {
  it('Form is visible', () => {
    render(<Form />);
    expect(document.querySelector('form')!.getAttribute('id')).toEqual('form');
    expect(screen.getByText('Name:')).toBeInTheDocument();
    expect(screen.getByText('Birthday:')).toBeInTheDocument();
    expect(screen.getByText('Country:')).toBeInTheDocument();
    expect(screen.getByText('Profile image:')).toBeInTheDocument();
  });
});
