import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import TabNavigator from './TabNavigator';

const MainStack = createStackNavigator();
const MainContainer = () => {
  return (
    <MainStack.Navigator screenOptions={{headerShown: false}}>
      <MainStack.Screen name="Tab" component={TabNavigator}></MainStack.Screen>
    </MainStack.Navigator>
  );
};

export default MainContainer;
