import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './reducers';
import LoginNavigator from './navigation/LoginNavigator';

const App = () => {
  return (
    <Provider store={createStore(rootReducer)}>
      <NavigationContainer>
        <LoginNavigator/>
      </NavigationContainer>
    </Provider>
  );
};
export default App;
