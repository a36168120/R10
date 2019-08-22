import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Schedule from './Schedule';
import {Query} from 'react-apollo';
import {gql} from 'apollo-boost';
// import console = require('console');

const GET_SESSION = gql`
  query {
    allSessions {
      id
      description
      location
      startTime
      title
      speaker {
        id
        bio
        image
        name
        url
      }
    }
  }
`;

class ScheduleContainer extends Component {
  static navigationOptions = {
    title: 'Schedule',
  };

  render() {
    return (
      <Query query={GET_SESSION}>
        {({loading, error, data}) => {
          if (loading) return <Text>Loading...</Text>;
          if (error) return <Text>Error!</Text>;
          // console.log(data.allSessions);
          return (
            <Schedule
              session={data.allSessions}
              navigation={this.props.navigation}
            />
          );
        }}
      </Query>
    );
  }
}

export default ScheduleContainer;
