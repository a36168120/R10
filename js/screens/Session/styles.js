import {StyleSheet, Platform} from 'react-native';
import {typography} from '../../config/styles';
const {fontMain, fontMainLight} = typography;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },

  location: {
    paddingVertical: 12,
    ...Platform.select({
      android: {
        fontFamily: fontMain,
        color: '#A9A9A9',
        fontSize: 18,
      },

      ios: {
        fontFamily: fontMain,
        color: '#A9A9A9',
        fontSize: 22,
      },
    }),
  },

  title: {
    paddingVertical: 6,
    ...Platform.select({
      android: {
        fontFamily: fontMain,
        color: '#686868',
        fontSize: 24,
      },

      ios: {
        fontFamily: fontMain,
        color: 'black',
        fontSize: 28,
      },
    }),
  },

  time: {
    fontFamily: fontMainLight,
    color: '#cf392a',
    ...Platform.select({
      android: {
        fontSize: 18,
        paddingVertical: 6,
      },

      ios: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingVertical: 12,
      },
    }),
  },

  description: {
    fontFamily: fontMainLight,
    ...Platform.select({
      android: {
        fontFamily: fontMainLight,
        color: '#808080',
        fontSize: 16,
        paddingVertical: 6,
      },

      ios: {
        fontFamily: fontMainLight,
        color: 'black',
        fontSize: 19,
        lineHeight: 30,
        paddingVertical: 12,
      },
    }),
  },

  present: {
    paddingTop: 12,
    paddingBottom: 12,
    fontSize: 18,
    color: '#A9A9A9',
    ...Platform.select({
      android: {
        fontFamily: fontMain,
      },

      ios: {
        fontFamily: fontMain,
      },
    }),
  },

  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  image: {
    resizeMode: 'contain',
    ...Platform.select({
      android: {
        borderRadius: 100,
        height: 60,
        width: 60,
      },

      ios: {
        borderRadius: 50,
        height: 80,
        width: 80,
      },
    }),
  },

  speaker: {
    paddingLeft: 16,
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

  line: {
    paddingTop: 20,
    width: '100%',
    borderBottomColor: '#e6e6e6',
    borderBottomWidth: 1,
  },

  button: {
    width: 100,
    height: 100,
    backgroundColor: '#9963ea',
  },
});

export default styles;
