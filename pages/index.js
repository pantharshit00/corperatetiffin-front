import React, { Component } from 'react';
import Layout, { CardGrid } from '../components/Layout';
import Hero from '../components/Hero';

export default class Index extends Component {
  render() {
    return (
      <Layout parallax>
        <Hero />
        <h1 className="center">Hot items</h1>
        <CardGrid />
        <style jsx>
          {`
            .center {
              text-align: center;
              font-family: Indie flower, sans-serif;
            }
          `}
        </style>
      </Layout>
    );
  }
}
