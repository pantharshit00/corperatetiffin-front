const gql = require('graphql-tag');

export const LoginMutation = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      ok
      token
      refreshToken
      errors {
        path
        message
      }
    }
  }
`;

export const RegisterMutation = gql`
  mutation RegisterMutaion(
    $name: String!
    $phn: Float!
    $email: String!
    $password: String!
  ) {
    createUser(email: $email, name: $name, phn: $phn, password: $password) {
      ok
      errors {
        path
        message
      }
      user {
        _id
      }
    }
  }
`;
