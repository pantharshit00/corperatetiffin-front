import React, { Component } from 'react';
import { compose, graphql } from 'react-apollo';
import Layout, { CardGrid } from '../components/Layout';
import Hero from '../components/Hero';
import withData from '../lib/withData';
import { getHotFoodItems as query } from '../lib/query/food';

class Index extends Component {
  render() {
    const { data: { getHotFoodItems } } = this.props;
    return (
      <Layout parallax>
        <Hero />
        <h1 className="center">Hot items</h1>
        <CardGrid data={getHotFoodItems} />
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

export default compose(withData, graphql(query))(Index);
