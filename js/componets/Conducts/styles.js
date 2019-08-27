import {StyleSheet} from 'react-native';
import {typography} from '../../config/styles';
const {fontMain, fontMainLight} = typography;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  wrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 12,
    fontSize: 16,
    color: '#9963ea',
  },

  title: {
    paddingTop: 5,
    paddingBottom: 10,
    color: '#9963ea',
    ...Platform.select({
      android: {
        fontFamily: fontMain,

        fontSize: 16,
      },
      ios: {
        fontFamily: fontMain,
        fontSize: 20,
      },
    }),
  },

  description: {
    lineHeight: 30,
    paddingVertical: 30,
    ...Platform.select({
      android: {
        fontFamily: fontMain,
        color: '#A9A9A9',
        fontSize: 16,
      },
      ios: {
        fontFamily: fontMain,
        color: 'black',
        fontSize: 16,
      },
    }),
  },
});

export default styles;
