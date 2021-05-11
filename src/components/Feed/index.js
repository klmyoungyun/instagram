import React, {useState} from 'react';
import styled from 'styled-components/native';
import {Dimensions, Text, View} from 'react-native';
import FeedBody from './FeedBody';
import PropTypes from 'prop-types';

const width = Dimensions.get('window').width;

const FeedContainer = styled.View`
  background-color:white;
`;
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
  margin: 0px 12px;
`;
const Like = styled.Text`
  margin-top: 5px;
  margin-bottom: 5px;
  font-weight: bold;
  font-size: 14px;
`;
const Description = styled.Text``;
const MoreBtn = styled.Text`
  color: gray;
`;
const Comment = styled.View`
  margin-top: 5px;
  margin-bottom: 5px;
`;

const Feed = ({id, name, photo, image, like, description, comment = 0}) => {
  const [showMore, setShowMore] = useState(true);

  return (
    <FeedContainer>
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
        <Description numberOfLines={showMore ? 2 : 0}>
          <UserName>{name} </UserName>
          {description}
        </Description>
        <MoreBtn onPress={() => setShowMore(!showMore)}>
          {showMore ? '더보기' : ''}
        </MoreBtn>
        <Comment>
          <Text style={{color: 'gray'}}>댓글 {comment}개 모두 보기</Text>
        </Comment>
      </Footer>
    </FeedContainer>
  );
};

Feed.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  photo: PropTypes.string,
  image: PropTypes.array.isRequired,
  like: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  comment: PropTypes.number.isRequired,
};

export default Feed;
