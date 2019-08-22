import {Platform} from 'react-native';

export const typography = {
  ...Platform.select({
    ios: {
      fontMain: 'Montserrat-Light',
    },
    android: {
      fontMain: 'Montserrat-Regular',
    },
  }),
};
