import React from 'react';
import {Platform} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

import Home from '../screen/Main/Home';
import Profile from '../screen/Main/Profile';
import Search from '../screen/Main/Search';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeTab = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

const ProfileTab = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={Profile}/>
    </Stack.Navigator>
  );
};

const SearchTab = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Search" component={Search} />
    </Stack.Navigator>
  );
};
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
      <Tab.Screen name="Home" component={HomeTab}></Tab.Screen>
      <Tab.Screen name="Profile" component={ProfileTab}></Tab.Screen>
      <Tab.Screen name="Search" component={SearchTab}></Tab.Screen>
    </Tab.Navigator>
  );
};
