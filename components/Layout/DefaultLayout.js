import Head from 'next/head';
import React from 'react';
import NProgress from 'nprogress';
import Router from 'next/router';
import PropTypes from 'prop-types';
import Appbar, { ParallaxAppbar } from '../Appbar';
import Footer from '../Footer';

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

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
        <Footer />
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

            /* Make clicks pass-through */
            #nprogress {
              pointer-events: none;
            }

            #nprogress .bar {
              background: teal;

              position: fixed;
              z-index: 1031;
              top: 0;
              left: 0;

              width: 100%;
              height: 3.5px;
            }

            /* Fancy blur effect */
            #nprogress .peg {
              display: block;
              position: absolute;
              right: 0px;
              width: 100px;
              height: 100%;
              box-shadow: 0 0 10px #29d, 0 0 5px #29d;
              opacity: 1;

              -webkit-transform: rotate(3deg) translate(0px, -4px);
              -ms-transform: rotate(3deg) translate(0px, -4px);
              transform: rotate(3deg) translate(0px, -4px);
            }
            svg.icon {
              cursor: pointer;
              height: 2.5rem;
              width: 2.5rem;
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
