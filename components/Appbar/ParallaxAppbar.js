import React, { Component } from 'react';
import Link from 'next/link';

export default class ParallaxAppbar extends Component {
  componentDidMount() {
    const nav = document.querySelector('#parallaxNav');
    function toggleNavBg() {
      if (window.scrollY >= nav.offsetHeight) {
        nav.classList.remove('lightSpeedIn');
        nav.classList.add('slideInDown');
        nav.classList.add('changeBg');
      } else {
        nav.classList.remove('slideInDown');
        nav.classList.remove('changeBg');
        nav.classList.add('lightSpeedIn');
      }
    }
    window.addEventListener('scroll', toggleNavBg);
  }

  render() {
    return (
      <div id="parallaxNav">
        <Link prefetch href="/">
          <a>Home</a>
        </Link>
        <Link prefetch href="/login">
          <a>Login</a>
        </Link>
        <style jsx>
          {`
            a {
              text-decoration: none;
              padding: 0.5rem;
              color: white;
            }
            div {
              animation-duration: 1s;
              animation-fill-mode: both;
              padding: 1rem 0.3rem 1rem 0.3rem;
              position: absolute;
              top: 0;
              min-width: 100%;
              background: transparent;
            }
            .changeBg {
              background: #7b4397;
              background: -webkit-linear-gradient(to right, #dc2430, #7b4397);
              background: linear-gradient(to right, #dc2430, #7b4397);
              position: fixed;
              top: 0;
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
          `}
        </style>
      </div>
    );
  }
}
