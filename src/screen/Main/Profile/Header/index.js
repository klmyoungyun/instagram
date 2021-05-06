import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.View`
  padding-left: 15px;
  padding-right: 15px;
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
  justify-content: center;
  align-items:center;
  height: 30px;
  margin-bottom: 15px;
`;
const Btn = styled.View`
  justify-content: center;
  align-items: center;
  height: 100%;
  border: 1px solid darkgray;
  border-radius: 5px;
`;

const ProfileHeader= ({profileData}) => {
  return (
    <Container>
      <PrifileHeader>
        <ProfileImageContainer>
          {profileData.profileImage ? (
            <ProfileImage source={{uri: profileData.profileImage}} />
          ) : (
            <ProfileImage
              source={require('../../../../Assets/Images/default_profile.png')}
            />
          )}
        </ProfileImageContainer>

        <ProfileContent>
          <ProfileItem>
            <LabelCount>{profileData.posts ? profileData.posts : 0}</LabelCount>
            <LabelTitle>Posts</LabelTitle>
          </ProfileItem>
          <ProfileItem>
            <LabelCount>{profileData.follower ? profileData.follower : 0}</LabelCount>
            <LabelTitle>Follower</LabelTitle>
          </ProfileItem>
          <ProfileItem>
            <LabelCount>{profileData.following ? profileData.following : 0}</LabelCount>
            <LabelTitle>Following</LabelTitle>
          </ProfileItem>
        </ProfileContent>
      </PrifileHeader>

      <ProfileMessage>
        <Text>{profileData.name}</Text>
        <Message numberOfLines={2}>{profileData.message}</Message>
      </ProfileMessage>

      <ProfileBottom>
        <TouchableOpacity style={{width:'100%'}}>
          <Btn>
            <Text style={{fontWeight: 'bold'}}>Edit Profile</Text>
          </Btn>
        </TouchableOpacity>
      </ProfileBottom>
    </Container>
  );
};

ProfileHeader.propTyes = {
  profileData : PropTypes.object.isRequired,
}

export default ProfileHeader;