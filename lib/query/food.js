import gql from 'graphql-tag';

export const searchFoodByName = gql`
  query SearchFoodByName($name: String!) {
    getFoodItems(name: $name) {
      name
      _id
    }
  }
`;

export const getFoodById = gql`
  query getFoodItemsById($id: String!) {
    getFoodItemById(id: $id) {
      name
      price
      image
      description
    }
  }
`;

export const getHotFoodItems = gql`
  query getHotFoodItems {
    getHotFoodItems {
      _id
      name
      image
      price
    }
  }
`;
