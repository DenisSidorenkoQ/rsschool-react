import { render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { Card } from '../components/Card';

const imgText = 'placeholder';
const nameText = 'Denis';
const idText = 1;

describe('Card test', () => {
  it('card is visible', () => {
    render(<Card id={idText} img={imgText} name={nameText} />);
    expect(document.querySelector('img')!.getAttribute('src')).toEqual('placeholder');
    expect(screen.getByText(`Login: Denis`)).toBeInTheDocument();
    expect(screen.getByText(`Id: 1`)).toBeInTheDocument();
  });
});
