import React, { Component } from 'react';
import Link from 'next/link';

export default class Appbar extends Component {
  render() {
    return (
      <div>
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
              padding: 1rem 0.3rem 1rem 0.3rem;
              position: fixed;
              top: 0;
              min-width: 100%;
              ${this.props.background || ''};
            }
          `}
        </style>
      </div>
    );
  }
}
