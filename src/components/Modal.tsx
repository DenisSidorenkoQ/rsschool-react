import React, { Dispatch, SetStateAction } from 'react';
import './Modal.css';
import { UserInfo } from '../model/UserState';

interface Props {
  modalIsOpen: Dispatch<SetStateAction<boolean>>;
  user: UserInfo;
}

export const Modal = (props: Props) => {
  const { user } = props;
  return (
    <div className="overlay" onClick={(e) => props.modalIsOpen(false)}>
      <div className="modalBackground">
        <div className="modalContainer" onClick={(e) => e.stopPropagation()}>
          <div className="titleCloseBtn">
            <button onClick={() => props.modalIsOpen(false)}> X </button>
          </div>
          <div className="title">
            <h1>{user.login}</h1>
            <h2>{user.id}</h2>
          </div>
          <div className="body">
            <a
              href={user.html_url}
              className="nav-link d-inline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Profile
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
