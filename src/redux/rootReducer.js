import {combineReducers} from 'redux';
import userSlice from './userSlice';
import feedSlice from './feedSlice';
import homeSlice from './homeSlice';

const rootReducer = combineReducers({
  userReducer:  userSlice.reducer,
  feedReducer: feedSlice.reducer,
  homeReducer: homeSlice.reducer,
});
export default rootReducer;

