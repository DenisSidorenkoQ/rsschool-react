import React from 'react';
import './SearchBar.css';

const LOCAL_STORAGE_VALUE_NAME = 'SAVED_VALUE';

export class SearchBar extends React.Component {
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
      <div className="box">
        <input
          className="search-bar"
          type="text"
          placeholder="Input text"
          value={this.state.inputText}
          onChange={this.handleChangeText}
        />
      </div>
    );
  }
}
