import { render, screen } from '@testing-library/react';
import React from 'react';
import { FormCard } from '../components/FormCard';

const nameText = 'Denis';
const dateText = '10.12.2022';
const countryText = 'Belarus';
const imgText = 'placeholder';
const sexText = 'M';

describe('FormCard test', () => {
  it('card is visible', () => {
    render(
      <FormCard name={nameText} date={dateText} country={countryText} img={imgText} sex={sexText} />
    );
    expect(document.querySelector('img')!.getAttribute('src')).toEqual(imgText);
    expect(screen.getByText('Name: ' + nameText)).toBeInTheDocument();
    expect(screen.getByText('Birthday: ' + dateText)).toBeInTheDocument();
    expect(screen.getByText('Country: ' + countryText)).toBeInTheDocument();
    expect(screen.getByText('Sex: ' + sexText)).toBeInTheDocument();
  });
});
