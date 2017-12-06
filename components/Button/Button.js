import React from 'react';

export default ({
  text, flex, block, style,
}) => (
  <div>
    <button style={style}>{text}</button>
    <style jsx>
      {`
        button {
          background: #7b4397;
          background: -webkit-linear-gradient(to right, #dc2430, #7b4397);
          background: linear-gradient(to right, #dc2430, #7b4397);
          color: white;
          border: none;
          font-family: panama bold, sans-serif;
          padding: 1rem;
          width: 100%;
          border-radius: 3rem;
          font-size: 0.75rem;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        button:hover {
          transform: rotate(1.7deg);
        }
        div {
          ${block ? 'margin: 0.5rem 1rem 0.5rem 1rem' : 'margin: 0.5rem'};
          ${flex && `flex:${flex}`};
        }
      `}
    </style>
  </div>
);
