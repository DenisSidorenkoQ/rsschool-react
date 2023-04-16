import { render, screen } from '@testing-library/react';
import React from 'react';
import { AboutUs } from '../pages/AboutUs';

describe('AboutUs test', () => {
  it('AboutUs is visible', () => {
    render(<AboutUs />);
    expect(screen.getByText('About Us')).toBeInTheDocument();
  });
});
