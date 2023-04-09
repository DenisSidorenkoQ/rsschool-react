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
            <b>Id: {id}</b>
          </h4>
          <h5>
            <b>Login: {name}</b>
          </h5>
        </div>
      </div>
    </>
  );
}
