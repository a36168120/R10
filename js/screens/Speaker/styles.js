import {StyleSheet} from 'react-native';
import {typography} from '../../config/styles';
const {fontMain, fontMainLight} = typography;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingHorizontal: 12,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 75,
  },

  backbtn: {
    color: 'white',
    fontSize: 15,
    alignContent: 'flex-start',
  },

  wrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: fontMain,
  },

  infoContainer: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 12,
    backgroundColor: 'white',
    borderRadius: 10,
  },

  image: {
    height: 100,
    width: 100,
    borderRadius: 80,
    resizeMode: 'contain',
    paddingVertical: 12,
  },

  name: {
    paddingVertical: 12,
    fontFamily: fontMain,
    fontSize: 26,
    ...Platform.select({
      android: {
        color: '#808080',
      },
    }),
  },

  bio: {
    paddingHorizontal: 20,
    fontFamily: fontMainLight,
    fontSize: 18,
    lineHeight: 25,
  },

  bigWrapper: {
    flex: 1,
    paddingTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  btnWrapper: {
    height: 60,
    width: 300,
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
