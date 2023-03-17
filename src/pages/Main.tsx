import React from 'react';
import './Main.css';
import { Header } from './Header';

const LOCAL_STORAGE_VALUE_NAME = 'SAVED_VALUE';

class SearchBar extends React.Component {
  state = {
    inputText: localStorage.getItem(LOCAL_STORAGE_VALUE_NAME) || '',
  };

  componentWillUnmount() {
    localStorage.setItem(LOCAL_STORAGE_VALUE_NAME, this.state.inputText);
  }

  handleChangeText = (event: { target: { value: string } }) => {
    this.setState({ inputText: event.target.value });
  };

  render() {
    return (
      <input
        className="search-bar"
        type="text"
        placeholder="Input text"
        value={this.state.inputText}
        onChange={this.handleChangeText}
      />
    );
  }
}

class Cards extends React.Component {
  render() {
    return (
      <div className="box">
        <div className="gridContainer">
          <div className="gridElement">
            <div className="card">
              <img
                src="https://st4.depositphotos.com/9998432/22597/v/450/depositphotos_225976914-stock-illustration-person-gray-photo-placeholder-man.jpg"
                alt="Avatar"
              />
              <div className="container">
                <h4>
                  <b>Denis</b>
                </h4>
                <p>Software Engineer</p>
              </div>
            </div>
          </div>
          <div className="gridElement">
            <div className="card">
              <img
                src="https://st4.depositphotos.com/9998432/22670/v/450/depositphotos_226700578-stock-illustration-person-gray-photo-placeholder-man.jpg"
                alt="Avatar"
              />
              <div className="container">
                <h4>
                  <b>German</b>
                </h4>
                <p>UI/UX Designer</p>
              </div>
            </div>
          </div>
          <div className="gridElement">
            <div className="card">
              <img
                src="https://st4.depositphotos.com/9998432/26776/v/450/depositphotos_267763348-stock-illustration-person-gray-photo-placeholder-woman.jpg"
                alt="Avatar"
              />
              <div className="container">
                <h4>
                  <b>Olivia</b>
                </h4>
                <p>Engineer</p>
              </div>
            </div>
          </div>
          <div className="gridElement">
            <div className="card">
              <img
                src="https://st4.depositphotos.com/9998432/28036/v/450/depositphotos_280360720-stock-illustration-person-gray-photo-placeholder-woman.jpg"
                alt="Avatar"
              />
              <div className="container">
                <h4>
                  <b>Mia</b>
                </h4>
                <p>Engineer</p>
              </div>
            </div>
          </div>
          <div className="gridElement">
            <div className="card">
              <img
                src="https://st4.depositphotos.com/9998432/22597/v/450/depositphotos_225976914-stock-illustration-person-gray-photo-placeholder-man.jpg"
                alt="Avatar"
              />
              <div className="container">
                <h4>
                  <b>John</b>
                </h4>
                <p>UI/UX Designer</p>
              </div>
            </div>
          </div>
          <div className="gridElement">
            <div className="card">
              <img
                src="https://st4.depositphotos.com/9998432/22597/v/450/depositphotos_225976914-stock-illustration-person-gray-photo-placeholder-man.jpg"
                alt="Avatar"
              />
              <div className="container">
                <h4>
                  <b>Maxim</b>
                </h4>
                <p>Software Engineer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export const Main = () => {
  return (
    <>
      <Header />
      <h1>Main</h1>
      <div>
        <SearchBar />
        <Cards />
      </div>
    </>
  );
};
