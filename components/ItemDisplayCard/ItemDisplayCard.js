import React from 'react';
import Card from '../Card';
import { PillButton } from '../Button';

export default () => (
  <Card flexRes>
    <h3>Aloo ki sabzi</h3>
    <img src="http://localhost:8080/static/img/aloo.jpg" alt="aloo" />
    <div className="section__pricing">
      <span>&#8377;40</span> <span className="discount">&#8377;50</span>
    </div>
    <PillButton text="Buy now" />
    <PillButton text="Add to Cart" />
    <style jsx>
      {`
        img {
          max-height: 12rem;
          width: 100%;
        }
        @media all and (max-width: 560px) {
          img {
            max-height: 20rem;
          }
        }
        .discount {
          font-family: 'panama', sans-serif;
          font-size: 1.5rem;
          text-decoration: line-through;
          padding-top: 0.375rem;
          margin-left: 0.4rem;
          color: grey;
        }
        .section__pricing {
          flex: 1;
          margin-top: 0.5rem;
          margin-left: 0.5rem;
          font-size: 2rem;
          font-family: 'panama', sans-serif;
        }
      `}
    </style>
  </Card>
);
