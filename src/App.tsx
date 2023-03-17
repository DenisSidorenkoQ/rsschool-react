import './App.css';
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AboutUs } from './pages/AboutUs';
import { Error } from './pages/Error';
import { Main } from './pages/Main';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path={'/error'} element={<Error />} />
        <Route path={'/about-us'} element={<AboutUs />} />
        <Route path={'/main'} element={<Main />} />
        <Route path={'*'} element={<Navigate to="/error" replace />} />
      </Routes>
    </div>
  );
};

export default App;
