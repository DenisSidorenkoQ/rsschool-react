import React, { useEffect } from 'react';
import './SearchBar.css';

const LOCAL_STORAGE_VALUE_NAME = 'SAVED_VALUE';

export function SearchBar() {
  const [inputText, setInputText] = React.useState(
    localStorage.getItem(LOCAL_STORAGE_VALUE_NAME) || ''
  );

  useEffect(() => {
    return function () {
      localStorage.setItem(LOCAL_STORAGE_VALUE_NAME, inputText);
    };
  }, [inputText]);

  const handleChangeText = (event: { target: { value: string } }) => {
    setInputText(event.target.value);
    console.log(inputText);
  };

  return (
    <div className="box">
      <input
        className="search-bar"
        type="text"
        placeholder="Input text"
        value={inputText}
        onChange={handleChangeText}
      />
    </div>
  );
}
