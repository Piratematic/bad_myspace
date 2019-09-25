import React from 'react';
import { Link, } from 'react-router-dom';
import { Header, } from 'semantic-ui-react';

const NoMatch = () => (
  <Header as="h3" textAlign="center">
    Nothing to see here I guess
    <Link to="/">Home</Link>
  </Header>
)

export default NoMatch;