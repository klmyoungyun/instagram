import React from 'react';
import styled from 'styled-components/native';
import {Dimensions} from 'react-native';
import FeedBody from './FeedBody';
import PropTypes from "prop-types";

const width = Dimensions.get('window').width;

const Header = styled.View`
  justify-content: center;
  height: ${width / 7}px;
`;
const Profile = styled.View`
  align-items: center;
  flex-direction: row;
  margin: 0px 12px;
`;
const UserImage = styled.Image`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  margin-right: 12px;
`;
const UserName = styled.Text`
  font-weight: bold;
  font-size: 14px;
`;
const Body = styled.View`
  height: 400px;
`;
const Footer = styled.View`
  height: ${width / 4}px;
  margin: 0px 12px;
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

Feed.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  photo: PropTypes.string,
  image: PropTypes.array.isRequired,
  like: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
}

export default Feed;
