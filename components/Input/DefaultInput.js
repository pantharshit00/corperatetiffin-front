import React from 'react';

export const Input = ({
  onChange, type, name, placeholder,
}) => (
  <div>
    <input
      className="form__input"
      onChange={onChange}
      type={type}
      name={name}
      placeholder={placeholder}
    />
    <style jsx>
      {`
        .form__input {
          font-family: Raleway, sans-serif;
          font-size: 0.9rem;
          border: 0.8px solid #6b6969;
          padding: 0.4rem 0.7rem 0.4rem 0.7rem;
          border-radius: 0.2rem;
          margin-bottom: 1rem;
        }
      `}
    </style>
  </div>
);

export const InputSubmit = ({ value }) => (
  <div>
    <input className="form__submit" value={value} type="submit" />
    <style jsx>
      {`
        .form__submit {
          cursor: pointer;
          color: #fff;
          background: #7b4397;
          background: -webkit-linear-gradient(to right, #dc2430, #7b4397);
          background: linear-gradient(to right, #dc2430, #7b4397);
          border: 0;
          padding: 0.5rem;
          border-radius: 1rem;
          width: 100%;
          font-family: 'panama bold', sans-serif;
          font-size: 0.8rem;
          letter-spacing: 0.25rem;
        }
      `}
    </style>
  </div>
);
