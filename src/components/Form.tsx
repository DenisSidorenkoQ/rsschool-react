import React from 'react';
import './Form.css';

export class Form extends React.Component {
  state = {
    name: '',
    date: '',
    country: 'Belarus',
    dataConfirmation: false,
  };

  handleChangeName = (event: { target: { value: string } }) => {
    this.setState({ name: event.target.value });
  };

  handleChangeDate = (event: { target: { value: string } }) => {
    this.setState({ date: event.target.value });
  };

  handleChangeCountry = (event: { target: { value: string } }) => {
    this.setState({ country: event.target.value });
  };

  handleChangeDataConfirmation = () => {
    if (this.state.dataConfirmation) {
      this.setState({ dataConfirmation: false });
    } else {
      this.setState({ dataConfirmation: true });
    }
  };

  render() {
    return (
      <form id="form">
        <div>
          <label>
            Name:
            <input type="text" value={this.state.name} onChange={this.handleChangeName} />
          </label>
        </div>
        <div style={{ paddingTop: '1em' }}>
          <label>
            Birthday:
            <input type="date" value={this.state.date} onChange={this.handleChangeDate} />
          </label>
        </div>
        <div style={{ paddingTop: '1em' }}>
          <label>
            Country:
            <select
              name="country"
              id="country"
              value={this.state.country}
              onChange={this.handleChangeCountry}
            >
              <option value="Belarus">Belarus</option>
              <option value="Ukraine">Ukraine</option>
              <option value="Poland">Poland</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            Profile image:
            <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" />
          </label>
        </div>
        <div style={{ paddingTop: '1em' }}>
          <div>
            <label>Male/Female</label>
          </div>
          <label className="switch">
            <input type="checkbox" />
            <span className="slider"></span>
          </label>
        </div>
        <div style={{ paddingTop: '1em' }}>
          <label>
            <input type="checkbox" onClick={this.handleChangeDataConfirmation} />I consent to my
            personal data
          </label>
        </div>
        <button type="submit" form="form" value="Submit">
          Submit
        </button>
      </form>
    );
  }
}
