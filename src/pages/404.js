import React from 'react';
import { Link } from 'gatsby'
import Layout from '../components/layout';

const NotFound = () => {
  return (
    <Layout>
      <h1> Page not Found</h1>
      <p><Link to='/'>Return to Home</Link></p>
    </Layout>
  );
};

export default NotFound;
