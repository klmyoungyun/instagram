import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../component/Login';
import SignUp from '../component/SignUp';

const LoginStack = createStackNavigator();

const LoginNavigator = () => {
  return (
    <LoginStack.Navigator screenOptions={{headerShown: false}}>
      <LoginStack.Screen name="Login" component={Login} />
      <LoginStack.Screen name="SignUp" component={SignUp} />
    </LoginStack.Navigator>
  );
};
export default LoginNavigator;
