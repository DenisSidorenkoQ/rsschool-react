import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AboutUs } from './pages/AboutUs';
import { Error404 } from './pages/Error404';
import { Main } from './pages/Main';
import { FormPage } from './pages/FormPage';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path={'/error'} element={<Error404 />} />
        <Route path={'/about-us'} element={<AboutUs />} />
        <Route path={'/main'} element={<Main />} />
        <Route path={'/form'} element={<FormPage />} />
        <Route path='*' element={<Error404 />} />
      </Routes>
    </div>
  );
};

export default App;
