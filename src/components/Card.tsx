import React from 'react';

type Props = {
  img: string;
  name: string;
  id: number;
};

export function Card(props: Props) {
  const { img, name, id } = props;
  return (
    <>
      <div className="card">
        <img src={img} alt="Avatar" />
        <div className="container">
          <h4>
            <b>{id}</b>
          </h4>
          <h5>
            <b>{name}</b>
          </h5>
        </div>
      </div>
    </>
  );
}
