import React, { Component } from 'react';
import Layout, { ListView } from '../components/Layout';
import withData from '../lib/withData';

class Store extends Component {
  static getInitialProps = ({ query }) => ({ page: query.page });
  render() {
    const appbarColor = `
    background: #7b4397;
    background: -webkit-linear-gradient(to right, #dc2430, #7b4397); 
    background: linear-gradient(to right, #dc2430, #7b4397); 
    `;
    return (
      <Layout title="Store | CorperateTiffin" appbarColor={appbarColor} margin>
        <ListView page={this.props.page} />
      </Layout>
    );
  }
}

export default withData(Store);
