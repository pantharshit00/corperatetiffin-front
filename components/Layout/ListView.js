import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import Card from '../Card';
import ListViewItem from '../ListViewItem';
import { foodItems } from '../../lib/query/food';

class ListView extends Component {
  render() {
    const items = this.props.data.foodItems;
    return (
      <Card>
        {items.map(i => (
          <ListViewItem
            price={i.price}
            image={i.image[0]}
            description={i.description}
            key={i._id}
            name={i.name}
          />
        ))}
      </Card>
    );
  }
}

export default graphql(foodItems)(ListView);
