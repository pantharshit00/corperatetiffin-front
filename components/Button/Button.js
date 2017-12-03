import React from 'react';

export default ({ text, flex, block }) => (
  <div>
    <button>{text}</button>
    <style jsx>
      {`
        button {
          background: #7b4397;
          background: -webkit-linear-gradient(to right, #dc2430, #7b4397);
          background: linear-gradient(to right, #dc2430, #7b4397);
          color: white;
          border: none;
          font-family: Raleway, sans-serif;
          padding: 1rem;
          width: 100%;
        }
        div {
          ${block ? 'margin: 0.5rem 1rem 0.5rem 1rem' : 'margin: 0.5rem'};
          ${flex && `flex:${flex}`};
        }
      `}
    </style>
  </div>
);
