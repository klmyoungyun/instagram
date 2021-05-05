import React, {useState} from 'react';
import {useDispatch} from 'react-redux';

import {userLogin} from '../../../redux/userSlice';
import SignInPresenter from './SignInPresenter';

export default ({navigation}) => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isFormValid = () => {
    if (email === '' || password === '') {
      alert('모두 입력하세요.');
      return false;
    }
    return true;
  };
  
  const handleSubmit = () => {
    if (!isFormValid()) {
      return;
    }
    dispatch(userLogin({email: email, password: password}));
  };
  return (
    <SignInPresenter
      navigation={navigation}
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      handleSubmit={handleSubmit}
    />
  );
};
