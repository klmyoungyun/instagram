import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SignUp from "../screen/Auth/SignUp/index";
import SignIn from '../screen/Auth/SignIn/index';

const LoginStack = createStackNavigator();

const LoginNavigator = () => {
  return (
    <LoginStack.Navigator screenOptions={{headerShown: false}}>
      <LoginStack.Screen name="SignIn" component={SignIn} />
      <LoginStack.Screen name='SignUp' component={SignUp}/>
    </LoginStack.Navigator>
  );
};
export default LoginNavigator;
