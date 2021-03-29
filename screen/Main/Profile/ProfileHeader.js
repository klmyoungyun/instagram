import React from 'react';
import {Dimensions, Text, TouchableOpacity} from 'react-native';
import styled from 'styled-components';

const width = Dimensions.get('screen').width;

const Container = styled.View`
  padding-left: 15px;
  padding-right: 15px;
  background-color: #fff;
`;

const PrifileHeader = styled.View`
  margin-top: 10px;
  flex-direction: row;
`;
const ProfileImageContainer = styled.View`
  flex: 1;
  padding: 3px;
  align-items: center;
  justify-content: center;
`;
const ProfileImage = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 40px;
`;
const ProfileContent = styled.View`
  flex: 3;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;
const ProfileItem = styled.View`
  align-items: center;
  justify-content: center;
`;
const LabelCount = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;
const LabelTitle = styled.Text`
  font-weight: 300;
`;
const ProfileMessage = styled.View`
  justify-content: center;
  height: 50px;
  margin-bottom: 5px;
`;
const Message = styled.Text`
  line-height: 20px;
  font-size: 12px;
`;
const ProfileBottom = styled.View`
  flex-direction: row;
  justify-content: space-between;
  height: 30px;
`;
const Btn = styled.View`
  width: ${width / 2.2}px;
  justify-content: center;
  align-items: center;
  height: 100%;
  border: 1px solid darkgray;
  border-radius: 5px;
`;

export default ({profileData}) => {
  return (
    <Container>
      <PrifileHeader>
        <ProfileImageContainer>
          <ProfileImage source={{uri: profileData.profileImage}} />
        </ProfileImageContainer>

        <ProfileContent>
          <ProfileItem>
            <LabelCount>{profileData.posts}</LabelCount>
            <LabelTitle>게시물</LabelTitle>
          </ProfileItem>
          <ProfileItem>
            <LabelCount>{profileData.follower}</LabelCount>
            <LabelTitle>팔로워</LabelTitle>
          </ProfileItem>
          <ProfileItem>
            <LabelCount>{profileData.following}</LabelCount>
            <LabelTitle>팔로잉</LabelTitle>
          </ProfileItem>
        </ProfileContent>
      </PrifileHeader>

      <ProfileMessage>
        <Message numberOfLines={2}>{profileData.message}</Message>
      </ProfileMessage>

      <ProfileBottom>
        <TouchableOpacity>
          <Btn>
            <Text>프로필 편집</Text>
          </Btn>
        </TouchableOpacity>
        <TouchableOpacity>
          <Btn>
            <Text>저장됨</Text>
          </Btn>
        </TouchableOpacity>
      </ProfileBottom>
    </Container>
  );
};
