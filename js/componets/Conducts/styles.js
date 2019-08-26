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
    fontSize: 16,
    color: '#9963ea',
  },

  title: {
    fontSize: 16,
    paddingTop: 20,
    paddingBottom: 20,
    color: '#9963ea',
    fontFamily: 'Montserrat-Regular',
  },

  description: {
    lineHeight: 30,
    fontSize: 16,
    paddingTop: 20,
    paddingBottom: 20,
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
