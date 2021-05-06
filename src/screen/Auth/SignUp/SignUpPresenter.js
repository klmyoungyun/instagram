import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {Button} from 'react-native';

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
const SignUpPresenter = ({
  email,
  setEmail,
  password,
  setPassword,
  name,
  setName,
  age,
  setAge,
  gender,
  setGender,
  onSignUp,
}) => {
  return (
    <Container>
      <InputContainer>
        <TextContainer
          value={email}
          placeholder="email"
          onChangeText={(text) => setEmail(text)}></TextContainer>
        <TextContainer
          value={password}
          placeholder="password"
          onChangeText={(text) => setPassword(text)}></TextContainer>
        <TextContainer
          value={name}
          placeholder="name"
          onChangeText={(text) => setName(text)}></TextContainer>
        <TextContainer
          value={age}
          placeholder="age"
          onChangeText={(text) => setAge(text)}></TextContainer>
        <TextContainer
          value={gender}
          placeholder="gender"
          onChangeText={(text) => setGender(text)}></TextContainer>
        <Button title="회원가입" onPress={onSignUp}></Button>
      </InputContainer>
    </Container>
  );
};

SignUpPresenter.propTypes = {
  email: PropTypes.string.isRequired,
  setEmail: PropTypes.func.isRequired,
  password: PropTypes.number.isRequired,
  setPassword: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  setName: PropTypes.func.isRequired,
  age: PropTypes.number.isRequired,
  setAge: PropTypes.func.isRequired,
  gender: PropTypes.string.isRequired,
  setGender: PropTypes.func.isRequired,
  onSignUp: PropTypes.func.isRequired,
}
export default SignUpPresenter;
