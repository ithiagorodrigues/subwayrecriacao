import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Promoções da Semana!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
              path='/cardapio'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
              path='/cardapio'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
              path='/cardapio'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
              path='/cardapio'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
              path='/cardapio'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
