import React from 'react';
import styled from 'styled-components/native';
import {Dimensions} from 'react-native';
import FeedBody from './FeedBody';

const width = Dimensions.get('window').width;

const Header = styled.View`
  justify-content: center;
  height: ${width / 8}px;
  margin-top: 10px;
`;
const Profile = styled.View`
  align-items: center;
  flex-direction: row;
  margin-left: 10px;
`;
const UserImage = styled.Image`
  width: 34px;
  height: 34px;
  border-radius: 17px;
  margin-right: 10px;
`;
const UserName = styled.Text`
  font-weight: bold;
  font-size: 14px;
`;
const Body = styled.View`
  height: ${width}px;
`;
const Footer = styled.View`
  height: ${width / 4}px;
  margin-left: 10px;
`;
const Like = styled.Text`
  margin-top: 5px;
  margin-bottom: 5px;
  font-weight: bold;
  font-size: 14px;
`;
const Description = styled.Text``;

const Feed = ({id, name, photo, image, like, description}) => {
  return (
    <>
      <Header>
        <Profile>
          {photo ? (
            <UserImage source={{uri: photo}} />
          ) : (
            <UserImage
              source={require('../../Assets/Images/default_profile.png')}
            />
          )}
          <UserName>{name}</UserName>
        </Profile>
      </Header>

      <Body>
        <FeedBody id={id} images={image} />
      </Body>

      <Footer>
        <Like>좋아요 {like}개</Like>
        <Description numberOfLines={2}>
          <UserName>{name} </UserName>
          {description}
        </Description>
      </Footer>
    </>
  );
};
export default Feed;
