import React from 'react';
import './Form.css';
import { FormCardInfo } from '../model/FormCardState';
import { FormCard } from './FormCard';

const ERROR_FIELD_IS_EMPTY = 'Field is empty';
const ERROR_FIELD_CONSIST_FROM_TWO_WORDS = 'Field consist from two words';
const ERROR_DATA_NOT_CONFIRMED = 'Data not confirmed';
const ERROR_WRONG_DATE = 'Wrong date';

export class Form extends React.Component {
  nameInput = React.createRef<HTMLInputElement>();
  dateInput = React.createRef<HTMLInputElement>();
  countrySelect = React.createRef<HTMLSelectElement>();
  imgInput = React.createRef<HTMLInputElement>();
  sexInput = React.createRef<HTMLInputElement>();
  dataConfirmationInput = React.createRef<HTMLInputElement>();
  nameErrorText = '';
  dateErrorText = '';
  dataConfirmationErrorText = '';
  validate = true;
  cardList = Array<FormCardInfo>();

  state = {
    name: '',
    date: '',
    country: '',
    sex: 'M',
    img: '',
  };

  handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    this.validate = true;
    await this.setState({ name: this.nameInput.current?.value });
    await this.setState({ date: this.dateInput.current?.value });
    await this.setState({ country: this.countrySelect.current?.value });

    if (this.imgInput.current?.files?.length ?? 0 > 0) {
      await this.setState({
        img: URL.createObjectURL(this.imgInput.current?.files[0]),
      });
    }

    if (this.sexInput.current?.checked) {
      this.setState({ sex: 'W' });
    } else {
      this.setState({ sex: 'M' });
    }

    if (this.state.name.length < 1) {
      this.nameErrorText = ERROR_FIELD_IS_EMPTY;
      this.validate = false;
    } else if (this.state.name.includes(' ')) {
      this.nameErrorText = ERROR_FIELD_CONSIST_FROM_TWO_WORDS;
      this.validate = false;
    } else {
      this.nameErrorText = '';
    }

    const timestampDate = new Date(this.state.date).getTime();

    if (this.state.date.length < 1) {
      this.dateErrorText = ERROR_FIELD_IS_EMPTY;
      this.validate = false;
    } else if (timestampDate >= Date.now()) {
      this.dateErrorText = ERROR_WRONG_DATE;
    } else {
      this.dateErrorText = '';
    }

    if (!this.dataConfirmationInput.current?.checked) {
      this.dataConfirmationErrorText = ERROR_DATA_NOT_CONFIRMED;
      this.validate = false;
    } else {
      this.dataConfirmationErrorText = '';
    }

    if (this.validate) {
      this.cardList.push({
        country: this.state.country,
        date: this.state.date,
        img: this.state.img,
        name: this.state.name,
        sex: this.state.sex,
      });
    }
  };

  render() {
    return (
      <>
        <form id="form" onSubmit={this.handleSubmit}>
          <div>
            <label>
              Name:
              <input type="text" ref={this.nameInput} />
              <span style={{ color: 'red' }}>{this.nameErrorText}</span>
            </label>
          </div>
          <div style={{ paddingTop: '1em' }}>
            <label>
              Birthday:
              <input type="date" ref={this.dateInput} />
              <span style={{ color: 'red' }}>{this.dateErrorText}</span>
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
              <input type="checkbox" ref={this.dataConfirmationInput} />I consent to my personal
              data
              <span style={{ color: 'red' }}>{this.dataConfirmationErrorText}</span>
            </label>
          </div>
          <button type="submit" value="Submit">
            Submit
          </button>
        </form>
        <div className="gridContainer">
          {this.cardList.map((card) => {
            return (
              <div key={card.name} className="gridElement">
                <FormCard
                  name={card.name}
                  date={card.date}
                  country={card.country}
                  img={card.img}
                  sex={card.sex}
                />
              </div>
            );
          })}
        </div>
      </>
    );
  }
}
