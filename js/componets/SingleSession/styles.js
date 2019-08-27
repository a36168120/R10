import {StyleSheet, Platform} from 'react-native';
import {typography} from '../../config/styles';
const {fontMain, fontMainLight} = typography;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    borderBottomColor: '#e6e6e6',
    borderBottomWidth: 1,
    paddingVertical: 20,
  },

  title: {
    paddingLeft: 12,
    ...Platform.select({
      android: {
        fontFamily: fontMain,
        color: '#686868',
        fontSize: 18,
      },

      ios: {
        fontFamily: fontMain,
        color: 'black',
        fontSize: 20,
      },
    }),
  },

  location: {
    paddingLeft: 12,
    paddingTop: 8,
    color: '#A9A9A9',
    ...Platform.select({
      android: {
        fontFamily: fontMain,
        fontSize: 14,
      },

      ios: {
        fontFamily: fontMain,
        fontSize: 16,
      },
    }),
  },

  wrapper: {
    flex: 1,
    paddingRight: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  heart: {
    color: '#cf392a',
  },
});

export default styles;
