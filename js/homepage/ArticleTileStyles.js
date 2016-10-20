import { Dimensions, StyleSheet } from 'react-native';

var {width} = Dimensions.get('window');

export default StyleSheet.create({
  articleTile: {
    marginBottom: 50,
  },
  image: {
    width: width - 40,
    height: 100,
    marginBottom: 20,
  },
  title: {
    marginBottom: 10,
    fontSize: 22,
    lineHeight: 28,
    fontFamily: 'montserrat-bold',
    color: '#000000',
  },
  metaInfo: {
    marginBottom: 10,
    fontSize: 16,
    lineHeight: 28,
    fontFamily: 'montserrat-bold',
    color: '#000000',
  },
  date: {
    fontFamily: 'montserrat-regular',
    color: '#ABABAB',
  },
  description: {
    marginBottom: 20,
    fontSize: 16,
    lineHeight: 28,
    fontFamily: 'lato-regular',
    color: '#5B5B5B',
  },
  button: {
    width: 180,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: '#000000',
    borderRadius: 4,
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 16,
    fontFamily: 'montserrat-bold',
    color: '#ffffff',
    textAlign: 'center',
  }
});
