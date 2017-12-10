import React, { Component } from 'react';
import Link from 'next/link';
import { ShoppingCart, Avatar } from '../Icons';

export default class ParallaxAppbar extends Component {
  componentDidMount() {
    const nav = document.querySelector('#parallaxNav');
    function toggleNavBg() {
      if (window.scrollY >= nav.offsetHeight) {
        nav.classList.remove('lightSpeedIn');
        nav.classList.add('slideInDown');
        nav.classList.add('changeBg');
        nav.classList.add('nav');
      } else {
        nav.classList.remove('slideInDown');
        nav.classList.remove('nav');
        nav.classList.remove('changeBg');
        nav.classList.add('lightSpeedIn');
      }
    }
    window.addEventListener('scroll', toggleNavBg);
  }

  render() {
    return (
      <div id="parallaxNav">
        <div className="white">
          <Link prefetch href="/">
            <a>Home</a>
          </Link>
          <Link prefetch href="/login">
            <a>Login</a>
          </Link>
          <Link prefetch href="/register">
            <a>Register</a>
          </Link>
        </div>
        <div className="nav__section--one">
          <Link prefetch href="/">
            <a>Home</a>
          </Link>
          <Link prefetch href="/login">
            <a>Login</a>
          </Link>
          <Link prefetch href="/register">
            <a>Register</a>
          </Link>
        </div>
        <div className="nav__section--two">
          <a className="title">CorperateTiffin</a>
        </div>
        <div className="nav__section--three">
          <Avatar style={{ marginRight: '0.8rem' }} />
          <ShoppingCart />
        </div>
        <style jsx>
          {`
            a {
              text-decoration: none;
              padding: 0.5rem;
              color: white;
              font-weight: bold;
              font-size: 1rem;
              font-family: 'panama', sans-serif;
            }
            div#parallaxNav {
              animation-duration: 1s;
              animation-fill-mode: both;
              padding: 1rem 0.3rem 1rem 0.3rem;
              position: absolute;
              top: 0;
              min-width: 100%;
              background: transparent;
              z-index: 1000;
            }
            .nav {
              padding: 0.2rem 0.3rem 0.2rem 0.3rem !important;
              position: fixed !important;
              top: 0 !important;
              display: flex !important;
              min-width: 100%;
              ${this.props.background || ''};
            }
            .changeBg {
              background: #7b4397;
              background: -webkit-linear-gradient(
                to right,
                #dc2430,
                #7b4397
              ) !important;
              background: linear-gradient(
                to right,
                #dc2430,
                #7b4397
              ) !important;
            }
            .changeBg > .nav__section--one,
            .changeBg > .nav__section--two,
            .changeBg > .nav__section--three {
              display: flex;
            }
            .changeBg > .white {
              display: none;
            }
            @keyframes slideInDown {
              from {
                transform: translate3d(0, -100%, 0);
                visibility: visible;
              }

              to {
                transform: translate3d(0, 0, 0);
              }
            }

            .slideInDown {
              animation-name: slideInDown;
            }
            @keyframes lightSpeedIn {
              from {
                transform: translate3d(-35%, 0, 0) skewX(-30deg);
                opacity: 0;
              }

              60% {
                transform: skewX(20deg);
                opacity: 1;
              }

              80% {
                transform: skewX(-5deg);
                opacity: 1;
              }

              to {
                transform: none;
                opacity: 1;
              }
            }

            .lightSpeedIn {
              animation-name: lightSpeedIn;
              animation-timing-function: ease-out;
            }
            .title {
              text-align: center;
              font-family: Indie Flower, sans-serif;
              font-size: 2rem;
              padding: 0;
            }
            .nav__section--two {
              display: none;
              flex: 2;
              justify-content: center;
            }
            .nav__section--three {
              display: none;
              flex: 1;
              justify-content: flex-end;
              margin-right: 2rem;
              align-items: center;
            }
            .nav__section--one {
              display: none;
              flex: 1;
              align-items: center;
            }
          `}
        </style>
      </div>
    );
  }
}
