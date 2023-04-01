import React from 'react';

type Props = {
  img: string;
  name: string;
  job: string;
};

export function Card(props: Props) {
  const { img, name, job } = props;
  return (
    <>
      <div className="card">
        <img src={img} alt="Avatar" />
        <div className="container">
          <h4>
            <b>{name}</b>
          </h4>
          <p>{job}</p>
        </div>
      </div>
    </>
  );
}
