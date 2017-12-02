import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import Layout from '../components/Layout';
import { searchFoodByName } from '../lib/query/food';
import withData from '../lib/withData';

class Test extends Component {
  render() {
    return (
      <Layout>
        {this.props.data.getFoodItems &&
          this.props.data.getFoodItems.map(item => <p>{item.name}</p>)}
      </Layout>
    );
  }
}

export default compose(
  withData,
  graphql(searchFoodByName, {
    options: {
      variables: {
        name: 'ke',
      },
    },
  }),
)(Test);
