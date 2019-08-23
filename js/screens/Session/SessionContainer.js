import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Session from './Session';
import styles from './styles';
import FavesContext from '../../context/FavesContext';
// import console = require('console');

class SessionContainer extends Component {
  static navigationOptions = {
    title: 'Session',
  };

  render() {
    const {navigation} = this.props;
    const item = navigation.getParam('item');
    return (
      <FavesContext.Consumer>
        {value => (
          <View style={styles.container}>
            <Session item={item} navigation={navigation} />
          </View>
        )}
      </FavesContext.Consumer>
    );
  }
}

export default SessionContainer;
