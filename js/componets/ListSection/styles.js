import {StyleSheet, Platform} from 'react-native';
import {typography} from '../../config/styles';
const {fontMain, fontMainLight} = typography;

const styles = StyleSheet.create({
  timeWrapper: {
    flex: 1,
    justifyContent: 'center',
    height: 30,
    paddingLeft: 12,
    backgroundColor: '#e6e6e6',
  },

  time: {
    fontSize: 16,
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
