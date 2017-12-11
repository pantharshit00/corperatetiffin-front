/* eslint-disable no-underscore-dangle */
import React, { Component } from 'react';
import { withApollo } from 'react-apollo';
import Router from 'next/router';
import { AutoComplete } from '../Input';
import { searchFoodByName } from '../../lib/query/food';

class SearchBar extends Component {
  state = {
    searchItems: [],
  };

  makeSearchQuery = async (val) => {
    if (val === '' || !val) return;
    const res = await this.props.client.query({
      query: searchFoodByName,
      variables: { name: val },
    });
    this.setState({
      searchItems: res.data.getFoodItems,
    });
  };

  changeRoute = (id) => {
    if (!id) return;
    Router.push(`/item?id=${id}`, `/item/${id}`);
  };

  render() {
    return (
      <div className="nav lightSpeedIn">
        <AutoComplete
          items={this.state.searchItems}
          onChange={(selectedItem) => {
            this.changeRoute(this.state.searchItems.filter(x => x.name === selectedItem)[0]._id);
          }}
          fetchMore={this.makeSearchQuery}
          changeRoute={this.changeRoute}
        />
        <style jsx>
          {`
            .nav {
              animation-duration: 0.5s;
              animation-fill-mode: both;
              min-height: 2.95rem;
              align-items: center;
              padding: 0.2rem 0.3rem 0.2rem 0.3rem;
              position: fixed;
              top: 0;
              display: flex;
              min-width: 100%;
              background: #7b4397;
              background: -webkit-linear-gradient(to right, #dc2430, #7b4397);
              background: linear-gradient(to right, #dc2430, #7b4397);
              justify-content: center;
            }
            @keyframes lightSpeedIn {
              from {
                transform: translate3d(-35%, 0, 0) skewX(-30deg);
                opacity: 0;
              }

              60% {
                transform: skewX(20deg);
                opacity: 1;
              }

              80% {
                transform: skewX(-5deg);
                opacity: 1;
              }

              to {
                transform: none;
                opacity: 1;
              }
            }

            .lightSpeedIn {
              animation-name: lightSpeedIn;
              animation-timing-function: ease-out;
            }
          `}
        </style>
      </div>
    );
  }
}

export default withApollo(SearchBar);
