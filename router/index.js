import React, {Component} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home, NewsLists} from "../screens";

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
              options={{ headerShown: true, title: 'Berita Hari ini' }}
          />
        </Stack.Navigator>
    );
  }
}

export default Router;
