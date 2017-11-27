import React from 'react';

export default ({ title, children }) => (
  <div className="card">
    <div className="card__title">
      <h2>{title}</h2>
    </div>
    <div className="card__body">{children}</div>
    <style jsx>
      {`
        .card {
          display: flex;
          flex-direction: column;
          padding: 2px 0 2px 0;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        }
        .card:hover {
          box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
        }
        .card__body {
          padding: 0.3rem 0.5rem 0.3rem 0.5rem;
        }
        .card__title {
          color: #fff;
          background: #7b4397;
          background: -webkit-linear-gradient(to right, #dc2430, #7b4397);
          background: linear-gradient(to right, #dc2430, #7b4397);
          margin-bottom: 1rem;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        }
        .card__title > h2 {
          margin: 0.5rem;
          text-align: center;
        }
      `}
    </style>
  </div>
);
