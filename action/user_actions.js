import axios from 'axios';
import {LOGIN_USER} from './types';

const DOMAIN = '';

export const loginUser = (dataToSubmit) => {
  const request = axios
    .post(`${DOMAIN}/signIn/v1/members`, dataToSubmit)
    .then((response) => response.data)
    .catch((error) => console.log('err'));

  return {
    type: LOGIN_USER,
    payload: request,
  };
};

export const addUser = (dataToSubmit) => {
  const request = axios
    .post(`${DOMAIN}/signUp/v1/members`, dataToSubmit)
    .then((response) => response.data)
    .catch((e) => console.log('err'));

  return request;
};
