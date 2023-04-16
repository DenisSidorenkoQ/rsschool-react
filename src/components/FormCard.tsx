import React from 'react';
import './FormCard.css';

type Props = {
  name: string;
  date: string;
  country: string;
  img: string;
  sex: string;
};

export function FormCard(props: Props) {
  const { name, date, country, img, sex } = props;
  return (
    <>
      <div className="card">
        <img src={img} alt="Avatar" />
        <div className="container">
          <h4>
            <b>Name: {name}</b>
          </h4>
          <p>Sex: {sex}</p>
          <p>Birthday: {date}</p>
          <p>Country: {country}</p>
        </div>
      </div>
    </>
  );
}
