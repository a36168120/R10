import React, {Component} from 'react';
import About from './About';
import {Query} from 'react-apollo';
import {gql} from 'apollo-boost';
import {Text} from 'react-native';

const GET_CONDUCT = gql`
  query {
    allConducts(orderBy: order_ASC) {
      id
      title
      description
    }
  }
`;

class AboutContainer extends Component {
  static navigationOptions = {
    title: 'About',
  };

  render() {
    return (
      <Query query={GET_CONDUCT}>
        {({loading, error, data}) => {
          if (loading) return <Text>Loading...</Text>;
          if (error) return <Text>Error!</Text>;
          return <About conduct={data} />;
        }}
      </Query>
    );
  }
}

export default AboutContainer;
