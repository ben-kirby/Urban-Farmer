import React, { Component } from 'react';
import { prop}
import { Container, Header, Left, Body, Right, Title } from 'native-base';
export default class HeaderTitleExample extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left/>
          <Body>
            <Title>Header {this.props.navigation.getParam('header')}</Title>
          </Body>
          <Right />
        </Header>
      </Container>
    );
  }
}
