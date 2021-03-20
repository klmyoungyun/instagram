import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Tab from './Tab';

const MainStack = createStackNavigator();
const MainContainer = () => {
  return (
    <MainStack.Navigator screenOptions={{headerShown: false}}>
      <MainStack.Screen name="Tab" component={Tab}></MainStack.Screen>
    </MainStack.Navigator>
  );
};

export default MainContainer;
