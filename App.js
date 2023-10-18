//<!--Hoàn thiện các màn hình MainScreen (7-8-9-10-11-12) trong thiết kế đính kèm-->
//Output: Link git commit + Ảnh chụp màn hình kết quả đạt được / video

import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

// Import các màn hình của bạn
import HomeScreen from './screens/HomeScreen';
import Collections from './screens/Collections';
import Saved from './screens/Saved';
import  Search  from './screens/Search';



const Tab = createBottomTabNavigator();

const App = () => (
  <NavigationContainer>
    <Tab.Navigator
   screenOptions={({ route }) => ({
    tabBarIcon: ({ color, size }) => {
      let iconName;

      if (route.name === 'Home') {
        iconName = 'home';
      } else if (route.name === 'Collections') {
        iconName = 'align-left';
      }
      else if (route.name === 'Saved') {
        iconName = 'heart';
      }
      else if (route.name === 'Search') {
        iconName = 'search';
      }
      return <Icon name={iconName} size={size} color={color} />;
    },
  })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Collections" component={Collections} />
      <Tab.Screen name="Saved" component={Saved} />
      <Tab.Screen name="Search" component={Search} />
    </Tab.Navigator>
  </NavigationContainer>
);

export default App;


