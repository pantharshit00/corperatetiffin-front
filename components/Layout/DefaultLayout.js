import Head from 'next/head';
import React from 'react';
import PropTypes from 'prop-types';
import Appbar from '../Appbar';

export default class DefaultLayout extends React.Component {
  render() {
    let marginFix = '';
    if (this.props.margin) {
      marginFix += 'margin__top';
    }
    return (
      <div>
        <Head>
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <link
            href="https://fonts.googleapis.com/css?family=Indie+Flower|Raleway"
            rel="stylesheet"
          />
        </Head>
        <Appbar
          margin={this.props.margin}
          background={this.props.appbarColor || 'background:transparent'}
        />
        <div className={marginFix}>{this.props.children}</div>
        <style jsx global>
          {`
            html {
              font-size: 20px;
            }
            body {
              margin: 0;
              padding: 0;
              font-family: 'Raleway', sans-serif;
            }
          `}
        </style>
        <style jsx>
          {`
            .margin__top {
              margin-top: 3rem;
            }
          `}
        </style>
      </div>
    );
  }
}

DefaultLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]).isRequired,
};
