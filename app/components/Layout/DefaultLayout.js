import Head from 'next/head';
import React from 'react';
import PropTypes from 'prop-types';
import Appbar from '../Appbar';

export default class DefaultLayout extends React.Component {
  render() {
    return (
      <div>
        <Head>
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <link
            href="https://fonts.googleapis.com/css?family=Indie+Flower|Raleway"
            rel="stylesheet"
          />
        </Head>
        <Appbar />
        {this.props.children}
        {/* prettier-ignore */}
        <style jsx global>{`
          html{
            font-size: 20px;
          }
            body {
              margin: 0;
              font-family: 'Raleway', sans-serif;
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
