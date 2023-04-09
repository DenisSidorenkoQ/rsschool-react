import React, { useEffect } from 'react';
import './Main.css';
import { Header } from './Header';
import { Card } from '../components/Card';
import userService from '../service/GithubUserService';
import { ResponseSearchUsers, UserInfo } from '../model/UserState';
import { Modal } from '../components/Modal';
import { ProgressBar } from '../components/ProgressBar';

const LOCAL_STORAGE_VALUE_NAME = 'SAVED_VALUE';

export const Main = () => {
  const [userList, setUserList] = React.useState<ResponseSearchUsers>();
  const [inputLogin, setInputLogin] = React.useState(
    localStorage.getItem(LOCAL_STORAGE_VALUE_NAME) || 'Denis'
  );
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const [selectedUserId, setSelectedUserId] = React.useState(-1);
  const [selectedUser, setSelectedUser] = React.useState<UserInfo>();
  const [isComplete, setIsComplete] = React.useState(false);

  useEffect(() => {
    setIsComplete(false);
    userService.findUsers(inputLogin).then((response) => setUserList(response));
    setIsComplete(true);
  }, []);

  useEffect(() => {
    return function () {
      localStorage.setItem(LOCAL_STORAGE_VALUE_NAME, inputLogin);
    };
  }, [inputLogin]);

  useEffect(() => {
    userList?.items.forEach((element) => {
      if (element.id === selectedUserId) setSelectedUser(element);
    });
  }, [selectedUserId, userList?.items]);

  const handleChangeText = (event: { target: { value: string } }) => {
    setInputLogin(event.target.value);
  };

  const handleKeyDown = async (event: { key: string }) => {
    if (event.key === 'Enter') {
      await setIsComplete(false);
      await userService.findUsers(inputLogin).then((response) => setUserList(response));
      await setIsComplete(true);
    }
  };

  const handleOnClick = async (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setSelectedUserId(Number(e.currentTarget.id));
    setModalIsOpen(true);
  };

  return (
    <>
      {selectedUser && modalIsOpen && <Modal user={selectedUser} modalIsOpen={setModalIsOpen} />}
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
      <ProgressBar isComplete={isComplete} />
      <div>
        <div className="box">
          <div className="gridContainer">
            {userList?.items.map((user) => {
              return (
                <div
                  key={user.id}
                  id={user.id.toString()}
                  className="gridElement"
                  onClick={handleOnClick}
                >
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
