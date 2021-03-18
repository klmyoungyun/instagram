import React from 'react';
import {useState} from 'react';
import styled from 'styled-components';
import {Button} from 'react-native';
import { addUser } from '../action/user_actions';

const Container = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
`;
const InputContainer = styled.View`
  width: 90%;
`;
const TextContainer = styled.TextInput`
  height: 45px;
  min-height: auto;
  min-width: auto;
  color: #262626;
  border-color: #dbdbdb;
  border-width: 1px;
  border-radius: 7px;
  background-color: #fafafa;
  margin-bottom: 10px;
  padding: 9px 0px 7px 8px;
`;
const SignUp = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSignUp = (e) => {
    e.preventDefault();
    const success = addUser({email: email, password: password});
    if (success) {
      navigation.goBack();
    }
  };

  return (
    <Container>
      <InputContainer>
        <TextContainer
          placeholder="이메일"
          onChangeText={(value) => setEmail(value)}></TextContainer>
        <TextContainer
          placeholder="비밀번호"
          onChangeText={(value) => setPassword(value)}></TextContainer>
        <Button title="회원가입" onPress={onSignUp}></Button>
      </InputContainer>
    </Container>
  );
};

export default SignUp;
