import { render, screen } from '@testing-library/react';
import React from 'react';
import { Error404 } from '../pages/Error404';

describe('Error404 test', () => {
  it('Error404 is visible', () => {
    render(<Error404 />);
    expect(screen.getByText('Error 404')).toBeInTheDocument();
  });
});
