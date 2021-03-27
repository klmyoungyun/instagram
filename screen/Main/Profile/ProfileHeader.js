import React from 'react';
import {Dimensions, Text, TouchableOpacity} from 'react-native';
import styled from 'styled-components';

const width = Dimensions.get('screen').width;

const PrifileHeader = styled.View`
  flex-direction: row;
  padding-left: 15px;
  padding-right: 15px;
`;
const ProfileImageContainer = styled.View`
  background-color: red;
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
  background-color: blue;
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

const ProfileBottom = styled.View`
  flex-direction: row;
  padding-left: 15px;
  padding-right: 15px;
  align-items: center;
  justify-content: space-evenly;
`;
const Btn = styled.View`
  width: ${width / 2.4}px;
  border: 1px solid darkgray;
`;

export default ({image, posts, follower, following}) => {
  return (
    <>
      <PrifileHeader>
        <ProfileImageContainer>
          <ProfileImage
            source={{uri: 'https://steemitimages.com/u/jaydih/avatar'}}
          />
        </ProfileImageContainer>

        <ProfileContent>
          <ProfileItem>
            <LabelCount>{posts}</LabelCount>
            <LabelTitle>게시물</LabelTitle>
          </ProfileItem>
          <ProfileItem>
            <LabelCount>{follower}</LabelCount>
            <LabelTitle>팔로워</LabelTitle>
          </ProfileItem>
          <ProfileItem>
            <LabelCount>{following}</LabelCount>
            <LabelTitle>팔로잉</LabelTitle>
          </ProfileItem>
        </ProfileContent>
      </PrifileHeader>

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
    </>
  );
};
