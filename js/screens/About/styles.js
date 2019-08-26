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
    fontSize: 30,
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

  text: {
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
