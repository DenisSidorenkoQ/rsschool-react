import React, { Dispatch, SetStateAction } from 'react';
import './Modal.css';

interface Props {
  modalIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const Modal = (props: Props) => {
  return (
    <div className="overlay">
      <div className="modalBackground" onClick={() => props.modalIsOpen(false)}>
        <div className="modalContainer">
          <div className="titleCloseBtn">
            <button onClick={() => props.modalIsOpen(false)}> X </button>
          </div>
          <div className="title">
            <h1>Info</h1>
          </div>
          <div className="body"></div>
        </div>
      </div>
    </div>
  );
};
