import React, {useEffect, useState} from 'react';
import './Form.css';
import { FormCardInfo } from '../model/FormCardState';
import { FormCard } from './FormCard';
import {RootState, store} from "../store";
import {useDispatch, useSelector} from "react-redux";

const ERROR_FIELD_IS_EMPTY = 'Field is empty';
const ERROR_FIELD_CONSIST_FROM_TWO_WORDS = 'Field consist from two words';
const ERROR_DATA_NOT_CONFIRMED = 'Data not confirmed';
const ERROR_WRONG_DATE = 'Wrong date';

export function Form() {
  const dispatch = useDispatch();

  const nameInput = React.createRef<HTMLInputElement>();
  const dateInput = React.createRef<HTMLInputElement>();
  const countrySelect = React.createRef<HTMLSelectElement>();
  const imgInput = React.createRef<HTMLInputElement>();
  const sexInput = React.createRef<HTMLInputElement>();
  const dataConfirmationInput = React.createRef<HTMLInputElement>();

  const [nameErrorText, setNameErrorText] = useState('');
  const [dateErrorText, setDateErrorText] = useState('');
  const [dataConfirmationErrorText, setDataConfirmationErrorText] = useState('');
  const [dataConfirmation, setDataConfirmation] = useState(false);
  const [cardList, setCardList] = useState<FormCardInfo[]>([]);

  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [country, setCountry] = useState('Belarus');
  const [sex, setSex] = useState('M');
  const [img, setImg] = useState('');

  useEffect(() => {
    console.log("start");
    // setCardList(useSelector((state: RootState) => state.formCardList.formCards));
  }, []);

  const nameChange = (e: React.FormEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value);
    console.log(cardList);
  };

  const dateChange = (e: React.FormEvent<HTMLInputElement>) => {
    setDate(e.currentTarget.value);
  };

  const countryChange = (e: React.FormEvent<HTMLSelectElement>) => {
    setCountry(e.currentTarget.value);
  };

  const imgChange = (e: React.FormEvent<HTMLInputElement>) => {
    if (e.currentTarget.files?.length ?? 0 > 0) {
      const files = e.currentTarget.files;
      if (files) {
        setImg(URL.createObjectURL(files[0]));
      }
    }
  };

  const sexChange = (e: React.FormEvent<HTMLInputElement>) => {
    if (e.currentTarget.checked) {
      setSex('W');
    } else {
      setSex('M');
    }
  };

  const dataConfirmationChange = () => {
    setDataConfirmation(true);
  };

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    let validate = true;

    if (name.length < 1) {
      setNameErrorText(ERROR_FIELD_IS_EMPTY);
      validate = false;
    } else if (name.includes(' ')) {
      setNameErrorText(ERROR_FIELD_CONSIST_FROM_TWO_WORDS);
      validate = false;
    } else {
      setNameErrorText('');
    }

    const timestampDate = new Date(date).getTime();

    if (date.length < 1) {
      setDateErrorText(ERROR_FIELD_IS_EMPTY);
      validate = false;
    } else if (timestampDate >= Date.now()) {
      setDateErrorText(ERROR_WRONG_DATE);
      validate = false;
    } else {
      setDateErrorText('');
    }

    if (!dataConfirmation) {
      setDataConfirmationErrorText(ERROR_DATA_NOT_CONFIRMED);
      validate = false;
    } else {
      setDataConfirmationErrorText('');
    }

    if (validate) {
      cardList.push({
        country: country,
        date: date,
        img: img,
        name: name,
        sex: sex,
      });
      //
      // dispatch(setCards(cardList));

      if (
        nameInput.current &&
        imgInput.current &&
        dateInput.current &&
        countrySelect.current &&
        dataConfirmationInput.current
      ) {
        nameInput.current.value = '';
        imgInput.current.value = '';
        dateInput.current.value = '';
        countrySelect.current.value = 'Belarus';
        dataConfirmationInput.current.checked = false;
      }

      setName('');
      setImg('');
      setDate('');
      setCountry('Belarus');
      setDataConfirmation(false);
      console.log(cardList);
    }
  };

  return (
    <>
      <form id="form" onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input type="text" ref={nameInput} onChange={nameChange} />
            <span style={{ color: 'red' }}>{nameErrorText}</span>
          </label>
        </div>
        <div style={{ paddingTop: '1em' }}>
          <label>
            Birthday:
            <input type="date" ref={dateInput} onChange={dateChange} />
            <span style={{ color: 'red' }}>{dateErrorText}</span>
          </label>
        </div>
        <div style={{ paddingTop: '1em' }}>
          <label>
            Country:
            <select name="country" id="country" ref={countrySelect} onChange={countryChange}>
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
              onChange={imgChange}
              ref={imgInput}
              accept="image/png, image/jpeg"
            />
          </label>
        </div>
        <div style={{ paddingTop: '1em' }}>
          <div>
            <label>Male/Female</label>
          </div>
          <label className="switch">
            <input type="checkbox" ref={sexInput} onChange={sexChange} />
            <span className="slider"></span>
          </label>
        </div>
        <div style={{ paddingTop: '1em' }}>
          <label>
            <input type="radio" ref={dataConfirmationInput} onChange={dataConfirmationChange} />I
            consent to my personal data
            <span style={{ color: 'red' }}>{dataConfirmationErrorText}</span>
          </label>
        </div>
        <button type="submit" value="Submit">
          Submit
        </button>
      </form>
      <div className="gridContainer">
        {cardList.map((card) => {
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
