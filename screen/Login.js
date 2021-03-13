import React, {useState} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styled from 'styled-components';
import { onSubmit } from '../Api';

const Container = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
`;
const Contents = styled.View`
  width: 90%;
`;
const TitleContainer = styled.View`
  margin-bottom: 50px;
`;
const InputContainer = styled.View`
  width: 100%;
`;
const TextInput = styled.TextInput`
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
const SearchButton = styled.View`
  height: 45px;
  align-items: flex-end;
  justify-content: center;
`;
const Button = styled.View`
  height: 45px;
  background-color: #7fcafb;
  border-radius: 7px;
  align-items: center;
  justify-content: center;
`;

const Login = () => {
  const [userId, setUserId] = useState(null);
  const [userPassword, setUserPassword] = useState(null);
  return (
    <Container>
      <TitleContainer>
        <Text style={{fontSize: 40}}>Instagram</Text>
      </TitleContainer>

      <Contents>
        <InputContainer>
          <TextInput
            placeholder="전화번호, 사용자 이름 또는 이메일"
            onChangeText={(v) => setUserId(v)}></TextInput>
          <TextInput
            placeholder="비밀번호"
            onChangeText={(v) => setUserPassword(v)}></TextInput>
        </InputContainer>

        <SearchButton>
          <TouchableOpacity>
            <Text style={{color: '#7fcafb'}}>비밀번호 찾기</Text>
          </TouchableOpacity>
        </SearchButton>

        <>
          <TouchableOpacity onPress={() => onSubmit(userId, userPassword)}>
            <Button>
              <Text style={{color: 'white'}}>로그인</Text>
            </Button>
          </TouchableOpacity>
        </>
      </Contents>
    </Container>
  );
};

export default Login;
