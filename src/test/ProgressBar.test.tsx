import { render, screen } from '@testing-library/react';
import React from 'react';
import { ProgressBar } from '../components/ProgressBar';

describe('ProgressBar test', () => {
  it('ProgressBar is visible', () => {
    render(<ProgressBar isComplete={false} />);
    expect(screen.getByText('Progress...')).toBeInTheDocument();
  });
});
