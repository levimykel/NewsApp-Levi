import {StyleSheet} from 'react-native';

var sectionMarginBottom = 20;

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 40,
    paddingRight: 30,
    paddingLeft: 30,
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  section: {
    marginBottom: sectionMarginBottom,
  },
  image: {
    width: 313,
    height: 200,
  },
  text: {
    marginBottom: sectionMarginBottom,
  },
  imageWithCaption: {
    flex: 1,
    alignItems: 'center',
    marginBottom: sectionMarginBottom,
  }
});
