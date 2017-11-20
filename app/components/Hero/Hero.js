import React, { Component } from 'react';

export default class Hero extends Component {
  render() {
    return (
      <div className="hero-container">
        <div className="hero-text hero-text__large">CorperateTiffin{'\''}</div>
        <div className="hero-text hero-text__small">The best way to get Lunch</div>
        {/* prettier-ignore */}
        <style jsx>{` 
            .hero-container {
              display: flex;
              align-items: center;
              justify-content: center;
              margin-top: 3rem;
              margin-bottom: 3rem;
              padding-top: 5rem;
              padding-bottom: 5rem;
              background-color: #c0392b;
              flex-direction: column;
            }
            .hero-text {
              color: white;
            }
            .hero-text__large {
              font-size: 4rem;
              font-family: 'Indie Flower', sans-serif;
              transition: all 0.4s ease-out;
              cursor:cell;
            }
            .hero-text__large:hover {
              font-size: 6rem;
            }
            .hero-text__small {
              font-size: 1.5rem;
            }
          `}
        </style>
      </div>
    );
  }
}
