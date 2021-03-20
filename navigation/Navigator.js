import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {connect} from 'react-redux';

import LoginNavigator from './LoginNavigator';
import MainContainer from './MainNavigator';
import {useState} from 'react';

const Navigator = (props) => {
  const [userInfo, setUserInfo] = useState(false);

  useEffect(() => {
    if (props?.state?.userReducer?.loginSuccess !== undefined) {
      setUserInfo(true);
    }
  });

  return (
    <NavigationContainer>
      {userInfo ? <MainContainer /> : <LoginNavigator />}
    </NavigationContainer>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {state};
};
export default connect(mapStateToProps, null)(Navigator);
