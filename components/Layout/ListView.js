import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { foodItems } from '../../lib/query/food';

class ListView extends Component {
  render() {
    const items = this.props.data.foodItems;
    return (
      <div>
        <pre>{JSON.stringify(items, null, 2)}</pre>
      </div>
    );
  }
}

export default graphql(foodItems)(ListView);
