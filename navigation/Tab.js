import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Platform} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from '../screen/Home';
import Profile from '../screen/Profile';
import Search from '../screen/Search';

const Tab = createBottomTabNavigator();

export default () => {
  return (
    <Tab.Navigator
      tabBarOptions={{showLabel: false}}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          let iconName = Platform.OS === 'ios' ? 'ios-' : 'md-';
          switch (route.name) {
            case 'Home':
              iconName += focused ? 'home-sharp' : 'home-outline';
              break;
            case 'Search':
              iconName += focused ? 'search-sharp' : 'search-outline';
              break;
            case 'Profile':
              iconName += focused ? 'person-circle' : 'person-circle-outline';
              break;
          }
          return <Icon name={iconName} size={26} color="black" />;
        },
      })}>
      <Tab.Screen name="Home" component={Home}></Tab.Screen>
      <Tab.Screen name="Profile" component={Profile}></Tab.Screen>
      <Tab.Screen name="Search" component={Search}></Tab.Screen>
    </Tab.Navigator>
  );
};
