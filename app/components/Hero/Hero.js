import React, { Component } from 'react';

export default class Hero extends Component {
  render() {
    return (
      <div className="hero-container">
        <div className="hero-text hero-text__large">CorperateTiffin'</div>
        <div className="hero-text hero-text__small">
          The Best Way to get Lunch
        </div>
        <style jsx>
          {`
            .hero-container {
              display: flex;
              align-items: center;
              justify-content: center;
              margin-top: 3rem;
              margin-bottom: 3rem;
              padding-top: 5rem;
              padding-bottom: 5rem;
              background-color: red;
              flex-direction: column;
            }
            .hero-text {
              color: white
              font-family: 'Roboto Mono for Powerline';
            }
            .hero-text__large{
              font-size: 5rem;              
            }
            .hero-text__small{
              font-size: 2rem;
              font-family: sans-serif;
            }
          `}
        </style>
      </div>
    );
  }
}
