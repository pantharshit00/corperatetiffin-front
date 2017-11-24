import React, { Component } from 'react';

export default class Hero extends Component {
  constructor() {
    super();
    this.state = {
      heroActive: false,
    };
    this.enlargeText = this.enlargeText.bind(this);
    this.shrinkText = this.shrinkText.bind(this);
  }
  enlargeText() {
    this.setState({
      heroActive: true,
    });
  }

  shrinkText() {
    this.setState({
      heroActive: false,
    });
  }
  render() {
    return (
      <div
        className="hero-container"
        onMouseEnter={this.enlargeText}
        onMouseLeave={this.shrinkText}
      >
        <div
          className={`hero-text hero-text__large ${this.state.heroActive
            ? 'hero-text__large--active'
            : ''}`}
        >
          CorperateTiffin{"'"}
        </div>
        <div className="hero-text hero-text__small">The best way to get Lunch</div>
        {/* prettier-ignore */}
        <style jsx>{` 
            .hero-container {
              display: flex;
              align-items: center;
              justify-content: center;
              margin-top: 0rem;
              margin-bottom: 3rem;
              padding-top: 7rem;
              padding-bottom: 7rem;
              background: url('https://images.unsplash.com/photo-1453831362806-3d5577f014a4?auto=format&fit=crop&w=1920&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D');
              background-attachment: fixed;
              flex-direction: column;
              background-size: cover;
            }
            .hero-text {
              color: white;
              background: rgba(0,0,0,0.225);
              margin-top: 0.2rem;
            }
            .hero-text__large {
              font-size: 4rem;
              font-family: 'Indie Flower', sans-serif;
              transition: all 0.4s ease-out;
              cursor:cell;
            }
            .hero-text__large--active {
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
