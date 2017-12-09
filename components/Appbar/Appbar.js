import React, { Component } from 'react';
import Link from 'next/link';
import { ShoppingCart } from '../Icons';

export default class Appbar extends Component {
  render() {
    return (
      <div className="nav">
        <div className="nav__section--one">
          <Link prefetch href="/">
            <a>Home</a>
          </Link>
          <Link prefetch href="/login">
            <a>Login</a>
          </Link>
        </div>
        <div className="nav__section--two">
          <a className="title">CorperateTiffin</a>
        </div>
        <div className="nav__section--three">
          <ShoppingCart />
        </div>
        <style jsx>
          {`
            a {
              text-decoration: none;
              padding: 0.5rem;
              color: white;
              font-size: 1rem;
              font-family: 'panama', sans-serif;
            }
            .nav {
              padding: 0.2rem 0.3rem 0.2rem 0.3rem;
              position: fixed;
              top: 0;
              display: flex;
              min-width: 100%;
              ${this.props.background || ''};
            }
            .title {
              text-align: center;
              font-family: Indie Flower, sans-serif;
              font-size: 2rem;
              padding: 0;
            }
            .nav__section--one {
              flex: 1;
              display: flex;
              align-items: center;
            }
            .nav__section--two {
              flex: 2;
              display: flex;
              justify-content: center;
            }
            .nav__section--three {
              flex: 1;
              display: flex;
              justify-content: flex-end;
              margin-right: 2rem;
              align-items: center;
            }
          `}
        </style>
      </div>
    );
  }
}
