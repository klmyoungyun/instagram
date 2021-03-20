import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './reducers';
import Navigator from './navigation/Navigator';

const App = () => {
  return (
    <Provider store={createStore(rootReducer)}>
      <Navigator />
    </Provider>
  );
};
export default App;
