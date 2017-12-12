/* eslint-disable react/no-danger */
import React from 'react';
import Button from '../Button';

export default ({
  name, image, price, description,
}) => (
  <React.Fragment>
    <div className="list">
      <div className="list__container list__image-container">
        <img src={`http://localhost:8080${image}`} alt={name} />
      </div>
      <div className="list__container list__description-container">
        <h1>{name}</h1>
        {/* prettier-ignore */}
        <div className="section__pricing">
          <span>&#8377;{price}</span> <span className="discount">&#8377;{parseInt((125 * price) / 100, 10)}</span>
        </div>
        <div dangerouslySetInnerHTML={{ __html: description }} />
        <div className="list">
          <Button block text="Buy Now" flex={1} />
          <Button block text="Add To Cart" flex={1} />
        </div>
      </div>
    </div>
    <hr />
    <style jsx>
      {`
        .list {
          display: flex;
        }
        .list__container {
          padding: 1rem;
        }
        .list__image-container {
          flex: 3;
        }
        .list__description-container {
          flex: 5;
        }
        img {
          max-height: 17rem;
          width: 100%;
        }
        hr {
          color: rgba(238, 238, 238, 0.29);
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
  </React.Fragment>
);
