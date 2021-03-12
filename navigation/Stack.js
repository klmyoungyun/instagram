import React from 'react';
import {TouchableOpacity} from 'react-native';
import styled from 'styled-components';
import {createStackNavigator} from '@react-navigation/stack';
import {HeaderIcon} from '../Utility';
import Tab from './Tab';

const Stack = createStackNavigator();

const Header = styled.View`
  flex-direction: row;
`;

export default () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {shadowColor: 'white'},
        headerTitle: 'instagram',
        headerTitleAlign: 'left',
        headerTitleStyle: {fontSize: 25},
        headerRight: () => (
          <Header>
            <TouchableOpacity>{HeaderIcon('plus-square')}</TouchableOpacity>
            <TouchableOpacity>{HeaderIcon('heart')}</TouchableOpacity>
            <TouchableOpacity>{HeaderIcon('send')}</TouchableOpacity>
          </Header>
        ),
      }}>
      <Stack.Screen name="Tab" component={Tab}></Stack.Screen>
    </Stack.Navigator>
  );
};
