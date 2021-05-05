import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styled from 'styled-components';

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
const SmallBtn = styled.View`
  height: 30px;
  align-items: flex-end;
  justify-content: center;
  margin-bottom : 10px;
`;
const Btn = styled.View`
  height: 45px;
  background-color: #7fcafb;
  border-radius: 7px;
  align-items: center;
  justify-content: center;
`;
export default ({
  navigation,
  email,
  setEmail,
  password,
  setPassword,
  handleSubmit,
}) => {
  return (
    <Container>
      <TitleContainer>
        <Text style={{fontSize: 40}}>Instagram</Text>
      </TitleContainer>

      <Contents>
        <InputContainer>
          <TextInput
            value={email}
            placeholder="전화번호, 사용자 이름 또는 이메일"
            onChangeText={(value) => setEmail(value)}></TextInput>
          <TextInput
            value={password}
            placeholder="비밀번호"
            onChangeText={(value) => setPassword(value)}></TextInput>
        </InputContainer>

        <SmallBtn>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={{color: '#7fcafb'}}>회원가입</Text>
          </TouchableOpacity>
        </SmallBtn>
        
        <>
          <TouchableOpacity onPress = {handleSubmit}>
            <Btn>
              <Text style={{color: 'white'}}>로그인</Text>
            </Btn>
          </TouchableOpacity>
        </>
      </Contents>
    </Container>
  );
};
