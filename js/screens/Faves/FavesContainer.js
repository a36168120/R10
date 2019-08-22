import React, {Component} from 'react';
import {View, Text} from 'react-native';

class FavesContainer extends Component {
  static navigationOptions = {
    title: 'Faves',
  };

  render() {
    return (
      <View>
        <Text> FavesContainer </Text>
      </View>
    );
  }
}

export default FavesContainer;
