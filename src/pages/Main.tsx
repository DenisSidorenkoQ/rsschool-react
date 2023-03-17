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
    console.log(this.state.inputText);
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

export const Main = () => {
  return (
    <>
      <Header />
      <h1>Main</h1>
      <div>
        <SearchBar />
      </div>
      <div className="gridContainer">
        <div className="gridElement">
          <div className="card">
            <img
              src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fsearch%3Fk%3Dplaceholder&psig=AOvVaw0hid6j9XgLHb3fLUCJ9b1S&ust=1679122008393000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCOj04Iev4v0CFQAAAAAdAAAAABAE"
              alt="Avatar"
              style={{ width: '100%' }}
            />
            <div className="container">
              <h4>
                <b>John Doe</b>
              </h4>
              <p>Architect & Engineer</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
