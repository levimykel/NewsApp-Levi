import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 20,
    backgroundColor: '#ffffff',
  },
  logoWrapper:{
    alignSelf: 'stretch',
    marginBottom: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#DADADA',
  },
  logo: {
    paddingBottom: 20,
    fontSize: 26,
    lineHeight: 26,
    fontFamily: 'montserrat-bold',
    color: '#000000',
  },
  articleTilesWrapper:{
    alignSelf: 'stretch',
    marginBottom: 20,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#DADADA',
  },
});
