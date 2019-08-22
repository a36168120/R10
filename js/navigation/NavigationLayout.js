import React from 'react';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';
import AboutScreen from '../screens/About';
import FavesScreen from '../screens/Faves';
import MapScreen from '../screens/Map';
import ScheduleScreen from '../screens/Schedule';
import SessionScreen from '../screens/Session';
import {sharedNavigationOptions} from './config';
import Ionicons from 'react-native-vector-icons/Ionicons';

const AboutStack = createStackNavigator(
  {
    About: {
      screen: AboutScreen,
    },
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      ...sharedNavigationOptions(navigation),
    }),
  },
);

const MapStack = createStackNavigator(
  {
    Map: {
      screen: MapScreen,
    },
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      ...sharedNavigationOptions(navigation),
    }),
  },
);

const FavesStack = createStackNavigator(
  {
    Faves: {
      screen: FavesScreen,
    },

    Session: {
      screen: SessionScreen,
    },
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      ...sharedNavigationOptions(navigation),
    }),
  },
);

const ScheduleStack = createStackNavigator(
  {
    Schedule: {
      screen: ScheduleScreen,
    },

    Session: {
      screen: SessionScreen,
    },
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      ...sharedNavigationOptions(navigation),
    }),
  },
);

export default createBottomTabNavigator(
  {
    Schedule: ScheduleStack,
    Map: MapStack,
    Faves: FavesStack,
    About: AboutStack,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, horizontal, tintColor}) => {
        const {routeName} = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Schedule') {
          iconName = `ios-calendar`;
        } else if (routeName === 'Map') {
          iconName = `ios-map`;
        } else if (routeName === 'Faves') {
          iconName = `ios-heart`;
        } else if (routeName === 'About') {
          iconName = `ios-information-circle-outline`;
        }
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
  },
  {
    tabBarOptions: {
      activeTintColor: '#FFFFFF',
      inactiveTintColor: '#808080',

      labelStyle: {
        fontSize: 12,
        fontFamily: 'Montserrat-Regular',
      },

      style: {
        backgroundColor: 'blue',
      },
    },
  },
);
