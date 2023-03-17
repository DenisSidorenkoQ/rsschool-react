import React from 'react';

export class Card extends React.Component {
  render() {
    const { img, name, job } = this.props;
    return (
      <div className="card">
        <img src={img} alt="Avatar" />
        <div className="container">
          <h4>
            <b>{name}</b>
          </h4>
          <p>{job}</p>
        </div>
      </div>
    );
  }
}
