import React, {Component} from 'react';
import {View, Text, Image, Linking, ScrollView} from "react-native";
import {PrimaryButton} from "../../components";

class NewsDetail extends Component {
  state = {
    article: {}
  }

  componentDidMount() {
    this.setState({article: this.props.route.params.article})
  }

  render() {
    return (
        <ScrollView style={{flex: 1}}>
          <View style={{padding: 20, backgroundColor: 'white'}}>
            <View>
              <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 20}}>{this.state.article.title}</Text>
              <Text style={{textAlign: 'center', marginTop: 2}}>ITTS - {this.state.article.date}</Text>
            </View>
            <View style={{marginTop: 10}}>
              <Image style={{height: 200, borderRadius: 10}} source={{uri: this.state.article.image}} />
            </View>
            <View style={{marginTop: 10}}>
              <Text>{this.state.article.content}</Text>
            </View>
            <View style={{marginTop: 20}}>
              <PrimaryButton text="Read More" onPress={() => Linking.openURL(this.state.article.link)} />
            </View>
          </View>
        </ScrollView>
    );
  }
}

export default NewsDetail;
