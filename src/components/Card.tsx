import React from 'react';

type Props = {
  img: string;
  name: string;
  job: string;
};

export class Card extends React.Component<Props> {
  render() {
    const { img, name, job } = this.props;
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
}
