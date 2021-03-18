import {createStore} from 'redux';

import {LOGIN_USER, SIGNUP_USER} from '../action/types';

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {...state, loginSuccess: action.payload};
    default:
      return {...state};
  }
};
export default userReducer;
