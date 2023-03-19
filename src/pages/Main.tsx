import React from 'react';
import './Main.css';
import { Header } from './Header';
import { SearchBar } from '../components/SearchBar';
import { CardInfo } from '../model/CardState';
import cards from '../data/cards.json';
import { Card } from '../components/Card';

export const Main = () => {
  const cardList: CardInfo[] = cards;
  return (
    <>
      <Header />
      <h1>Main</h1>
      <div>
        <SearchBar />
        <div className="box">
          <div className="gridContainer">
            {cardList.map((card) => {
              return (
                <div key={card.id} className="gridElement">
                  <Card key={card.id} name={card.name} job={card.job} img={card.imgUrl} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
