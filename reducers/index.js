import {combineReducers} from 'redux';
import userReducer from './user_reducers';

const rootReducer = combineReducers({
  userReducer,
});
export default rootReducer;
