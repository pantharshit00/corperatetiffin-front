const gql = require('graphql-tag');

const LoginMutation = gql`
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

export default LoginMutation;
