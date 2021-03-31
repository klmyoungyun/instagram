import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';

import rootReducer from './redux/rootReducer';
import Navigator from './navigation/Navigator';
import { StatusBar } from 'react-native';

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));
const App = () => {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor="#d3d3d3" barStyle='dark-content' />
      <Navigator />
    </Provider>
  );
};
export default App;
