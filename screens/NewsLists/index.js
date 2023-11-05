import React, {Component} from 'react';
import axios from "axios";
import {FlatList, NativeBaseProvider} from "native-base";
import {Separator} from "../../components";
import ArticleList from "../../components/ArticleList";

class NewsLists extends Component {
  state = {
    articles: []
  }

  componentDidMount() {
    axios.get('https://raw.githubusercontent.com/dauditts/pm-static-api/main/articles.json')
        .then(res => {
          const articles = res.data.articles
          this.setState({articles})
        })
        .catch(() => {
          this.props.navigation.goBack()
        })
  }

  render() {
    return (
        <NativeBaseProvider>
          <FlatList
              style={{margin: 20}}
              data={this.state.articles}
              renderItem={({item}) => (<ArticleList title={item.title} imageURI={item.image} date={item.date} onPress={() => this.props.navigation.navigate('NewsDetail', {_title: "knint"})} />)}
              ItemSeparatorComponent={() => <Separator height={20} />}
          />
        </NativeBaseProvider>
    );
  }
}

export default NewsLists;
