import {Platform} from 'react-native';

export const typography = {
  fontMainLight: 'Montserrat-Light',
  ...Platform.select({
    ios: {
      fontMain: 'Montserrat',
    },
    android: {
      fontMain: 'Montserrat-Regular',
    },
  }),
};

export const theme = {
  pallete: {
    title: '#686868',
    text: '#A9A9A9',
    location: '#A9A9A9',
    time: '#686868',
  },
};
