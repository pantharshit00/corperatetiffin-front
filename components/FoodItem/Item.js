import React from 'react';
import Card from '../Card';
import Button from '../Button';

export default ({
  item: {
    name, image, description, price,
  },
}) => (
  <div>
    <Card>
      <div className="section">
        <div className="section__child section__child--small">
          <img
            className="section__image"
            src={`http://localhost:8080${image[0]}`}
            alt={name}
          />
        </div>
        <div className="section__child section__child--large">
          <h1>{name}</h1>
          {/* prettier-ignore */}
          <div className="section section__pricing">
            <span>&#8377;{price}</span> <span className="discount">&#8377;{parseInt((125 * price) / 100, 10)}</span>
          </div>
          {/* eslint-disable react/no-danger */}
          <div dangerouslySetInnerHTML={{ __html: description }} />
          <div className="section section__btn">
            <Button block text="Buy Now" flex={1} />
            <Button block text="Add To Cart" flex={1} />
          </div>
        </div>
      </div>
    </Card>
    <style jsx>
      {`
        .section {
          display: flex;
        }
        .section__child {
          padding: 1rem;
        }
        .section__child--small {
          flex: 4;
        }
        .section__child--large {
          flex: 6;
        }
        .section__child--large > h1 {
          margin: 0;
        }
        .section__image {
          height: 100%;
          width: 100%;
          border-radius: 3px;
        }
        .section__pricing {
          flex: 1;
          margin-top: 0.5rem;
          font-size: 2rem;
          font-family: 'panama bold', sans-serif;
        }
        .discount {
          font-family: 'panama', sans-serif;
          font-size: 1.5rem;
          text-decoration: line-through;
          padding-top: 0.375rem;
          margin-left: 0.6rem;
          color: grey;
        }
      `}
    </style>
  </div>
);
