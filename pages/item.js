import React, { Component } from 'react';
import { compose, graphql } from 'react-apollo';
import Error from 'next/error';
import Layout from '../components/Layout';
import withData from '../lib/withData';
import { getFoodById } from '../lib/query/food';
import FoodItem from '../components/FoodItem';

class Item extends Component {
  static getInitialProps = ({ query }) => ({ query: query.id });
  render() {
    const appbarColor = `
    background: #7b4397;
    background: -webkit-linear-gradient(to right, #dc2430, #7b4397); 
    background: linear-gradient(to right, #dc2430, #7b4397); 
    `;
    const { data: { getFoodItemById, error } } = this.props;
    if (error) {
      // eslint-disable-next-line no-console
      console.error(error);
      return <Error statusCode={404} />;
    }
    if (!getFoodItemById) {
      return null;
    }
    return (
      <Layout
        title={
          getFoodItemById
            ? `${getFoodItemById.name} | CorperateTiffin`
            : 'Loading.. | CorperateTiffin'
        }
        margin
        appbarColor={appbarColor}
      >
        <FoodItem item={getFoodItemById} />
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
