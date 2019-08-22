import {StyleSheet, Plateform} from 'react-native';
import {typography} from '../../config/styles';

const {fontMain} = typography;

const styles = StyleSheet.create({
  image: {
    height: 100,
    width: '100%',
    resizeMode: 'center',
  },

  ios: {
    fontFamily: fontMain,
  },

  android: {
    fontFamily: fontMain,
  },

  // text: {
  //   fontSize: 28,
  //   ...Plateform.select({
  //     ios: {
  //       color: 'red',
  //     },
  //     android: {
  //       color: 'blue',
  //     },
  //   }),
  // },
});

export default styles;
