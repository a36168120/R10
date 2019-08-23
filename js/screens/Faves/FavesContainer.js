import React, {Component} from 'react';
import {View, Text} from 'react-native';
import FavesContext from '../../context/FavesContext';

class FavesContainer extends Component {
  static navigationOptions = {
    title: 'Faves',
  };

  render() {
    return (
      <FavesContext.Consumer>
        {value => (
          <View>
            <Text> FavesContainer </Text>
          </View>
        )}
      </FavesContext.Consumer>
    );
  }
}

export default FavesContainer;
