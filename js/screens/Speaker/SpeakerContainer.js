import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Speaker from './Speaker';
// import console = require('console');

class SpeakerContainer extends Component {
  static navigationOptions = {
    title: 'Speaker',
  };

  render() {
    const {navigation} = this.props;
    const item = navigation.getParam('item');
    console.log(item.speaker);
    return <Speaker item={item.speaker} />;
  }
}

export default SpeakerContainer;
