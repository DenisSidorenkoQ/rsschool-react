import React from 'react';
import './Form.css';

export class Form extends React.Component<never> {
  nameInput = React.createRef<HTMLInputElement>();
  dateInput = React.createRef<HTMLInputElement>();
  countrySelect = React.createRef<HTMLSelectElement>();
  imgInput = React.createRef<HTMLInputElement>();
  sexInput = React.createRef<HTMLInputElement>();
  dataConfirmationInput = React.createRef<HTMLInputElement>();

  handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    console.log(this.imgInput.current?.files);
  };

  render() {
    return (
      <form id="form" onSubmit={this.handleSubmit}>
        <div>
          <label>
            Name:
            <input type="text" ref={this.nameInput} />
          </label>
        </div>
        <div style={{ paddingTop: '1em' }}>
          <label>
            Birthday:
            <input type="date" ref={this.dateInput} />
          </label>
        </div>
        <div style={{ paddingTop: '1em' }}>
          <label>
            Country:
            <select name="country" id="country" ref={this.countrySelect} defaultValue="Belarus">
              <option value="Belarus">Belarus</option>
              <option value="Ukraine">Ukraine</option>
              <option value="Poland">Poland</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            Profile image:
            <input
              type="file"
              id="avatar"
              name="avatar"
              ref={this.imgInput}
              accept="image/png, image/jpeg"
            />
          </label>
        </div>
        <div style={{ paddingTop: '1em' }}>
          <div>
            <label>Male/Female</label>
          </div>
          <label className="switch">
            <input type="checkbox" ref={this.sexInput} />
            <span className="slider"></span>
          </label>
        </div>
        <div style={{ paddingTop: '1em' }}>
          <label>
            <input type="checkbox" ref={this.dataConfirmationInput} />I consent to my personal data
          </label>
        </div>
        <button type="submit" value="Submit">
          Submit
        </button>
      </form>
    );
  }
}
