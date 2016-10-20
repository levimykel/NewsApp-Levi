import { Dimensions, StyleSheet } from 'react-native';

var sectionMarginBottom = 20;
var {width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 20,
    backgroundColor: '#ffffff',
  },
  logo: {
    marginBottom: 30,
    fontSize: 26,
    lineHeight: 26,
    fontFamily: 'montserrat-bold',
    color: '#000000',
  },
  back: {
    marginBottom: 30,
    fontSize: 16,
    lineHeight: 26,
    fontFamily: 'lato-regular',
    color: '#9A9A9A',
  },
  title: {
    marginBottom: 10,
    color: '#000000',
    fontFamily: 'montserrat-bold',
    fontSize: 24,
    lineHeight: 32,
  },
  section: {
    marginBottom: sectionMarginBottom,
  },
  mainImage: {
    width: width - 40,
    height: 150,
  },
  contentWrapper: {
    alignSelf: 'stretch',
    marginBottom: 30,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#DADADA',
  },
  h2: {
    marginBottom: 10,
    fontSize: 22,
    lineHeight: 28,
    fontFamily: 'montserrat-bold',
    color: '#000000',
  },
  paragraph: {
    marginBottom: 16,
    fontSize: 16,
    lineHeight: 28,
    fontFamily: 'lato-regular',
    color: '#5B5B5B',
  },
  quote: {
    marginTop: 10,
    marginBottom: 30,
    fontSize: 18,
    lineHeight: 28,
    fontFamily: 'lato-bold',
    fontStyle: 'italic',
    color: '#000000',
    textAlign: 'center',
  },
  imageWithCaption: {
    flex: 1,
    alignItems: 'center',
    marginBottom: sectionMarginBottom,
  },
  image: {
    width: width - 40,
    height: width * 0.4831,
  },
  caption: {
    marginTop: 0,
    fontSize: 14,
    lineHeight: 28,
    fontFamily: 'lato-regular',
    fontStyle: 'italic',
    color: '#949494',
    textAlign: 'center',
  }
});
