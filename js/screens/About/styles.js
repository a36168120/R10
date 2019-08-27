import {StyleSheet, Plateform} from 'react-native';
import {typography} from '../../config/styles';

const {fontMain, fontMainLight} = typography;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
  },

  image: {
    height: 100,
    width: '100%',
    resizeMode: 'center',
  },

  line: {
    width: '100%',
    borderBottomColor: '#e6e6e6',
    borderBottomWidth: 1,
  },

  header: {
    ...Platform.select({
      android: {
        fontFamily: fontMain,
        color: '#686868',
        fontSize: 26,
      },
      ios: {
        fontFamily: fontMain,
        color: 'black',
        fontSize: 30,
      },
    }),
  },

  text: {
    fontSize: 16,
    paddingTop: 20,
    paddingBottom: 20,
    ...Platform.select({
      android: {
        fontFamily: fontMainLight,
        color: '#A9A9A9',
      },
      ios: {
        fontFamily: fontMainLight,
        color: 'black',
        lineHeight: 25,
      },
    }),
  },
});

export default styles;
