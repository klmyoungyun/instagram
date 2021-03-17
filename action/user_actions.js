import axios from 'axios';
import {LOGIN_USER} from './types';

const DOMAIN = '';

export const loginUser = (dataToSubmit) => {
  console.log(dataToSubmit);
  const request = axios
    .post(`${DOMAIN}/signIn/v1/members`, dataToSubmit)
    .then((response) => response.data)
    .catch((error) => console.log('err'));

    console.log(request);
  return {
    type: LOGIN_USER,
    payload: request,
  };
};
