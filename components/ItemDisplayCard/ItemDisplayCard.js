import React from 'react';
import Link from 'next/link';
import Card from '../Card';
import { PillButton } from '../Button';

export default ({
  name, thumb, price, id,
}) => (
  <Card flexRes>
    <Link href={`/item?id=${id}`} as={`/item/${id}`} prefetch>
      <div className="anchor">
        <h3>{name}</h3>
        <img src={`http://192.168.43.128:8080${thumb}`} alt="aloo" />
      </div>
    </Link>
    {/* prettier-ignore */}
    <div className="section__pricing">
      <span>&#8377;{price}</span> <span className="discount">&#8377;{parseInt((125 * price) / 100, 10)}</span>
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
        .anchor {
          cursor: pointer;
        }
      `}
    </style>
  </Card>
);
