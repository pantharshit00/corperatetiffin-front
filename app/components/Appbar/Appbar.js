import React, { Component } from 'react';
import Link from 'next/link';

export default class Appbar extends Component {
  render() {
    return (
      <div>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/login">
          <a>Login</a>
        </Link>
        <style jsx>
          {`
            a {
              text-decoration: none;
              padding: 0.5rem;
            }
          `}
        </style>
      </div>
    );
  }
}
