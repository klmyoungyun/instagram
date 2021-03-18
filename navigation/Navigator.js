import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import LoginNavigator from './LoginNavigator';
import MainContainer from './MainNavigator';

const Navigator = () => {
  const userInfo = false;
  return (
    <NavigationContainer>
      {userInfo ? <MainContainer /> : <LoginNavigator />}
    </NavigationContainer>
  );
};

export default Navigator;
