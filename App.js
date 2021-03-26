import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';

import rootReducer from './redux/rootReducer';
import Navigator from './navigation/Navigator';

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));
const App = () => {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
};
export default App;
