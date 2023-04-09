import { render, screen } from '@testing-library/react';
import React from 'react';
import { Main } from '../pages/Main';

describe('Main test', () => {
  it('Main is visible', () => {
    render(<Main />);
    expect(screen.getByText('Main')).toBeInTheDocument();
  });
});
