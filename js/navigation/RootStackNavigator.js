import React from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import AboutScreen from '../screens/About';

const AboutScreen = createStackNavigator({
  Home: {
    screen: AboutScreen,
  },
});

export default AboutScreen;
