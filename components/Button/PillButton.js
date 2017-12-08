import React from 'react';

export default ({ text }) => (
  <div>
    <button>{text}</button>
    <style jsx>
      {`
        button {
          padding: 0.5rem 1.5rem;
          font-size: 0.66rem;
          font-weight: 600;
          border-radius: 1000px;
          cursor: pointer;
          background: #fff;
          color: #7b4397;
          border: 1px solid #7b4397;
          font-family: Barlow, sans-serif;
          text-transform: uppercase;
          margin: 10px;
          -webkit-transition: all 0.15s ease-out;
          transition: all 0.15s ease-out;
        }
        button:hover {
          background: #7b4397;
          background: -webkit-linear-gradient(to right, #dc2430, #7b4397);
          background: linear-gradient(to right, #dc2430, #7b4397);
          color: #fff;
          -webkit-transition: all 0.2s ease-in;
          transition: all 0.2s ease-in;
        }
      `}
    </style>
  </div>
);
