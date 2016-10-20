import React, { Component, PropTypes } from 'react';
import {Image, ScrollView, StatusBar, Text, TouchableHighlight, View } from 'react-native';

import application from '../controllers/application';
import styles from './ArticleStyles';


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
        case 'heading2':
          content.push(<Text style={styles.h2} key={"h2"+i}>{text.text}</Text>)
          break;
        default:
          content.push(<Text style={styles.paragraph} key={"text"+i}>{text.text}</Text>)
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
          contentAddition = <Text style={styles.quote} key={"quote"+i}>&laquo; {slice.value.asText()} &raquo;</Text>
          break;
        case "image-with-caption":
          var imageWithCaption = slice.value.toArray()[0]
          var imageUrl = imageWithCaption.getImage('illustration') ? imageWithCaption.getImage('illustration').url : ''
          var caption = imageWithCaption.getText('caption') || "" 
          contentAddition = <View style={styles.imageWithCaption} key={"imageContainer"+i}><Image source={{uri: imageUrl}} style={styles.image} key={"image"+i} resizeMode="cover"/><Text style={styles.caption} key={"caption"+i}>{caption}</Text></View>
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
      const article = this.state.articleContent.articleDoc
      const layoutDoc = this.state.articleContent.layoutDoc
      const sliceZone = article.getSliceZone('article.body') || {}
      let content = this.buildContent(sliceZone.slices);

      return (
          <ScrollView>
            <StatusBar
              hidden
            />
            <View style={styles.container}>
              <Text style={styles.logo}>
                {layoutDoc.getText('home.logo')}
              </Text>
              
              <TouchableHighlight onPress={ () => this._navigate() } underlayColor='rgba(0,0,0,0)'>
                <Text style={styles.back}>&larr; back to list</Text>
              </TouchableHighlight>
                
              <Text style={styles.title}>
                {article.getStructuredText('article.title').asText()}
              </Text>
              
              <Image source={{uri: article.getImage('article.image').url}} style={[styles.mainImage, styles.section]} resizeMode="cover"/>
              
              { !content ?
                <Text>Content is missing, try again later</Text>
              :
                <View style={styles.contentWrapper}>
                  {content}
              
                  <TouchableHighlight onPress={ () => this._navigate() } underlayColor='rgba(0,0,0,0)'>
                    <Text style={styles.back}>&larr; back to list</Text>
                  </TouchableHighlight>
                </View>
              }
            </View>
          </ScrollView>
      );
    }
  }
}