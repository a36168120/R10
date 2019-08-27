import {StyleSheet, Platform} from 'react-native';
import {typography} from '../../config/styles';
const {fontMain, fontMainLight} = typography;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 16,
  },

  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  location: {
    ...Platform.select({
      android: {
        fontFamily: fontMain,
        color: '#A9A9A9',
        fontSize: 18,
      },

      ios: {
        fontFamily: fontMain,
        color: '#A9A9A9',
        fontSize: 20,
      },
    }),
  },

  heart: {
    color: '#cf392a',
  },

  title: {
    paddingVertical: 12,
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
    fontWeight: 'bold',
    color: '#cf392a',
    ...Platform.select({
      android: {
        fontSize: 18,
        paddingVertical: 6,
      },

      ios: {
        fontSize: 20,
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
        color: '#808080',
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

  bigWrapper: {
    flex: 1,
    paddingTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  btnWrapper: {
    height: 60,
    width: 220,
    borderRadius: 50,
    overflow: 'hidden',
  },

  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  btnTxt: {
    color: 'white',
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
});

export default styles;
