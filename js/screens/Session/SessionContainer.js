import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Session from './Session';
import styles from './styles';
// import console = require('console');

class SessionContainer extends Component {
  static navigationOptions = {
    title: 'Session',
  };

  render() {
    const {navigation} = this.props;
    const item = navigation.getParam('item');
    return (
      <View style={styles.title}>
        <Session item={item} navigation={navigation} />
      </View>
    );
  }
}

export default SessionContainer;
