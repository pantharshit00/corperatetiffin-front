import Head from 'next/head';
import React from 'react';
import PropTypes from 'prop-types';
import Appbar, { ParallaxAppbar } from '../Appbar';
// import { isLoggedIn, getUserInfoFromToken } from '../../lib/AuthService';

export default class DefaultLayout extends React.Component {
  // state = {
  //   user: null,
  // };
  // componentDidMount() {
  //   if (isLoggedIn()) {
  //     this.setState({
  //       user: getUserInfoFromToken().user,
  //     });
  //   }
  // }
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
        {this.props.parallax ? (
          <ParallaxAppbar margin={this.props.margin} />
        ) : (
          <Appbar
            margin={this.props.margin}
            background={this.props.appbarColor || 'background:transparent'}
          />
        )}
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
              overflow-x: hidden;
            }
            @media all and (max-width: 560px) {
              html {
                font-size: 12px;
              }
            }
            @font-face {
              font-family: 'panama bold';
              src: url('/static/fonts/panama-bold-webfont.woff2')
                  format('woff2'),
                url('/static/fonts/panama-bold-webfont.woff') format('woff');
              font-weight: normal;
              font-style: normal;
            }
            @font-face {
              font-family: 'panama';
              src: url('/static/fonts/panama-light.otf') format('opentype');
              font-weight: normal;
              font-style: normal;
            }
            h1,
            h2,
            h3,
            h4,
            h5,
            h6 {
              font-family: 'panama', sans-serif;
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
