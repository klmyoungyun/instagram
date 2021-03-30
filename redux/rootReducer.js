import {combineReducers} from 'redux';
import userSlice from './userSlice';
import feedSlice from './feedSlice';

const rootReducer = combineReducers({
  userReducer:  userSlice.reducer,
  feedReducer: feedSlice.reducer,
});
export default rootReducer;

