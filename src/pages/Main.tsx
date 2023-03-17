import React from 'react';
import './Main.css';
import { Header } from './Header';
import { Card } from '../components/Card';
import { SearchBar } from '../components/SearchBar';

export const Main = () => {
  return (
    <>
      <Header />
      <h1>Main</h1>
      <div>
        <SearchBar />
        <div className="box">
          <div className="gridContainer">
            <div className="gridElement">
              <Card
                name="Denis"
                job="Software Engineer"
                img="https://st4.depositphotos.com/9998432/22597/v/450/depositphotos_225976914-stock-illustration-person-gray-photo-placeholder-man.jpg"
              />
            </div>
            <div className="gridElement">
              <Card
                name="German"
                job="UI/UX Designer"
                img="https://st4.depositphotos.com/9998432/22670/v/450/depositphotos_226700578-stock-illustration-person-gray-photo-placeholder-man.jpg"
              />
            </div>
            <div className="gridElement">
              <Card
                name="Olivia"
                job="Engineer"
                img="https://st4.depositphotos.com/9998432/26776/v/450/depositphotos_267763348-stock-illustration-person-gray-photo-placeholder-woman.jpg"
              />
            </div>
            <div className="gridElement">
              <Card
                name="Mia"
                job="Engineer"
                img="https://st4.depositphotos.com/9998432/28036/v/450/depositphotos_280360720-stock-illustration-person-gray-photo-placeholder-woman.jpg"
              />
            </div>
            <div className="gridElement">
              <Card
                name="John"
                job="UI/UX Designer"
                img="https://st4.depositphotos.com/9998432/22597/v/450/depositphotos_225976914-stock-illustration-person-gray-photo-placeholder-man.jpg"
              />
            </div>
            <div className="gridElement">
              <Card
                name="Maxim"
                job="Software Engineer"
                img="https://st4.depositphotos.com/9998432/22597/v/450/depositphotos_225976914-stock-illustration-person-gray-photo-placeholder-man.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
