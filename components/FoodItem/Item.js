import React from 'react';
import Card from '../Card';
import Button from '../Button';

export default ({ item: { name, image, description } }) => (
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
          {/* eslint-disable react/no-danger */}
          <div dangerouslySetInnerHTML={{ __html: description }} />
          <div className="section section__btn">
            <Button block text="Add To Cart" flex={1} />
            <Button block text="Buy Now" flex={1} />
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
      `}
    </style>
  </div>
);
