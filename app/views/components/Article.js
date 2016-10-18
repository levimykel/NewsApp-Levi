import React, { Component, PropTypes } from 'react';
import {Image, ScrollView, StatusBar, Text, TouchableHighlight, View } from 'react-native';

import application from '../../controllers/application';
import styles from '../stylesheets/article';


export default class Article extends Component {
  // Initialize the hardcoded data
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  static propTypes = {
    uid: PropTypes.string
  }

  _navigate(){
    this.props.navigation.previous();
  }
  
  async componentDidMount() {
    const articleContent = await application.article(this.props.uid);
    this.setState({articleContent});
  }
  
  buildTextSection(textSection) {
    let content  = [],
      length  = textSection.length,
      i       = 0,
      text;
    
    for (; i < length; i++) {
      text = textSection[i]
      switch(text.type) {
        default:
          content.push(<Text style={styles.text} key={"text"+i}>{text.text}</Text>)
          break;
      }
    }
    return content;
  }
  
  
  buildContent(sliceZone) {
    let content  = [],
      length  = sliceZone.length,
      i       = 0,
      slice;

    for (; i < length; i++) {
      slice = sliceZone[i];
      
      switch(slice.sliceType) {
        case "text":
          var text = this.buildTextSection(slice.value.blocks)
          contentAddition = <View key={"textSection"+i}>{text}</View>
          break;
        case "quote":
          contentAddition = <Text key={"quote"+i}>{slice.value.asText()}</Text>
          break;
        case "image-with-caption":
          var imageWithCaption = slice.value.toArray()[0]
          var imageUrl = imageWithCaption.getImage('illustration') ? imageWithCaption.getImage('illustration').url : ''
          var caption = imageWithCaption.getText('caption') || "" 
          contentAddition = <View style={styles.imageWithCaption} key={"imageContainer"+i}><Image source={{uri: imageUrl}} style={styles.image} key={"image"+i}/><Text key={"caption"+i}>{caption}</Text></View>
          break;
      }
      content.push(contentAddition)
    }
    return content;
  }

  render() {
    if (!this.state.articleContent) {
      return null;
    } else {
      const article = this.state.articleContent
      const sliceZone = article.getSliceZone('article.body') || {}
      let content = this.buildContent(sliceZone.slices);

      return (
          <ScrollView>
            <StatusBar
              hidden
            />
            <View style={styles.container}>
              <TouchableHighlight onPress={ () => this._navigate() } underlayColor='rgba(0,0,0,0)'>
                <Text>Back to Home</Text>
              </TouchableHighlight>
              <Text style={styles.title}>
                {article.getStructuredText('article.title').asText()}
              </Text>
              <Image source={{uri: article.getImage('article.image').url}} style={[styles.image, styles.section]}/>
              { !content ?
                <Text>Content is missing, try again later</Text>
              :
                <View>
                  {content}
                </View>
              }
            </View>
          </ScrollView>
      );
    }
  }
}