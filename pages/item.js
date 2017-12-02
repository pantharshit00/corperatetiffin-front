import React, { Component } from 'react';
import { compose, graphql } from 'react-apollo';
import Layout from '../components/Layout';
import withData from '../lib/withData';
import { getFoodById } from '../lib/query/food';

class Item extends Component {
  static getInitialProps = ({ query }) => ({ query: query.id });
  render() {
    const appbarColor = `
    background: #7b4397;
    background: -webkit-linear-gradient(to right, #dc2430, #7b4397); 
    background: linear-gradient(to right, #dc2430, #7b4397); 
    `;
    const { data: { getFoodItemById } } = this.props;
    return (
      <Layout margin appbarColor={appbarColor}>
        <h1>{this.props.query}</h1>
        <pre>{JSON.stringify(getFoodItemById, null, 2)}</pre>
      </Layout>
    );
  }
}

export default compose(
  withData,
  graphql(getFoodById, {
    options: ({ query }) => ({ variables: { id: query } }),
  }),
)(Item);
