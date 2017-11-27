import gql from 'graphql-tag';

export const searchFoodByName = gql`
  query SearchPostByName($name: String!) {
    getFoodItems(name: $name) {
      name
      subitems {
        name
      }
      image
      price
    }
  }
`;

export const something = null;
