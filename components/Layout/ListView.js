/* eslint-disable jsx-a11y/accessible-emoji */
import React, { Component } from 'react';
import Link from 'next/link';
import Error from 'next/error';
import { graphql } from 'react-apollo';
import Card from '../Card';
import ListViewItem from '../ListViewItem';
import { foodItems } from '../../lib/query/food';

class ListView extends Component {
  render() {
    const { items, totalPages } = this.props.data.foodItems;
    const page = parseInt(this.props.page, 10);
    if (!items.length) {
      return <Error statusCode={404} />;
    }
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
        <div className="pagination">
          <div className="nav nav-left">
            {page > 1 && (
              <Link prefetch href={`/store?page=${page - 1}`}>
                <a>⬅️ Previous</a>
              </Link>
            )}
          </div>
          <div className="center">
            Page {page} of {totalPages}
          </div>
          <div className="nav nav-right">
            {page !== totalPages && (
              <Link prefetch href={`/store?page=${page + 1}`}>
                <a>Next ➡</a>
              </Link>
            )}️
          </div>
        </div>
        <style jsx>
          {`
            .center {
              display: flex;
              justify-content: center;
              flex: 2;
            }
            .pagination {
              display: flex;
            }
            .nav {
              flex: 1;
            }
            .nav-left {
              margin-left: 0.5rem;
            }
            .nav-right {
              display: flex;
              justify-content: flex-end;
              margin-right: 0.5rem;
            }
            a {
              color: #000000;
              text-decoration: none;
              transition: all 0.1s ease;
            }
            a:hover {
              opacity: 0.8;
            }
          `}
        </style>
      </Card>
    );
  }
}

export default graphql(foodItems, {
  options: ({ page }) => ({ variables: { page } }),
})(ListView);
