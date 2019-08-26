import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Query} from 'react-apollo';
import {gql} from 'apollo-boost';
import FavesContext from '../../context/FavesContext';
import Faves from './Faves';
// import console = require('console');

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
              console.log('fasfasafafa', data);
              console.log('ffaveiiiiidddss', faveIds);
              console.log('sessiiion', data.allSessions);
              const faves = data.allSessions.filter(session =>
                faveIds.includes(session.id),
              );
              console.log(faves);

              return (
                <View>
                  <Faves
                    faves={faves}
                    faveIds={faveIds}
                    // removeFaveSession={removeFaveSession}
                  />
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
