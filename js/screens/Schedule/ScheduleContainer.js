import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Schedule from './Schedule';
import {Query} from 'react-apollo';
import {gql} from 'apollo-boost';
import FavesContext from '../../context/FavesContext';
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
            <FavesContext.Consumer>
              {value => (
                <Schedule
                  session={data.allSessions}
                  navigation={this.props.navigation}
                />
              )}
            </FavesContext.Consumer>
          );
        }}
      </Query>
    );
  }
}

export default ScheduleContainer;
