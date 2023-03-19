import { render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { Card } from '../components/Card';

const imgText = 'placeholder';
const jobText = 'engineer';
const nameText = 'Denis';

describe('Card test', () => {
  it('card is visible', () => {
    render(<Card img={imgText} job={jobText} name={nameText} />);
    expect(document.querySelector('img')!.getAttribute('src')).toEqual('placeholder');
    expect(screen.getByText(`Denis`)).toBeInTheDocument();
    expect(screen.getByText(`engineer`)).toBeInTheDocument();
  });
});
