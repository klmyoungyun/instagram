import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';

import LoginNavigator from './LoginNavigator';
import MainContainer from './MainNavigator';

const Navigator = () => {
  const {isLoggedIn} = useSelector((state) => state.userReducer);
  return (
    <NavigationContainer>
      {isLoggedIn ? <LoginNavigator /> : <MainContainer />}
    </NavigationContainer>
  );
};
export default Navigator;
