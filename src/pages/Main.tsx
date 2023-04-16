import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import './Main.css';
import { Header } from './Header';
import { Card } from '../components/Card';
import userService from '../service/GithubUserService';
import { ResponseSearchUsers, UserInfo } from '../model/UserState';
import { Modal } from '../components/Modal';
import { ProgressBar } from '../components/ProgressBar';
import {RootState, store} from "../store";
import {changeSearchText} from "../store/SearchBarSlice";
import {changeCardList} from "../store/CardListSlice";
import {useAppDispatch, useAppSelector} from "../hooks/redux";

const DEFAULT_LOGIN = 'Denis';

export const Main = () => {
  const dispatch = useAppDispatch();

  const [userList, setUserList] = React.useState<ResponseSearchUsers>(
      useAppSelector((state: RootState) => state.cardList.cardList)
  );
  const [inputLogin, setInputLogin] = React.useState(
      useAppSelector((state: RootState) => state.searchBar.searchText ) || DEFAULT_LOGIN
  );
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const [selectedUserId, setSelectedUserId] = React.useState(-1);
  const [selectedUser, setSelectedUser] = React.useState<UserInfo>();
  const [isComplete, setIsComplete] = React.useState(false);
  const [isCreate, setIsCreate] = React.useState(false);

  useEffect(() => {
    if (!isCreate) {
      setIsComplete(false);
      if (inputLogin === DEFAULT_LOGIN) {
        userService.findUsers(inputLogin).then((response) => setUserList(response));
      }
      setIsComplete(true);
      setIsCreate(true);
    }
    return function () {
      dispatch(changeSearchText(inputLogin));
    };
  }, [isCreate, inputLogin]);

  useEffect(() => {
    dispatch(changeCardList(userList));
  }, [userList])

  useEffect(() => {
    userList.items?.forEach((element) => {
      if (element.id === selectedUserId) setSelectedUser(element);
    });
  }, [selectedUserId, userList?.items]);

  const handleChangeText = async (event: { target: { value: string } }) => {
    await setInputLogin(event.target.value);
  };

  const handleKeyDown = async (event: { key: string }) => {
    if (event.key === 'Enter') {
      setIsComplete(false);
      await userService.findUsers(inputLogin).then((response) => setUserList(response));
      setIsComplete(true);
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
            {
              userList.items?.map((user: UserInfo) => {
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
              })
            }
          </div>
        </div>
      </div>
    </>
  );
};
