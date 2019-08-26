import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Speaker from './Speaker';

class SpeakerContainer extends Component {
  static navigationOptions = {
    title: 'Speaker',
  };

  render() {
    const {navigation} = this.props;
    const item = navigation.getParam('item');
    return <Speaker item={item.speaker} />;
  }
}

export default SpeakerContainer;
