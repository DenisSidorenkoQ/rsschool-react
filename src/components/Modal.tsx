import React, { Dispatch, SetStateAction } from 'react';
import './Modal.css';

interface Props {
  modalIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const Modal = (props: Props) => {
  return (
    <div className="overlay" onClick={(e) => props.modalIsOpen(false)}>
      <div className="modalBackground">
        <div className="modalContainer" onClick={(e) => e.stopPropagation()}>
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
