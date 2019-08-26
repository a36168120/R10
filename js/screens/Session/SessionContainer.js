import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Session from './Session';
import styles from './styles';
import FavesContext from '../../context/FavesContext';

class SessionContainer extends Component {
  static navigationOptions = {
    title: 'Session',
  };

  render() {
    const {navigation} = this.props;
    const item = navigation.getParam('item');
    return (
      <FavesContext.Consumer>
        {({faveIds, addFaveSession, removeFaveSession}) => (
          <View style={styles.container}>
            <Session
              item={item}
              navigation={navigation}
              faveIds={faveIds}
              addFaveSession={addFaveSession}
              removeFaveSession={removeFaveSession}
            />
          </View>
        )}
      </FavesContext.Consumer>
    );
  }
}

export default SessionContainer;
