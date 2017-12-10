import React from 'react';
import { SocialIcons } from '../Icons';

export default () => (
  <div className="footer">
    <div className="footer-upper">
      <div className="logo-div">
        <h2>CorperateTiffin</h2>
      </div>
      <div className="icon-div">
        <SocialIcons.FBIcon />
        <SocialIcons.TWIcon />
        <SocialIcons.GPlusIcon />
        <SocialIcons.IGMIcon />
        <SocialIcons.LINIcon />
      </div>
    </div>
    <h6>
      Copyright &copy; {new Date().getFullYear()} Corperate Tiffin Pvt Ltd.
      Website by Harshit Pant
    </h6>
    <style jsx>
      {`
        .footer {
          background: #7b4397;
          background: -webkit-linear-gradient(to right, #dc2430, #7b4397);
          background: linear-gradient(to right, #dc2430, #7b4397);
          color: #ffffff;
          padding: 1rem;
          margin-top: 1rem;
        }
        .footer-upper {
          display: flex;
          padding: 0.5rem;
        }
        h2 {
          font-family: 'Indie Flower', sans-serif;
          margin: 0;
        }
        .logo-div {
          flex: 6;
        }
        .icon-div {
          flex: 3;
          display: flex;
          justify-content: space-evenly;
        }
        h6 {
          text-align: center;
          margin: 0.1rem;
        }
      `}
    </style>
  </div>
);
