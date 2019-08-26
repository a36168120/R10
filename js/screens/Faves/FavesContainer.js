import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Query} from 'react-apollo';
import {gql} from 'apollo-boost';
import FavesContext from '../../context/FavesContext';
import Faves from './Faves';

const GET_SESSION_ITEMS = gql`
  query {
    allSessions {
      id
      title
      description
      location
      startTime
      speaker {
        id
        name
        bio
        image
      }
    }
  }
`;

class FavesContainer extends Component {
  static navigationOptions = {
    title: 'Faves',
  };

  render() {
    return (
      <FavesContext.Consumer>
        {({faveIds, removeFaveSession}) => (
          <Query query={GET_SESSION_ITEMS}>
            {({loading, error, data}) => {
              if (loading) return <Text>Loading...</Text>;
              if (error) return <Text>Error!</Text>;

              const faves = data.allSessions.filter(session =>
                faveIds.includes(session.id),
              );

              return (
                <View>
                  <Faves faves={faves} faveIds={faveIds} />
                </View>
              );
            }}
          </Query>
        )}
      </FavesContext.Consumer>
    );
  }
}

export default FavesContainer;
