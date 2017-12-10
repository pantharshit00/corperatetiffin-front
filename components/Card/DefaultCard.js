import React from 'react';

export default ({
  title, children, css, flexRes,
}) => (
  <div className={`card ${flexRes ? 'card__res' : ''}`}>
    {title && (
      <div className="card__title">
        <h2>{title}</h2>
      </div>
    )}
    <div className="card__body">{children}</div>
    <style jsx>
      {`
        .card {
          ${css || ''};
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
        .card__res {
          max-width: 23%;
          margin: 0.4rem;
        }
        @media all and (max-width: 990px) {
          .card__res {
            max-width: 31%;
          }
        }
        @media all and (max-width: 724px) {
          .card__res {
            max-width: 47%;
          }
        }
        @media all and (max-width: 324px) {
          .card__res {
            max-width: 100%;
          }
        }
      `}
    </style>
  </div>
);
