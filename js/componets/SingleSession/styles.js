import {StyleSheet, Platform} from 'react-native';
import {typography} from '../../config/styles';
const {fontMain, fontMainLight} = typography;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderBottomColor: '#e6e6e6',
    borderBottomWidth: 1,
  },

  title: {
    fontSize: 18,
    paddingLeft: 12,
    paddingTop: 12,
    ...Platform.select({
      android: {
        fontFamily: fontMain,
        color: '#909090',
      },

      ios: {
        fontFamily: fontMain,
        color: 'black',
      },
    }),
  },

  location: {
    fontSize: 14,
    paddingLeft: 12,
    paddingTop: 5,
    paddingBottom: 12,
    ...Platform.select({
      android: {
        fontFamily: fontMain,
        color: '#A9A9A9',
      },

      ios: {
        fontFamily: fontMain,
        color: 'black',
      },
    }),
  },
});

export default styles;
