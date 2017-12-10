import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import Router from 'next/router';
import Layout from '../components/Layout';
import Card from '../components/Card';
import { Input, InputSubmit } from '../components/Input';
import withData from '../lib/withData';
import Flex from '../components/FlexUtils';
import { RegisterMutation } from '../lib/query/auth';

class Register extends Component {
  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleFormSubmit = async (e) => {
    e.preventDefault();
    const {
      name, email, phn, password,
    } = this.state;
    const response = await this.props.mutate({
      variables: {
        name,
        email,
        phn,
        password,
      },
    });
    console.log(response);
    const { ok } = response.data.createUser;
    if (ok) {
      Router.push('/login');
    }
  };
  render() {
    const appbarColor = `
    background: #7b4397;
    background: -webkit-linear-gradient(to right, #dc2430, #7b4397); 
    background: linear-gradient(to right, #dc2430, #7b4397); 
    `;
    return (
      <Layout
        title="Register | CorperateTiffin"
        appbarColor={appbarColor}
        margin
      >
        <Flex dir="column" center>
          <Card css="min-width: 18rem" title="Register">
            <form onSubmit={this.handleFormSubmit}>
              <Input
                onChange={this.handleInputChange}
                type="text"
                name="name"
                placeholder="Enter your name"
                required
              />
              <Input
                onChange={this.handleInputChange}
                type="email"
                name="email"
                placeholder="Enter your email"
                required
              />
              <Input
                onChange={this.handleInputChange}
                type="tel"
                name="phn"
                placeholder="Enter your phone no"
                required
              />
              <Input
                onChange={this.handleInputChange}
                type="password"
                name="password"
                placeholder="Enter your Passowrd"
                required
              />
              <Input
                onChange={this.handleInputChange}
                type="password"
                name="passCnf"
                placeholder="Confirm your password"
                required
              />
              <InputSubmit value="SUBMIT" />
            </form>
          </Card>
        </Flex>
      </Layout>
    );
  }
}

export default compose(withData, graphql(RegisterMutation))(Register);
