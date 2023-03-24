import React from 'react';

type Props = {
  name: string;
  date: string;
  country: string;
  img: string;
};

export class FormCard extends React.Component<Props> {
  render() {
    const { name, date, country, img } = this.props;
    return (
      <>
        <div className="card">
          <img src={img} alt="Avatar" />
          <div className="container">
            <h4>
              <b>{name}</b>
            </h4>
            <p>{date}</p>
            <p>{country}</p>
          </div>
        </div>
      </>
    );
  }
}
