import React, {useEffect} from 'react';
import {Dimensions, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import styled from 'styled-components';

import {loadFeed} from '../../../../redux/feedSlice';

const width = Dimensions.get('window').width;

const FeedContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  background-color:white;
`;
const ImageContainer = styled.View`
  width: ${width / 3}px;
  height: ${width / 3}px;
`;
const Image = styled.Image`
  height: 100%;
  width: 100%;
`;

const ProfileFeed = () => {
  const {memberId} = useSelector((state) => state.userReducer);
  const {profileFeedList} = useSelector((state) => state.feedReducer);

  useEffect(() => {
    loadFeed(memberId);
  }, []);

  return (
    <FeedContainer>
      {profileFeedList.map((item, index) => (
        <TouchableOpacity key={`myfeed${index}`}>
          <ImageContainer
            style={{
              paddingLeft: index % 3 == 0 ? 0 : 1,
              paddingRight: index % 3 == 2 ? 0 : 1,
            }}>
            <Image source={{uri: item.image}} />
          </ImageContainer>
        </TouchableOpacity>
      ))}
    </FeedContainer>
  );
};

export default ProfileFeed;
