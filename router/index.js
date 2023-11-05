import React, {Component} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home, NewsDetail, NewsLists} from "../screens";

const Stack = createNativeStackNavigator();

class Router extends Component {
  render() {
    return (
        <Stack.Navigator>
          <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
          />
          <Stack.Screen
              name="NewsLists"
              component={NewsLists}
              options={{ headerShown: true, title: 'Berita Terbaru' }}
          />
          <Stack.Screen
              name="NewsDetail"
              component={NewsDetail}
              options={{ headerShown: true, title: 'Detail Berita' }}
          />
        </Stack.Navigator>
    );
  }
}

export default Router;
