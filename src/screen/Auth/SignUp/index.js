import React, {useState} from 'react';
import SignUpPresenter from './SignUpPresenter';
import api from '../../../components/api';

const SignUp = ({navigation: {navigate}}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');

  const isFormValid = () => {
    if (
      email === '' ||
      password === '' ||
      name === '' ||
      age === '' ||
      gender === ''
    ) {
      alert('모두 입력하세요');
      return false;
    }
    return true;
  };

  const onSignUp = async () => {
    if (!isFormValid()) {
      return;
    }
    try {
      const response = await api.createAccount({
        email,
        password,
        name,
        age: parseInt(age),
        gender,
      });
      // 회원가입이 되면
      if (response.status === 200) {
        alert('Sign Up Success!');
        navigate('SignIn');
      }
    } catch (e) {
      alert('이미있는계정');
    }
  };

  return (
    <SignUpPresenter
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      name={name}
      setName={setName}
      age={age}
      setAge={setAge}
      gender={gender}
      setGender={setGender}
      onSignUp={onSignUp}
    />
  );
};

export default SignUp;
