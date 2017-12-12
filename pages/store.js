import React, { Component } from 'react';
import Layout, { ListView } from '../components/Layout';
import withData from '../lib/withData';

class Store extends Component {
  render() {
    const appbarColor = `
    background: #7b4397;
    background: -webkit-linear-gradient(to right, #dc2430, #7b4397); 
    background: linear-gradient(to right, #dc2430, #7b4397); 
    `;
    return (
      <Layout appbarColor={appbarColor} margin>
        <ListView />
      </Layout>
    );
  }
}

export default withData(Store);
