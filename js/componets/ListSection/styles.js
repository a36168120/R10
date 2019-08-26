import {StyleSheet, Platform} from 'react-native';
import {typography} from '../../config/styles';
const {fontMain, fontMainLight} = typography;

const styles = StyleSheet.create({
  time: {
    fontSize: 16,
    alignItems: 'center',
    height: 25,
    paddingLeft: 12,
    backgroundColor: '#e6e6e6',
    ...Platform.select({
      android: {
        fontFamily: fontMain,
        color: '#686868',
      },

      ios: {
        fontFamily: fontMain,
        color: 'black',
      },
    }),
  },
});

export default styles;
