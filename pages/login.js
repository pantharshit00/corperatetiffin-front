import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import LoginMutation from '../lib/query/login';
import { Input, InputSubmit } from '../components/Input';
import withData from '../lib/withData';
import Layout from '../components/Layout';
import Flex from '../components/FlexUtils';
import Card from '../components/Card';

class Login extends Component {
  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleFormSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    const response = await this.props.mutate({
      variables: {
        email,
        password,
      },
    });
    console.log(response);
  };

  render() {
    const appbarColor = `
    background: #7b4397;
    background: -webkit-linear-gradient(to right, #dc2430, #7b4397); 
    background: linear-gradient(to right, #dc2430, #7b4397); 
    `;
    return (
      <Layout margin appbarColor={appbarColor}>
        <Flex center>
          <Card title="Login">
            <form onSubmit={this.handleFormSubmit} className="form">
              <Input
                onChange={this.handleInputChange}
                type="text"
                name="email"
                placeholder="Email goes here...."
              />
              <Input
                onChange={this.handleInputChange}
                type="password"
                name="password"
                placeholder="Password goes here...."
              />
              <InputSubmit value="SUBMIT" />
            </form>
          </Card>
          <style jsx>
            {`
              .form {
                display: flex;
                flex-direction: column;
              }
            `}
          </style>
        </Flex>
      </Layout>
    );
  }
}

export default compose(withData, graphql(LoginMutation))(Login);
