import React from 'react';
import styled from 'styled-components';
import {TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import {HeaderIcon} from '../Utility';
import Tab from './Tab';

const MainStack = createStackNavigator();

const Header = styled.View`
  flex-direction: row;
`;

const MainContainer = () => {
  return (
    <MainStack.Navigator
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
      <MainStack.Screen name="Tab" component={Tab}></MainStack.Screen>
    </MainStack.Navigator>
  );
};

export default MainContainer;
