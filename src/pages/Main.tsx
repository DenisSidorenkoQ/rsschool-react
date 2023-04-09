import React, { useEffect } from 'react';
import './Main.css';
import { Header } from './Header';
import { Card } from '../components/Card';
import userService from '../service/GithubUserService';
import { ResponseSearchUsers } from '../model/UserState';
import { Modal } from '../components/Modal';

const LOCAL_STORAGE_VALUE_NAME = 'SAVED_VALUE';

export const Main = () => {
  const [userList, setUserList] = React.useState<ResponseSearchUsers>();
  const [inputLogin, setInputLogin] = React.useState(
    localStorage.getItem(LOCAL_STORAGE_VALUE_NAME) || 'Denis'
  );
  const [modalIsOpen, setModalIsOpen] = React.useState(false);

  useEffect(() => {
    userService.findUsers(inputLogin).then((response) => setUserList(response));
  }, []);

  useEffect(() => {
    return function () {
      localStorage.setItem(LOCAL_STORAGE_VALUE_NAME, inputLogin);
    };
  }, [inputLogin]);

  const handleChangeText = (event: { target: { value: string } }) => {
    setInputLogin(event.target.value);
  };

  const handleKeyDown = async (event: { key: string }) => {
    if (event.key === 'Enter') {
      await userService.findUsers(inputLogin).then((response) => setUserList(response));
    }
  };

  const handleOnClick = async () => {
    setModalIsOpen(true);
  };

  return (
    <>
      {modalIsOpen && <Modal modalIsOpen={setModalIsOpen} />}
      <Header />
      <h1>Main</h1>
      <div className="box">
        <input
          className="search-bar"
          type="text"
          placeholder="Input text"
          value={inputLogin}
          onKeyDown={handleKeyDown}
          onChange={handleChangeText}
        />
      </div>
      <div>
        <div className="box">
          <div className="gridContainer">
            {userList?.items.map((user) => {
              return (
                <div key={user.id} className="gridElement" onClick={handleOnClick}>
                  <Card key={user.id} id={user.id} name={user.login} img={user.avatar_url} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
